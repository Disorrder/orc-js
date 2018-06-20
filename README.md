# orc-js
We will never be slaves!  
При первом запуске и для обновления зависимостей - `npm i`

## Development
Необходимо запустить 2 процесса параллельно:  
`npm run dev` - динамическая сборка  
`npm start` - запуск приложения  

## Production
Необходимо запустить 2 команды по очереди:  
`npm run build` - сборка кода (Webpack)  
`npm run build-win` - сборка .exe файла  


## Native modules support
Run this in PowerShell with Administrator:
 - `npm install --global --production windows-build-tools`
 Make sure Python and Visual C++ Build Tools installed successfully
 - `npm i -g node-gyp`
 - `set PYTHON=%USERPROFILE%\.windows-build-tools\python27\python.exe`
 - `npm i`
 - `.\node_modules\.bin\electron-rebuild.cmd` - после каждой установки нативного модуля

Can help: http://stackoverflow.com/questions/32556295/npm-install-error-the-build-tools-for-v120-platform-toolset-v120-cannot

### OS X native modues
 - `sudo npm i -g node-gyp`
 - `node-gyp install`
 - check XCode: `xcode-select -p`. Can help: http://railsapps.github.io/xcode-command-line-tools.html
 - `cd node_modules/robot-js`
 - `make`
 