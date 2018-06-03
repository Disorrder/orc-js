import './style.styl';

const fs = window.require('fs');
const path = window.require('path');
const child_process = window.require('child_process');

export default {
    template: require('./template.pug')(),
    data() {
        return {
            project: null,
            state: 'ready',
            sourceCode: '',
            stdout: '',
            panels: {
                source: false,
                console: false,
            }
        }
    },
    computed: {
        projects() { return this.$store.state.projects; },
        isFolder() { return !/\.js$/.test(this.project.name); }
    },
    methods: {
        getProject(id) {
            if (!id) id = this.$route.params.id;
            return this.projects.find((v) => v.id === id);
        },
        _runScript() {
            console.log('start script', Date.now());
            delete window.require.cache[this.project.path];
            this.script = window.require(this.project.path);
            console.log('end script', Date.now());
        },
        runScriptWorker() {
            if (this.state === 'progress') return;
            this.state = 'progress';

            // return setTimeoutPromise(300).then(() => {
            setTimeout(() => { // wait for buttons animation
                console.log('Run script', Date.now());
                var child = child_process.fork('.build/lib/worker', [this.project.path], {silent: true});
                child.on('close', (code) => {
                    console.log('Finish script', Date.now());
                    this.state = 'ready';
                });
                child.stdout.on('data', (data) => {
                    this.panels.console = true;
                    this.stdout += data.toString();
                    console.log('stdout:', data.toString());
                });
                console.log(child);
                return this.scriptWorker = child;
            }, 250);
        },

        stopScript() {
            console.log('STOP');
            this.scriptWorker.kill();
        },

        updateSrc() {
            this.sourceCode = fs.readFileSync(this.project.path, 'utf-8');
        },
    },
    created() {
        // window.require('./lib'); // require to node.js context from .build folder

        this.project = this.getProject();
        this.project.lastOpened = Date.now();

        this.$store.commit('updateProject', this.project);

        setInterval(this.updateSrc.bind(this), 1000);
    }
};

function setTimeoutPromise(time) {
    return new Promise((resolve) => {
        setTimeout(resolve, time);
    });
}

// class Fork {
//     constructor(...args) {
//         this.process = child_process.fork(...args);
//
//     }
// }
