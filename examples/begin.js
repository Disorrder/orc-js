const process = require('process');
console.log('Hello, world!', 'Node', process.version);

var {robot} = global.libs;
var {Mouse} = robot;
require("@disorrder/animated");

var mouse = Mouse();
var mouseCursor = {x: 500, y: 300};
