import './style.styl';

const fs = window.require('fs');
const path = window.require('path');
const {dialog} = window.require('electron').remote;

export default {
    template: require('./template.pug')(),
    data() {
        return {

        }
    },
    computed: {
        projects() { return this.$store.state.projects; },
        sortedProjects() {
            if (!this.projects) return [];
            // сначала недавно открытые
            return this.projects.sort((a, b) => {
                return b.lastOpened - a.lastOpened;
            });
        }
    },
    methods: {
        // createProject() {
        //
        // },
        openProject() {
            var file = dialog.showOpenDialog({
                properties: ['openFile'],
                filters: [{name: 'JavaScript', extensions: ['js']}]
            });
            if (!file || !file.length) return;
            if (Array.isArray(file)) file = file[0];

            var project = this.projects.find((v) => v.path === file);
            if (!project) {
                project = {
                    id: file.hashCode().toString(36),
                    name: path.basename(file),
                    path: file,
                    scnenes: [],
                };
                if (project.name === 'index.js') {
                    let folder = path.join(file, '..');
                    project.name = path.basename(folder);
                    // project.isFolder
                }
                this.$store.commit('addProject', project);
            }
            this.selectProject(project);
        },
        selectProject(item) {
            this.$router.push({name: 'project', params: {id: item.id}});
        },
        deleteProject(item) {
            console.log('DEL');
            this.$store.commit('deleteProject', item);
        }
    },
    created() {

    }
};
