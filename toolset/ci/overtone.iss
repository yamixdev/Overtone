#define InstallDir "{localappdata}\Programs\Overtone"
#define InstallMarker "overtone-installed"
#define AppIdentity "ru.yandex.desktop.music.overtone"
#define AppShortcutName RemoveFileExt(AppExe) + " (Overtone)"

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

[Languages]
Name: "russian"; MessagesFile: "compiler:Languages\Russian.isl"

[Files]
Source: "{#StageDir}\*"; DestDir: "{app}"; Excludes: "\$PLUGINSDIR,\Uninstall*.exe,\unins*.dat"; Flags: ignoreversion recursesubdirs createallsubdirs
Source: "{#InstallMarker}"; DestDir: "{app}\resources"; Flags: ignoreversion

[Icons]
Name: "{userprograms}\{#AppShortcutName}"; Filename: "{app}\{#AppExe}"; WorkingDir: "{app}"; IconFilename: "{app}\{#AppExe}"; AppUserModelID: "{#AppIdentity}"
Name: "{userdesktop}\{#AppShortcutName}"; Filename: "{app}\{#AppExe}"; WorkingDir: "{app}"; IconFilename: "{app}\{#AppExe}"; AppUserModelID: "{#AppIdentity}"

[Run]
Filename: "{app}\{#AppExe}"; WorkingDir: "{app}"; Description: "Запустить Overtone"; Flags: nowait postinstall skipifsilent
Filename: "{app}\{#AppExe}"; WorkingDir: "{app}"; Flags: nowait runasoriginaluser skipifnotsilent; Check: RestartRequested

[Code]
function PrepareToInstall(var NeedsRestart: Boolean): String;
var
    InstallPath: String;
begin
    Result := '';
    InstallPath := RemoveBackslashUnlessRoot(WizardDirValue);
    if CompareText(InstallPath, ExpandConstant('{#InstallDir}')) <> 0 then
        Result := 'Overtone устанавливается только в ' + ExpandConstant('{#InstallDir}') + '.'
    else if DirExists(InstallPath) and not FileExists(InstallPath + '\resources\{#InstallMarker}') then
        Result := 'Папка ' + InstallPath + ' уже существует и не принадлежит установщику Overtone.';
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
