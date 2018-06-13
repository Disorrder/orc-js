// dont forget to open dev tools
mouse.x += 500;
mouse.y += 500;
mouse.click();

keyboard.keydown('shift');
keyboard.keydown('a');
console.log('kb shift:', keyboard.shift);
Timer.sleep(2000);
keyboard.keyup('a');
keyboard.keyup('shift');
keyboard.pressKey('backspace');

Timer.sleep(500);
keyboard.click('Hello, +world+1');
Timer.sleep(500);
keyboard.pressKey('ctrl a');
Timer.sleep(500);
keyboard.pressKey('backspace');
