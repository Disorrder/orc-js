const robot = require('robot-js');
const robo = require('./robo');

global.libs = {
    robot,
    robo,
};
// TODO: подключать упрощённый синтаксис, если включена галочка в настройках
require('./robo/global');


var settings = {};

function start() {
    // console.log('worker', __dirname, process.argv[2]);
    // console.log('worker path0', require.main.paths[0]);
    require(process.argv[2]);
    exit();
}

function exit() {
    return process.exit();
}

process.on('message', (message) => {
    if (message === 'start') return start();
    if (message === 'exit') return exit();
    if (typeof message !== 'object') return;
    console.log('MESSAGE', message);
    // if (message.cmd === 'require') return require(message.module);
    if (message.cmd === 'settings') return settings = message.body;
});

global.log = console.debug = function(...args) {
    console.log('Debug logs:', ...args);
    return process.send(args);
}