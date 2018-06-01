import './style.styl';

const glob = window.require('globby');
const fs = window.require('fs');
const path = window.require('path');

export default {
    template: require('./template.pug')(),
    data() {
        return {
            project: null,
        }
    },
    computed: {
        projects() { return this.$store.state.projects; },
    },
    methods: {
        getProject(id) {
            if (!id) id = this.$route.params.id;
            return this.projects.find((v) => v.id === id);
        },
    },
    created() {
        this.project = this.getProject();
        this.project.lastOpened = Date.now();

        this.$store.commit('updateProject', this.project);
    }
};
