const child_process = require('child_process');
var robot = require('robot-js');

class Window extends robot.Window {
    get exists() { return this.isValid(); }

    get hwnd() { return this.getHandle(); }
    set hwnd(val) { return this.setHandle(val); }
    
    get pid() {
        if (this._pid) return this._pid;
        return this._pid = this.getPID();
    }
    
    get title() { return this.getTitle(); }
    set title(val) { return this.setTitle(val); }

    // States
    get minimized() { return this.isMinimized(); }
    set minimized(val) { this.setMinimized(val); }

    get maximized() { return this.isMaximized(); }
    set maximized(val) { this.setMaximized(val); }

    get borderless() { return this.isBorderless(); }
    set borderless(val) { this.setBorderless(val); }

    get topMost() { return this.isTopMost(); }
    set topMost(val) { this.setTopMost(val); }
    
    get active() { return Window.getActive().eq(this); }
    set active(val) { Window.setActive(val ? this : Window.desktop); }
    blur() {
        Window.setActive(Window.desktop);
        return this;
    }
    focus() {
        Window.setActive(this);
        return this;
    }

    // Bounds
    get top() { return this.getBounds().y; }
    set top(val) {
        this._bounds = this.getBounds().setTop(val);
        this.setBounds(this._bounds);
    }

    get left() { return this.getBounds().x; }
    set left(val) {
        this._bounds = this.getBounds().setLeft(val);
        this.setBounds(this._bounds);
    }

    get width() { return this.getBounds().w; }
    get height() { return this.getBounds().h; }

    // Animations
    blink(times = 3) {
        // not working as expected on win 10
        for (let i = 0; i < times; i++) {
            this.blur();
            robot.Timer.sleep(130*3);
            this.focus();
            robot.Timer.sleep(130*3);
        }
        return this;
    }

    shake(times = 3) {
        // TODO
        return this;
    }

    // Static
    static getActive() {
        var active = robot.Window.getActive();
        console.log('active -', active, active.getTitle());
        
        if (!active) return null;
        return new Window(active.getHandle());
    }

    static getList(exp) {
        return robot.Window.getList(exp).map((v) => {
            return new Window(v.getHandle());
        });
    }
    
    static find(title) {
        var list = Window.getList(`.*${title}.*`);
        console.log('LIST:', list.map((v) => `${v.hwnd} ${v.title}`));
        if (list.length > 1) console.warn('API WARN: found more than 1 window with title '+title); // experimantal
        return list[0];
    }

    static findByPid(pid) {
        return Window.getList().find((v) => v.pid === pid);
    }

    static filterByPid(pid) { //?
        return Window.getList().filter((v) => v.pid === pid);
    }

    static open(cmd) {
        var child = child_process.spawn(cmd, {detached: true});
        child.unref();
        return child.pid;
    }
}

Window.desktop = Window.find('Program Manager');

module.exports = Window;
