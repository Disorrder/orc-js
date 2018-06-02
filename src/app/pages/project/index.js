import './style.styl';

const fs = window.require('fs');
const path = window.require('path');

export default {
    template: require('./template.pug')(),
    data() {
        return {
            project: null,
            sourceCode: '',
            stdout: '',
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
        runScript() {
            delete window.require.cache[this.project.path];
            this.script = window.require(this.project.path);
        },

        updateSrc() {
            this.sourceCode = fs.readFileSync(this.project.path, 'utf-8');
        },
    },
    created() {
        window.require('./lib'); // require to node.js context from .build folder

        this.project = this.getProject();
        this.project.lastOpened = Date.now();

        this.$store.commit('updateProject', this.project);

        setInterval(this.updateSrc.bind(this), 1000);
    }
};
