param(
    [Parameter(Mandatory)]
    [ValidatePattern('^\d+\.\d+\.\d+$')]
    [string]$Version,
    [Parameter(Mandatory)]
    [string]$OutputDirectory
)

$ErrorActionPreference = 'Stop'
$sourceRepo = 'foreA-adoxid/ffmpeg-builds'
$tag = 'ffmpeg-binaries'
$releaseJson = gh release view $tag --repo $sourceRepo --json name,assets
if ($LASTEXITCODE -ne 0) { throw 'Could not read the upstream FFmpeg release.' }
$release = $releaseJson | ConvertFrom-Json
if ($release.name -ne "FFmpeg $Version binaries") {
    throw "Expected FFmpeg $Version but upstream has '$($release.name)'."
}

$names = foreach ($platform in @('windows-x86_64', 'linux-x86_64', 'macos-x86_64', 'macos-arm64')) {
    "ffmpeg-$platform.tar.gz"
    "ffmpeg-$platform.sha256"
    "ffmpeg-$platform-sources.tar.gz"
}

New-Item -ItemType Directory -Path $OutputDirectory -Force | Out-Null
$patterns = foreach ($name in $names) { '--pattern'; $name }
gh release download $tag --repo $sourceRepo --dir $OutputDirectory @patterns
if ($LASTEXITCODE -ne 0) { throw 'Could not download the upstream FFmpeg assets.' }

foreach ($name in $names) {
    $asset = @($release.assets | Where-Object { $_.name -ceq $name -and $_.state -eq 'uploaded' })
    $file = Join-Path $OutputDirectory $name
    if ($asset.Count -ne 1 -or $asset[0].digest -notmatch '^sha256:[a-f0-9]{64}$') {
        throw "Missing upstream SHA-256 for $name."
    }
    $actual = (Get-FileHash -LiteralPath $file -Algorithm SHA256).Hash
    if ($actual -ne $asset[0].digest.Substring(7)) { throw "SHA-256 mismatch for $name." }
}
Write-Host "Verified $($names.Count) FFmpeg $Version assets, including corresponding sources."
