const process = require('process');
console.log('Hello, world!', 'Node', process.version);

var {robot} = global.libs;
var {Timer} = robot;

// var mouse = Mouse();
var mousePos = mouse.getPosition();

// May be select text
mouse.y += 200; // mouse.setPosition(mousePos.add(0, 200));
Timer.sleep(500);
mouse.press(BUTTON_LEFT);
console.log('mouse click at', mouse.getPosition());
mouse.y += 150; // mouse.setPosition(mousePos.add(0, 350));
Timer.sleep(500);
mouse.scroll(-4); // down
mouse.release(BUTTON_LEFT);

Timer.sleep(100);
mouse.click(BUTTON_RIGHT);
