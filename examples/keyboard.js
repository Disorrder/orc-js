// dont forget to open dev tools

Timer.sleep(500);
mouse.x += 500;
mouse.y += 500;
mouse.click();

Timer.sleep(500);
keyboard.click('Hello, +world+1');
Timer.sleep(500);
keyboard.pressKey('cmd a');
Timer.sleep(500);
keyboard.pressKey('backspace');
