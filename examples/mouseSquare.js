const process = require('process');
console.log('Hello, world!', 'Node', process.version);

var {robot} = global.libs;
var {Mouse} = robot;
require("@disorrder/animated");

var mouse = Mouse();
var mouseCursor = Mouse.getPos();

var anim = new Animated()
.add({
    duration: 1000,
    animate: [{
        target: mouseCursor,
        to: {x: mouseCursor.x + 300},
        setter: Mouse.setPos.bind(Mouse),
    }],
})
.add({
    duration: 1000,
    animate: [{
        target: mouseCursor,
        to: {y: mouseCursor.y + 300},
        setter: Mouse.setPos.bind(Mouse),
    }],
})
.add({
    duration: 1000,
    animate: [{
        target: mouseCursor,
        to: {x: mouseCursor.x},
        setter: Mouse.setPos.bind(Mouse),
    }],
})
.add({
    duration: 1000,
    animate: [{
        target: mouseCursor,
        to: {y: mouseCursor.y},
        setter: Mouse.setPos.bind(Mouse),
    }],
})
.play();
