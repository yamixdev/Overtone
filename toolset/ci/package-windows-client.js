const fsp = require('node:fs/promises');
const path = require('node:path');

const appExecutableName = 'Яндекс Музыка.exe';
const electronVersion = require('electron/package.json').version;

async function packageWindowsClient({ source, archive, upstreamResources, out, appVersion, includeFfmpeg }) {
    const { packager } = await import('@electron/packager');
    const { flipFuses, getCurrentFuseWire, FuseState, FuseVersion, FuseV1Options } = await import('@electron/fuses');
    const upstreamExecutable = path.join(path.dirname(upstreamResources), appExecutableName);
    const upstreamFuses = await getCurrentFuseWire(upstreamExecutable);
    const resourceNames = ['assets', 'app-update.yml', 'elevate.exe'];
    if (includeFfmpeg) resourceNames.push('ffmpeg.exe');
    const [stage] = await packager({
        dir: source,
        out,
        name: 'Overtone',
        executableName: path.basename(appExecutableName, '.exe'),
        platform: 'win32',
        arch: 'x64',
        electronVersion,
        appVersion,
        icon: path.join(upstreamResources, 'assets', 'icon.ico'),
        asar: false,
        prebuiltAsar: archive,
        extraResource: resourceNames.map((name) => path.join(upstreamResources, name)),
        win32metadata: { FileDescription: 'Яндекс Музыка', ProductName: 'Яндекс Музыка' },
    });

    const executable = path.join(stage, appExecutableName);
    await fsp.cp(`${archive}.unpacked`, path.join(stage, 'resources', 'app.asar.unpacked'), { recursive: true, errorOnExist: true, force: false });
    await fsp.rename(path.join(stage, 'electron_wer.dll'), path.join(stage, `${path.basename(appExecutableName, '.exe')}_wer.dll`));
    await flipFuses(executable, {
        version: FuseVersion.V1,
        [FuseV1Options.EnableCookieEncryption]: upstreamFuses[FuseV1Options.EnableCookieEncryption] === FuseState.ENABLE,
        [FuseV1Options.EnableEmbeddedAsarIntegrityValidation]: true,
        [FuseV1Options.OnlyLoadAppFromAsar]: true,
    });
    return stage;
}

module.exports = { appExecutableName, electronVersion, packageWindowsClient };
