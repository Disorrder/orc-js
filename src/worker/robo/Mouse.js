var robot = require('robot-js');

var buttons = {
    left: robot.BUTTON_LEFT,
    lmb: this.left,
};

function getBtnCode(name) {
    // if (typeof name !== 'string') return name;
    return buttons[name] || name;
}

class Mouse {
    constructor() {
        this._ref = robot.Mouse();
    }

    get x() { return this.getPosition().x; }
    set x(val) { this.setPosition(val, this.y); }

    get y() { return this.getPosition().y; }
    set y(val) { this.setPosition(this.x, val); }

    getPosition() {
        return robot.Mouse.getPos();
    }
    setPosition(...attrs) {
        return robot.Mouse.setPos(...attrs);
    }

    getState(btn) {
        return robot.Mouse.getState(btn);
    }
    get left() { return this.getState(robot.BUTTON_LEFT); }
    get middle() { return this.getState(robot.BUTTON_MIDDLE); }
    get right() { return this.getState(robot.BUTTON_RIGHT); }

    // chain
    click(btn) {
        this._ref.click(btn);
        return this;
    }
    dblclick(btn) {
        return this.click(btn).click(btn);
    }

    press(btn) {
        this._ref.press(btn);
        return this;
    }

    release(btn) {
        this._ref.release(btn);
        return this;
    }

    scroll(val) {
        return this.scrollV(val);
    }
    scrollV(val) {
        this._ref.scrollV(val);
        return this;
    }
    scrollH(val) {
        this._ref.scrollH(val);
        return this;
    }
}

module.exports = Mouse;

class _Mouse extends robot.Mouse {
    
}