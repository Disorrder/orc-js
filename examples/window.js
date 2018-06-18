function getWindow() {
    var wnd = Window.find('Безымянный');
    if (!wnd) {
        var pid = Window.open('notepad.exe');
        console.log('Window opened:', pid);
        Timer.sleep(500);
        wnd = Window.findByPid(pid);
    }
    return wnd;
}

var wnd = getWindow();
console.log(wnd.title);

wnd.active = true;

require('./keyboard');

wnd.minimized = true;