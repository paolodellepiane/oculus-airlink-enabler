#!/usr/bin/powershell -Command

"checking scoop..."
Get-Command scoop
if (!$?) {
    Set-ExecutionPolicy RemoteSigned -scope CurrentUser
    Invoke-Expression (New-Object System.Net.WebClient).DownloadFile('https://get.scoop.sh', '.\install-scoop.ps1')
    & .\install-scoop.ps1
    rm install-scoop.ps1
}

"checking node..."
Get-Command node
if (!$?) {
    scoop install nodejs
}

"checking asar..."
Get-Command asar
if (!$?) {
    npm install --engine-strict asar
}

$ErrorActionPreference= 'SilentlyContinue'
kill -name OculusClient
$ErrorActionPreference= 'Continue'

cd $env:OculusBase\Support\oculus-client\resources
if (-not(Test-Path -Path app.asar.orig)) {
    "backing app original app.asar to app.asar.orig"
    mv app.asar app.asar.orig
}

cp app.asar.orig app.asar
asar extract .\app.asar app
Add-Content app\output\main.js (New-Object System.Net.WebClient).DownloadString('https://get.scoop.sh')
asar pack .\app\ app.asar