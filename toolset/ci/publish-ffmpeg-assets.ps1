param(
    [Parameter(Mandatory)]
    [ValidatePattern('^\d+\.\d+\.\d+$')]
    [string]$Version,
    [Parameter(Mandatory)]
    [string]$AssetDirectory
)

$ErrorActionPreference = 'Stop'
$repo = $env:GITHUB_REPOSITORY
$target = $env:GITHUB_SHA
$channelTag = 'ffmpeg-binaries'
$versionTag = "ffmpeg-v$Version"
$title = "FFmpeg $Version binaries"
$paths = @(Get-ChildItem -LiteralPath $AssetDirectory -File)
if ($paths.Count -ne 12) { throw 'Expected twelve verified FFmpeg assets.' }
$files = @{}
foreach ($file in $paths) {
    $files[$file.Name] = @{
        Path = $file.FullName
        Digest = 'sha256:' + (Get-FileHash -LiteralPath $file.FullName).Hash.ToLowerInvariant()
    }
}

function Get-Release([string]$Tag) {
    $response = gh api --paginate --slurp "repos/$repo/releases?per_page=100"
    if ($LASTEXITCODE -ne 0) { throw "Could not list releases for $repo." }
    $pages = $response | ConvertFrom-Json -NoEnumerate
    $matching = @(foreach ($page in $pages) {
        foreach ($release in $page) {
            if ($release.tag_name -ceq $Tag) { $release }
        }
    })
    if ($matching.Count -gt 1) { throw "Multiple releases found for $Tag." }
    if ($matching.Count -eq 1) { $matching[0] }
}

function Get-MissingAssets($Release) {
    foreach ($name in $files.Keys) {
        $asset = @($Release.assets | Where-Object { $_.name -ceq $name })
        if ($asset.Count -eq 0) {
            $files[$name].Path
        } elseif ($asset.Count -ne 1 -or $asset[0].state -ne 'uploaded' -or $asset[0].digest -ne $files[$name].Digest) {
            throw "Asset $name in $($Release.tag_name) differs from the verified file."
        }
    }
}

function Publish-VerifiedRelease([string]$Tag, [string]$Notes, $Release) {
    if (!$Release) {
        gh release create $Tag --repo $repo --target $target --title $title --notes-file $Notes --draft --latest=false
        if ($LASTEXITCODE -ne 0) { throw "Could not create the draft for $Tag." }
        $Release = Get-Release $Tag
        if (!$Release -or !$Release.draft) { throw "Could not find the draft for $Tag." }
    }
    $missing = @(Get-MissingAssets $Release)
    if (!$Release.draft) {
        if ($missing.Count -ne 0) { throw "Published release $Tag has missing assets." }
        return
    }
    if ($missing.Count -gt 0) {
        gh release upload $Tag @missing --repo $repo
        if ($LASTEXITCODE -ne 0) { throw "Could not upload the verified assets for $Tag." }
    }
    $Release = Get-Release $Tag
    if (!$Release -or !$Release.draft -or @(Get-MissingAssets $Release).Count -ne 0) {
        throw "Draft $Tag could not be verified before publishing."
    }
    gh release edit $Tag --repo $repo --draft=false --latest=false
    if ($LASTEXITCODE -ne 0) { throw "Could not publish $Tag." }
    $Release = Get-Release $Tag
    if (!$Release -or $Release.draft -or @(Get-MissingAssets $Release).Count -ne 0) {
        throw "Published release $Tag could not be verified."
    }
}

$versionNotes = Join-Path $env:RUNNER_TEMP 'ffmpeg-version-notes.md'
$channelNotes = Join-Path $env:RUNNER_TEMP 'ffmpeg-channel-notes.md'
@(
    "FFmpeg $Version binaries and corresponding source archives."
    ''
    'Mirrored from [foreA-adoxid/ffmpeg-builds](https://github.com/foreA-adoxid/ffmpeg-builds/releases/tag/ffmpeg-binaries).'
    ''
    'The .sha256 files contain hashes of the executables.'
) | Set-Content -LiteralPath $versionNotes -Encoding utf8
@(
    "Current binaries and checksums are available in [FFmpeg $Version](https://github.com/$repo/releases/tag/$versionTag)."
    ''
    'The files attached here remain available for older clients.'
    ''
    "<!-- overtone-ffmpeg-release: $versionTag -->"
) | Set-Content -LiteralPath $channelNotes -Encoding utf8

Publish-VerifiedRelease $versionTag $versionNotes (Get-Release $versionTag)
$channel = Get-Release $channelTag
if (!$channel -or $channel.draft) {
    Publish-VerifiedRelease $channelTag $channelNotes $channel
} else {
    gh release edit $channelTag --repo $repo --title $title --notes-file $channelNotes --latest=false
    if ($LASTEXITCODE -ne 0) { throw "Could not switch the FFmpeg channel to $versionTag." }
}
