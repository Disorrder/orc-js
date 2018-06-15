var robot = require('robot-js');

var buttons = {
    left: robot.BUTTON_LEFT,
    lmb: this.left,
};

function getBtnCode(name) {
    // if (typeof name !== 'string') return name;
    return buttons[name] || name;
}

class Mouse extends robot.Mouse {
    get x() { return this.getPosition().x; }
    set x(val) { this.setPosition(val, this.y); }

    get y() { return this.getPosition().y; }
    set y(val) { this.setPosition(this.x, val); }

    getPosition() {
        return robot.Mouse.getPos(); //? .toVec2(); // mb slower or more memory
    }
    setPosition(...attrs) {
        robot.Mouse.setPos(...attrs);
        return this;
    }

    getState(btn) {
        return robot.Mouse.getState(btn);
    }
    get left() { return this.getState(robot.BUTTON_LEFT); }
    get middle() { return this.getState(robot.BUTTON_MIDDLE); }
    get right() { return this.getState(robot.BUTTON_RIGHT); }

    // chain
    click(btn = robot.BUTTON_LEFT) {
        super.click(btn);
        return this;
    }

    press(btn = robot.BUTTON_LEFT) {
        super.press(btn);
        return this;
    }

    release(btn = robot.BUTTON_LEFT) {
        super.release(btn);
        return this;
    }

    scrollV(val) {
        super.scrollV(val);
        return this;
    }
    scrollH(val) {
        super.scrollH(val);
        return this;
    }

    // new methods
    dblclick(btn = robot.BUTTON_LEFT) {
        return this.click(btn).click(btn);
    }

    scroll(val) {
        return this.scrollV(val);
    }
}

module.exports = Mouse;
