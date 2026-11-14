const fs = require('node:fs');
const fsp = require('node:fs/promises');
const path = require('node:path');
const { execFileSync, spawn } = require('node:child_process');
const { createHash } = require('node:crypto');
const { pipeline } = require('node:stream/promises');
const { createGzip } = require('node:zlib');
const { setTimeout: delay } = require('node:timers/promises');
const { createToolsetCore } = require('../core.js');
const { OVERTONE_FFMPEG_REPOSITORY, FFMPEG_CHANNEL_TAG, readFfmpegRelease, getFfmpegReleaseTag } = require('../../src/main/lib/ffmpegRelease.js');
const { appExecutableName, electronVersion, packageWindowsClient } = require('./package-windows-client.js');
const { describeExecutable, getUpdateLayout, hashFile } = require('../../src/main/lib/overtoneAsarUpdate.js');

function readManifest(asar, archive) {
    return JSON.parse(asar.extractFile(archive, 'package.json').toString('utf8'));
}

async function checkRenderer(webSocketDebuggerUrl) {
    const socket = new WebSocket(webSocketDebuggerUrl);
    try {
        return await new Promise((resolve) => {
            const timeout = setTimeout(() => resolve(false), 3000);
            socket.addEventListener('open', () => {
                socket.send(
                    JSON.stringify({
                        id: 1,
                        method: 'Runtime.evaluate',
                        params: {
                            expression: 'document.readyState === "complete" && window.__pulsesyncBridgeInitialized === true',
                            returnByValue: true,
                        },
                    }),
                );
            });
            socket.addEventListener('message', ({ data }) => {
                const response = JSON.parse(data);
                if (response.id === 1) {
                    clearTimeout(timeout);
                    resolve(response.result?.result?.value === true);
                }
            });
            socket.addEventListener('error', () => {
                clearTimeout(timeout);
                resolve(false);
            });
        });
    } finally {
        socket.close();
    }
}

async function smokeTest(executable, userData, appConfig) {
    let startError;
    const app = spawn(
        executable,
        [`--user-data-dir=${userData}`, '--remote-debugging-address=127.0.0.1', '--remote-debugging-port=0', '--disable-gpu', '--enable-logging=stderr'],
        { cwd: path.dirname(executable), stdio: 'inherit', windowsHide: true },
    );
    app.on('error', (error) => {
        startError = error;
    });
    const devToolsPortFile = path.join(userData, 'DevToolsActivePort');
    const appUrl = `${appConfig.appProtocol}://${appConfig.appHostname}`;

    try {
        const deadline = Date.now() + 90_000;
        while (Date.now() < deadline) {
            if (startError) throw startError;
            if (app.exitCode !== null) throw new Error(`Приложение завершилось с кодом ${app.exitCode} до запуска модифицированного окна.`);
            if (fs.existsSync(devToolsPortFile)) {
                const [port] = (await fsp.readFile(devToolsPortFile, 'utf8')).split(/\r?\n/);
                const response = await fetch(`http://127.0.0.1:${port}/json/list`, { signal: AbortSignal.timeout(2000) }).catch(() => null);
                const targets = response?.ok ? await response.json() : [];
                const renderer = targets.find(
                    (target) =>
                        target.type === 'page' && (target.url === appUrl || target.url.startsWith(`${appUrl}/`)) && typeof target.webSocketDebuggerUrl === 'string',
                );
                if (renderer && (await checkRenderer(renderer.webSocketDebuggerUrl))) {
                    console.log('Окно Яндекс Музыки загрузилось. PulseSync Runtime инициализирован.');
                    return;
                }
            }
            await delay(750);
        }
        throw new Error('Окно Яндекс Музыки с PulseSync Runtime не запустилось за 90 секунд.');
    } finally {
        if (app.pid && app.exitCode === null) {
            execFileSync('taskkill.exe', ['/PID', String(app.pid), '/T', '/F'], { stdio: 'ignore', windowsHide: true });
        }
    }
}

async function writeChecksum(filePath) {
    const checksum = `${filePath}.sha256`;
    await fsp.writeFile(checksum, `${await hashFile(filePath)}  ${path.basename(filePath)}\n`, 'utf8');
    return checksum;
}

async function getFfmpegRepository(source, token) {
    if (source === 'upstream') return 'foreA-adoxid/ffmpeg-builds';
    if (source !== 'overtone') throw new Error('Выберите источник FFmpeg upstream или overtone.');

    const repo = OVERTONE_FFMPEG_REPOSITORY;
    const options = { token };
    const channel = await readFfmpegRelease(repo, FFMPEG_CHANNEL_TAG, options);
    const tag = getFfmpegReleaseTag(channel);
    const { assets } = tag === FFMPEG_CHANNEL_TAG ? channel : await readFfmpegRelease(repo, tag, options);
    for (const name of ['ffmpeg-windows-x86_64.tar.gz', 'ffmpeg-windows-x86_64.sha256']) {
        if (!assets?.some((asset) => asset.name === name && asset.state === 'uploaded')) {
            throw new Error(`В релизе ${tag} отсутствует ${name}.`);
        }
    }
    return repo;
}

async function main() {
    const { GITHUB_OUTPUT, GITHUB_RUN_ID, GITHUB_RUN_ATTEMPT, GITHUB_REPOSITORY, GITHUB_SERVER_URL, RUNNER_TEMP, OVERTONE_FFMPEG_API_TOKEN } = process.env;
    delete process.env.OVERTONE_FFMPEG_API_TOKEN;
    if (process.platform !== 'win32' || process.arch !== 'x64' || !GITHUB_OUTPUT || !RUNNER_TEMP || !/^\d+$/.test(GITHUB_RUN_ID) || !/^\d+$/.test(GITHUB_RUN_ATTEMPT)) {
        throw new Error('Сборка черновика рассчитана на Windows x64 в GitHub Actions.');
    }

    const core = await createToolsetCore();
    const { REPO_ROOT, SRC_PATH } = core.constants;
    const { asar, semver, sevenZip } = core.runtime.deps;
    const src = JSON.parse(await fsp.readFile(path.join(SRC_PATH, 'package.json'), 'utf8'));
    const modName = src.modification?.name;
    const modVersion = process.env.OVERTONE_BUILD_VERSION || core.packageUtils.getModVersion();
    if (!/^\d+\.\d+\.\d+(?:-beta\.\d+)?$/.test(modVersion) || semver.valid(modVersion) !== modVersion) {
        throw new Error('Укажите версию Overtone в формате X.Y.Z или X.Y.Z-beta.N.');
    }
    const prerelease = Boolean(semver.prerelease(modVersion));
    const ffmpegSource = process.env.OVERTONE_FFMPEG_SOURCE || 'overtone';
    const ffmpegRepository = await getFfmpegRepository(ffmpegSource, OVERTONE_FFMPEG_API_TOKEN);
    const upstream = await core.extractUtils.fetchLatestYmYaml();
    const download = core.extractUtils.resolveYmDownloadInfo(upstream, null);
    if (
        !semver.valid(download?.version) ||
        semver.prerelease(download.version) ||
        !download.sha512 ||
        !/^[A-Za-z0-9-]+$/.test(modName ?? '')
    ) {
        throw new Error('Не удалось определить стабильную версию Яндекс Музыки с SHA-512 или данные о модификации.');
    }
    const yandexMusicVersion = download.version;
    if (src.modification?.realYMVersion !== yandexMusicVersion || src.version !== yandexMusicVersion) {
        throw new Error(
            `Исходники мода основаны на ${src.modification?.realYMVersion ?? 'неизвестной версии'}, стабильная версия Яндекс Музыки — ${yandexMusicVersion}. Требуется порт.`,
        );
    }

    const commit = execFileSync('git', ['rev-parse', 'HEAD'], { cwd: REPO_ROOT, encoding: 'utf8' }).trim();
    const baseName = `Yandex-Music-${yandexMusicVersion}-${modName}-${modVersion}-win-x64-${GITHUB_RUN_ID}-${GITHUB_RUN_ATTEMPT}`;
    const workspace = await fsp.mkdtemp(path.join(RUNNER_TEMP, 'pulsesync-draft-'));
    const upstreamInstaller = path.join(workspace, 'upstream.exe');
    const upstreamDir = path.join(workspace, 'upstream');
    const upstreamResources = path.join(upstreamDir, 'resources');
    const stage = path.join(workspace, baseName);
    const modArchive = path.join(workspace, 'app.asar');
    await core.extractUtils.downloadFile(download.downloadUrl, upstreamInstaller, download.size);
    if ((await core.extractUtils.calcSha512Base64(upstreamInstaller)) !== download.sha512) {
        throw new Error('SHA-512 скачанного установщика Яндекс Музыки не совпадает с манифестом.');
    }
    await sevenZip.unpack(upstreamInstaller, upstreamDir);
    if (readManifest(asar, path.join(upstreamResources, 'app.asar')).version !== yandexMusicVersion) {
        throw new Error('Скачанный установщик не содержит приложение требуемой версии.');
    }

    await core.packageUtils.modifyPackage({ appConfig: { ffmpegRepository } });
    await core.buildUtils.build({ destDir: modArchive, modVersion });
    const built = readManifest(asar, modArchive);
    if (built.version !== yandexMusicVersion || built.modification?.realYMVersion !== yandexMusicVersion || built.modification?.version !== modVersion) {
        throw new Error('Версии в собранном app.asar не совпадают с версиями черновика.');
    }

    const packaged = await packageWindowsClient({
        source: SRC_PATH,
        archive: modArchive,
        upstreamResources,
        out: workspace,
        appVersion: yandexMusicVersion,
        includeFfmpeg: ffmpegSource === 'upstream',
    });
    await fsp.rename(packaged, stage);
    if (process.env.OVERTONE_ELECTRON_SMOKE_TEST === 'true') {
        await smokeTest(path.join(stage, appExecutableName), path.join(workspace, 'smoke-user-data'), built.appConfig);
    }

    const metadata = { yandexMusicVersion, modName, modVersion, electronVersion, ffmpegRepository, commit, builtAt: new Date().toISOString() };
    await fsp.writeFile(path.join(stage, 'build.json'), `${JSON.stringify(metadata, null, 2)}\n`, 'utf8');
    const zip = path.join(workspace, `${baseName}.zip`);
    await sevenZip.pack(stage, zip);
    await sevenZip.cmd(['t', zip]);
    const checksum = await writeChecksum(zip);

    const installerName = `Overtone-Setup-${modVersion}-win-x64`;
    const installer = path.join(workspace, `${installerName}.exe`);
    const innoSetupCompiler = path.join(process.env['ProgramFiles(x86)'], 'Inno Setup 6', 'ISCC.exe');
    const buildInstaller = (name, defines = []) =>
        execFileSync(
            innoSetupCompiler,
            [
                `/DStageDir=${stage}`,
                `/DModVersion=${modVersion}`,
                `/DAppExe=${appExecutableName}`,
                `/O${workspace}`,
                `/F${name}`,
                ...defines,
                path.join(__dirname, 'overtone.iss'),
            ],
            { stdio: 'inherit', windowsHide: true },
        );
    buildInstaller(installerName);
    const installerChecksum = await writeChecksum(installer);

    const forceFullInstaller = process.env.OVERTONE_FORCE_FULL_INSTALLER === 'true';
    const fastUpdate = {};
    if (!forceFullInstaller) {
        const fastPrefix = `Overtone-ASAR-${modVersion}-win-x64`;
        const fastArchive = path.join(workspace, `${fastPrefix}.asar.gz`);
        const fastManifest = path.join(workspace, `${fastPrefix}.json`);
        const fastInstaller = path.join(workspace, `${fastPrefix}.exe`);
        const stagedArchive = path.join(stage, 'resources', 'app.asar');
        const headerHash = createHash('sha256').update(asar.getRawHeader(stagedArchive).headerString).digest('hex');
        const executable = describeExecutable(await fsp.readFile(path.join(stage, appExecutableName)), headerHash);
        const archive = { size: (await fsp.stat(stagedArchive)).size, sha256: await hashFile(stagedArchive) };
        await pipeline(fs.createReadStream(stagedArchive), createGzip({ level: 9 }), fs.createWriteStream(fastArchive));
        const layout = await getUpdateLayout(stage);
        await fsp.writeFile(
            fastManifest,
            `${JSON.stringify({ schema: 1, version: modVersion, yandexMusicVersion, electronVersion, ffmpegRepository, layout, archive, executable })}\n`,
        );
        buildInstaller(fastPrefix, [
            '/DFastUpdate=1',
            `/DArchiveHash=${archive.sha256}`,
            `/DArchiveSize=${archive.size}`,
            `/DExecutableHash=${executable.sha256}`,
            `/DExecutableSize=${executable.size}`,
        ]);
        Object.assign(fastUpdate, { fastArchive, fastManifest, fastInstaller });
    }

    const tag = prerelease ? `overtone-${modVersion}` : `draft-yandex-${yandexMusicVersion}-${GITHUB_RUN_ID}-${GITHUB_RUN_ATTEMPT}`;
    const downloads = `${GITHUB_SERVER_URL}/${GITHUB_REPOSITORY}/releases/download/${encodeURIComponent(tag)}`;
    const notes = path.join(workspace, 'release-notes.md');
    await fsp.writeFile(
        notes,
        [
            '## Скачать',
            '',
            `1. [Установщик Windows x64 (.exe)](${downloads}/${encodeURIComponent(path.basename(installer))})`,
            `2. [Portable ZIP](${downloads}/${encodeURIComponent(path.basename(zip))})`,
            '',
            forceFullInstaller ? 'Для автообновления Overtone скачивает полный установщик.' : 'Файлы быстрого обновления Overtone скачивает автоматически.',
            '',
            `Яндекс Музыка **${yandexMusicVersion}** для Windows x64 с модификацией **${modName} ${modVersion}**.`,
            `Electron **${electronVersion}**.`,
            '',
            `Коммит мода: \`${commit}\``,
            '',
            `Для установки запустите \`${path.basename(installer)}\`. Overtone устанавливается в \`%LOCALAPPDATA%\\Programs\\Overtone\` для текущего пользователя.`,
            '',
            `Для портативного запуска распакуйте ZIP целиком и откройте \`${appExecutableName}\` из распакованной папки.`,
            '',
        ].join('\n'),
        'utf8',
    );
    const outputs = {
        tag,
        prerelease,
        title: `${modName} ${modVersion}`,
        commit,
        zip,
        checksum,
        installer,
        installerChecksum,
        ...fastUpdate,
        notes,
    };
    await fsp.appendFile(
        GITHUB_OUTPUT,
        Object.entries(outputs)
            .map(([name, value]) => `${name}=${value}\n`)
            .join(''),
        'utf8',
    );
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
