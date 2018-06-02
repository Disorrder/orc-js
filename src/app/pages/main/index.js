import './style.styl';

export default {
    template: require('./template.pug')(),
    data() {
        return {
            // projects: null
        }
    },
    created() {
        this.$router.push({name: 'projects'});
    }
};
