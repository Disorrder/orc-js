const process = require('process');
console.log('Hello, world!', 'Node', process.version);

var {robot} = global.libs;
var {Mouse, Timer} = robot;

var mouse = Mouse();
var mousePos = Mouse.getPos();

// May be select text
Mouse.setPos(mousePos.add(0, 200));
Timer.sleep(500);
mouse.press(robot.BUTTON_LEFT);
console.log('mouse click at', Mouse.getPos());
Mouse.setPos(mousePos.add(0, 350));
Timer.sleep(500);
mouse.scrollV(-4); // down
mouse.release(robot.BUTTON_LEFT);

Timer.sleep(100);
mouse.click(robot.BUTTON_RIGHT);
