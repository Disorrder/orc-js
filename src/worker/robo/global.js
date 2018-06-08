var robo = require('./index');

Object.assign(global, robo);

global.mouse = new Mouse();