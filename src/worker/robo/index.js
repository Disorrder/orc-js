const robot = require('robot-js');
require('./Point');

var robo = {
    Vec2: require('./Vec2'),
    Mouse: require('./Mouse'),
    Keyboard: require('./Keyboard'),
    Window: require('./Window'),
};

module.exports = robo;