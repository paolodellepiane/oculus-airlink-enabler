# oculus-airlink-enabler

### How to patch OculusClient to automatically enable air link at startup.

# Requirements
* Node 10 or later
* Asar command line utility
 
`$ npm install -g --engine-strict asar`

# Manual Patch
#### by using command prompt or powershell:
* go to OculusClient resource directory:

`cd %OculusBase%\Support\oculus-client\resources`
* extract app.asar:

`asar extract .\app.asar app`
* backup original asar:

`mv app.asar app.asar.orig`

* edit file %OculusBase%\Support\oculus-client\resources\app\output\main.js and add the content of `airlink.js` to the end of file
* recreate the patche app.asar:

`asar pack .\app\ app.asar`

# Automatic Patch
`patch-oculus-client.ps1` script should automatically install requirements (by using [scoop](https://scoop.sh/)) and apply the patch. Should be run with administrator privileges:

`iwr https://bit.ly/3BQUUwY | iex`
