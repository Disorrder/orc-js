import './style.styl';
import './vendor';
import './utils';

import Vue from 'vue';
import store from './store';
import router from './router';

$(() => {
    var app = new Vue({
        el: '#app',
        store,
        router,
        data: {
            theme: 'light',
        },
        created() {

        }
    });
    window.app = app;
});

// Hotkeys
// TODO: wrap in file
const electron = window.require('electron');
$(document).on('keydown.hotkey', (e) => {
    var combo = [e.ctrlKey&&'ctrl',  e.altKey&&'alt',  e.shiftKey&&'shift', e.originalEvent.code].filter((v) => v);
    var comboString = combo.join('+');
    // console.log('Hotkey:', comboString, e.keyCode);
    if (hotkeys[comboString]) hotkeys[comboString]();

    // if (comboString === 'ctrl+shift+KeyU') {
    //     // app.emit('openDevTools');
    // }
});

var hotkeys = {
    "ctrl+shift+KeyK"() {
        electron.remote.webContents.getAllWebContents()[0].toggleDevTools(); // wow wtf why
        // app.emit('openDevTools');
    },
}
