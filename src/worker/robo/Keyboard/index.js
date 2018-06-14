const robot = require('robot-js');
var keys = require('./keys');

class Keyboard extends robot.Keyboard {
    get ctrl() { return Keyboard.getState(robot.KEY_CONTROL); }
    set ctrl(val) { val ? this.keydown('ctrl') : this.keyup('ctrl'); }

    get alt() { return Keyboard.getState(robot.KEY_ALT); }
    set alt(val) { val ? this.keydown('alt') : this.keyup('alt'); }

    get shift() { return Keyboard.getState(robot.KEY_SHIFT); }
    set shift(val) { val ? this.keydown('shift') : this.keyup('shift'); }

    get system() { return Keyboard.getState(robot.KEY_SYSTEM); }
    set system(val) { val ? this.keydown('sys') : this.keyup('sys'); }
    get win() { return this.system; }
    set win(val) { this.system = val; }
    // TODO: alias for cmd

    keydown(key) {
        key = Keyboard.getCode(key);
        if (key == null) return; // 0 is keyCode too ('A' on mac)
        return super.press(key);
    }

    keyup(key) {
        key = Keyboard.getCode(key);
        if (key == null) return;
        return super.release(key);
    }

    /*
    * keyCode - int, string, int[], string[]
    * Example: 0x30, 'enter', 'ctrl a', ['shift', 0x30], 'ctrl+alt-del'
    * holdTime - int. Time to hold all buttons in ms.
    */
    pressKey(key, holdTime) {
        console.log(`KEYPRESS START [${key}]`, typeof key);
        var keys = [];
        if (typeof key === 'number') keys = [key];
        if (typeof key === 'string') keys = key.split(/[+-\s]/g);
        if (!keys.length) return;

        keys.forEach((v) => this.keydown(v));
        if (holdTime) robot.Timer.sleep(holdTime);
        keys.reverse().forEach((v) => this.keyup(v));
    }


    static getCode(val) {
        if (typeof val !== 'string') return val;
        return keys[val] || robot['KEY_'+val.toUpperCase()];
    }
}

module.exports = Keyboard;
