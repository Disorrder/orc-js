// keyboard codes: http://web.archive.org/web/20100501161453/http://www.classicteck.com/rbarticles/mackeyboard.php
const os = require('os');
const robot = require('robot-js');

var keys = {
    'back':     robot.KEY_BACKSPACE, // 'back': does it mean browser back?
    'enter':    robot.KEY_RETURN,
    '\n':       robot.KEY_RETURN,
    'caps':     robot.KEY_CAPS_LOCK,
    'capslock': robot.KEY_CAPS_LOCK,
    'esc':      robot.KEY_ESCAPE,
    ' ':        robot.KEY_SPACE,
    'pageup':   robot.KEY_PAGE_UP,
    'pgup':     robot.KEY_PAGE_UP,
    'pagedown': robot.KEY_PAGE_DOWN,
    'pgdn':     robot.KEY_PAGE_DOWN,
    'printscreen':  robot.KEY_PRINT,
    'prtscr':   robot.KEY_PRINT,
    'ins':      robot.KEY_INSERT,
    'del':      robot.KEY_DELETE,
    'sys':      robot.KEY_SYSTEM,
    'lsys':     robot.KEY_LSYSTEM,
    'rsys':     robot.KEY_RSYSTEM,
    '*':        robot.KEY_MULTIPLY,
    '+':        robot.KEY_ADD,
    '-':        robot.KEY_SUBTRACT,
    '.':        robot.KEY_DECIMAL,
    '/':        robot.KEY_DIVIDE,
    'num':      robot.KEY_NUM_LOCK,
    'ctrl':     robot.KEY_CONTROL,
    'lctrl':    robot.KEY_LCONTROL,
    'rctrl':    robot.KEY_RCONTROL,

    '=':        robot.KEY_EQUAL,
    '(':        robot.KEY_LBRACKET,
    ')':        robot.KEY_RBRACKET,
    '\\':       robot.KEY_BACKSLASH,
    ';':        robot.KEY_SEMICOLON,
    '\'':       robot.KEY_QUOTE,
    ',':        robot.KEY_COMMA,
    '`':        robot.KEY_GRAVE,
    '~':        robot.KEY_PERIOD,

    // Windows
    'win':      robot.KEY_SYSTEM,
    'lwin':     robot.KEY_LSYSTEM,
    'rwin':     robot.KEY_RSYSTEM,

    // OS X (darwin)
    'cmd': robot.KEY_SYSTEM,
    'lcmd': robot.KEY_LSYSTEM,
    'rcmd': robot.KEY_RSYSTEM,

    // Linux
    // Nothing yet
};

if (os.platform() !== 'darwin') {
    Object.assign(keys, {
        'cmd': robot.KEY_CONTROL,
        'lcmd': robot.KEY_LCONTROL,
        'rcmd': robot.KEY_RCONTROL,
    });
} 

module.exports = keys;