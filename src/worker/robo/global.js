const robot = require('robot-js');
Object.keys(robot).forEach((k) => {
    if (k.startsWith('BUTTON_') || k.startsWith('KEY_')) {
        global[k] = robot[k];
    }
});
['Timer', 'Clipboard', 'Screen', 'Memory', 'Module'].forEach((k) => {
    global[k] = robot[k];
});
global.clipboard = robot.Clipboard;

var robo = require('./index');
Object.assign(global, robo);

global.mouse = new Mouse();
global.keyboard = new Keyboard();