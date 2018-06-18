const os = require('os')
const fs = require('fs');
const path = require('path');

var platform = os.platform();
var platformPath = path.join(__dirname, platform+'.js');

if (fs.existsSync(platformPath)) {
    module.exports = require(platformPath);
} else {
    module.exports = require('./Base');
}
