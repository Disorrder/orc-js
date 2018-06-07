// WIP
const child_process = window.require('child_process');

class Thread {
    constructor(file, attrs) {
        this.process = child_process.fork(file, attrs, {silent: true});    
        // TODO: add ee, pass events
    }
}