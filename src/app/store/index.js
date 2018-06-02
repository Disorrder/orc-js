import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

var store = new Vuex.Store({
    state: {
        projects: JSON.parse( localStorage.getItem('projects') ) || [],
        settings: JSON.parse( localStorage.getItem('settings') ),
    },
    mutations: {
        addProject(state, val) {
            state.projects.push(val);
            localStorage.projects = JSON.stringify(state.projects);
        },
        updateProject(state, val) {
            state.projects.find((v) => {
                if (v.id !== val.id) return false;
                Object.assign(v, val);
                return true;
            });
            localStorage.projects = JSON.stringify(state.projects);
        },
        deleteProject(state, val) {
            state.projects.delete(val);
            localStorage.projects = JSON.stringify(state.projects);
        },
        saveProjects(state, val) {
            state.projects = val;
            localStorage.projects = JSON.stringify(state.projects);
        },

        saveSettings(state, val) {
            state.settings = val;
            localStorage.settings = JSON.stringify(state.settings);
        },
        resetSettings(state) {
            state.settings = {

            };
            localStorage.settings = JSON.stringify(state.settings);
        }
    },
});

export default store;
