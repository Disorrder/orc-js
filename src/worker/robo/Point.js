var robot = require('robot-js');
var Vec2 = require('./Vec2');

robot.Point.prototype.toVec2 = function() {
    return new Vec2(this.x, this.y);
};
