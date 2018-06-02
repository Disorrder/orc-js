const process = require('process');
console.log('Hello, world!', 'Node', process.version);

// const robot = require('robot-js');
var {robot} = global.libs;

console.log('Robot', robot);
