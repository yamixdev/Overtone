#define InstallDir "{localappdata}\Programs\Overtone"
#define InstallMarker "overtone-installed"
#define AppIdentity "ru.yandex.desktop.music.overtone"
#define AppShortcutName RemoveFileExt(AppExe) + " (Overtone)"
#ifdef FastUpdate
#define FastPrefix "Overtone-ASAR-" + ModVersion + "-win-x64"
#endif

[Setup]
AppId={#AppIdentity}
SetupMutex={#AppIdentity}.Setup
AppName=Overtone
AppVersion={#ModVersion}
AppPublisher=Overtone
DefaultDirName={#InstallDir}
DisableDirPage=yes
DisableProgramGroupPage=yes
DisableStartupPrompt=yes
PrivilegesRequired=lowest
ArchitecturesAllowed=x64compatible
ArchitecturesInstallIn64BitMode=x64compatible
UninstallDisplayIcon={app}\{#AppExe}
Compression=lzma2
SolidCompression=yes
RestartApplications=no
#ifdef FastUpdate
Uninstallable=no
CreateUninstallRegKey=no
UsePreviousAppDir=no
#endif

[Languages]
Name: "russian"; MessagesFile: "compiler:Languages\Russian.isl"

[Files]
#ifdef FastUpdate
Source: "{src}\{#FastPrefix}.asar"; DestDir: "{app}\resources"; DestName: "app.asar"; Flags: external ignoreversion; ExternalSize: {#ArchiveSize}; Hash: "{#ArchiveHash}"
Source: "{src}\{#FastPrefix}.bin"; DestDir: "{app}"; DestName: "{#AppExe}"; Flags: external ignoreversion; ExternalSize: {#ExecutableSize}; Hash: "{#ExecutableHash}"
Source: "{#StageDir}\build.json"; DestDir: "{app}"; Flags: ignoreversion
#else
Source: "{#StageDir}\*"; DestDir: "{app}"; Excludes: "\$PLUGINSDIR,\Uninstall*.exe,\unins*.dat"; Flags: ignoreversion recursesubdirs createallsubdirs
Source: "{#InstallMarker}"; DestDir: "{app}\resources"; Flags: ignoreversion

[Icons]
Name: "{userprograms}\{#AppShortcutName}"; Filename: "{app}\{#AppExe}"; WorkingDir: "{app}"; IconFilename: "{app}\{#AppExe}"; AppUserModelID: "{#AppIdentity}"
Name: "{userdesktop}\{#AppShortcutName}"; Filename: "{app}\{#AppExe}"; WorkingDir: "{app}"; IconFilename: "{app}\{#AppExe}"; AppUserModelID: "{#AppIdentity}"

[Run]
Filename: "{app}\{#AppExe}"; WorkingDir: "{app}"; Description: "Запустить Overtone"; Flags: nowait postinstall skipifsilent
#endif

[Code]
var
    CanRestart: Boolean;
    InstallComplete: Boolean;
#ifdef FastUpdate
    BackupReady: Boolean;
#else
    ExistingInstallation: Boolean;
#endif

function OpenProcess(DesiredAccess: LongWord; InheritHandle: Boolean; ProcessId: LongWord): THandle;
    external 'OpenProcess@kernel32.dll stdcall';
function WaitForSingleObject(Handle: THandle; Milliseconds: LongWord): LongWord;
    external 'WaitForSingleObject@kernel32.dll stdcall';
function CloseHandle(Handle: THandle): Boolean;
    external 'CloseHandle@kernel32.dll stdcall';

function WaitForClient: Boolean;
var
    Index, ProcessId: Integer;
    ProcessHandle: THandle;
begin
    Result := False;
    for Index := 1 to ParamCount do
        if CompareText(Copy(ParamStr(Index), 1, 14), '/OVERTONE-PID=') = 0 then
        begin
            ProcessId := StrToIntDef(Copy(ParamStr(Index), 15, MaxInt), 0);
            if ProcessId <= 0 then Exit;
            ProcessHandle := OpenProcess($00100000, False, ProcessId);
            if ProcessHandle = 0 then
                Result := DLLGetLastError = 87
            else
            begin
                Result := WaitForSingleObject(ProcessHandle, 30000) = 0;
                CloseHandle(ProcessHandle);
            end;
            Exit;
        end;
#ifndef FastUpdate
    { Older Overtone versions pass the restart flag without a process ID. }
    Sleep(1000);
    Result := True;
#endif
end;

function RestartRequested: Boolean;
var
    Index: Integer;
begin
    Result := False;
    for Index := 1 to ParamCount do
        if CompareText(ParamStr(Index), '/OVERTONE-RESTART') = 0 then
        begin
            Result := True;
            Exit;
        end;
end;

procedure InitializeWizard;
begin
    if RestartRequested then WizardForm.Caption := 'Обновление Overtone';
end;

function PrepareToInstall(var NeedsRestart: Boolean): String;
var
    InstallPath: String;
begin
    Result := '';
    InstallPath := RemoveBackslashUnlessRoot(WizardDirValue);
#ifndef FastUpdate
    ExistingInstallation := FileExists(InstallPath + '\resources\{#InstallMarker}');
#endif
    if CompareText(InstallPath, ExpandConstant('{#InstallDir}')) <> 0 then
        Result := 'Overtone устанавливается только в ' + ExpandConstant('{#InstallDir}') + '.'
    else if DirExists(InstallPath) and not FileExists(InstallPath + '\resources\{#InstallMarker}') then
        Result := 'Папка ' + InstallPath + ' уже существует и не принадлежит установщику Overtone.'
    else if RestartRequested then
    begin
        CanRestart := WaitForClient;
        if not CanRestart then Result := 'Не удалось дождаться закрытия Overtone.';
    end;
#ifdef FastUpdate
    if Result <> '' then Exit;
    if not CanRestart then
        Result := 'Запустите это обновление из Overtone.'
    else if not FileExists(ExpandConstant('{src}\{#FastPrefix}.asar')) or
            not FileExists(ExpandConstant('{src}\{#FastPrefix}.bin')) then
        Result := 'Файлы обновления не найдены.';
#endif
end;

#ifndef FastUpdate
procedure RemoveObsoleteFile(const FileName: String);
var
    FilePath: String;
begin
    FilePath := ExpandConstant('{app}\') + FileName;
    if FileExists(FilePath) and not DeleteFile(FilePath) then
        Log('Could not remove obsolete Overtone file: ' + FilePath);
end;
#endif

procedure CurStepChanged(CurStep: TSetupStep);
begin
#ifdef FastUpdate
    if CurStep = ssInstall then
    begin
        BackupReady := CopyFile(ExpandConstant('{app}\resources\app.asar'), ExpandConstant('{tmp}\previous.asar'), False) and
                       CopyFile(ExpandConstant('{app}\{#AppExe}'), ExpandConstant('{tmp}\previous.exe'), False) and
                       CopyFile(ExpandConstant('{app}\build.json'), ExpandConstant('{tmp}\previous-build.json'), False);
        if not BackupReady then RaiseException('Не удалось сохранить текущую версию Overtone.');
    end;
#else
    if (CurStep = ssPostInstall) and ExistingInstallation then
    begin
#if !FileExists(AddBackslash(StageDir) + "libEGL.dll")
        RemoveObsoleteFile('libEGL.dll');
#endif
#if !FileExists(AddBackslash(StageDir) + "libGLESv2.dll")
        RemoveObsoleteFile('libGLESv2.dll');
#endif
#if FileExists(AddBackslash(StageDir) + "LICENSE") && !FileExists(AddBackslash(StageDir) + "LICENSE.electron.txt")
        RemoveObsoleteFile('LICENSE.electron.txt');
#endif
    end;
#endif
    if CurStep = ssDone then InstallComplete := True;
end;

procedure DeinitializeSetup;
var
    ResultCode: Integer;
#ifdef FastUpdate
    ArchiveRestored, ExecutableRestored, BuildRestored: Boolean;
#endif
begin
    if not CanRestart then Exit;
#ifdef FastUpdate
    if BackupReady and not InstallComplete then
    begin
        ArchiveRestored := CopyFile(ExpandConstant('{tmp}\previous.asar'), ExpandConstant('{app}\resources\app.asar'), False);
        ExecutableRestored := CopyFile(ExpandConstant('{tmp}\previous.exe'), ExpandConstant('{app}\{#AppExe}'), False);
        BuildRestored := CopyFile(ExpandConstant('{tmp}\previous-build.json'), ExpandConstant('{app}\build.json'), False);
        if not (ArchiveRestored and ExecutableRestored and BuildRestored) then
        begin
            MsgBox('Не удалось восстановить Overtone. Запустите полный установщик, чтобы восстановить приложение.', mbError, MB_OK);
            Exit;
        end;
    end;
#endif
    if FileExists(ExpandConstant('{app}\{#AppExe}')) then
        if not Exec(ExpandConstant('{app}\{#AppExe}'), '', ExpandConstant('{app}'), SW_SHOWNORMAL, ewNoWait, ResultCode) then
            Log('Could not restart Overtone: ' + IntToStr(ResultCode));
end;
