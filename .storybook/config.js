import { configure } from '@storybook/vue';


import Vue from 'vue';
import Vuex from 'vuex'
import MuseUI from 'muse-ui';
import 'muse-ui/dist/muse-ui.css';
import Vant from 'vant';
import 'vant/lib/vant-css/index.css';


import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
/* import '../src/css/element-variables.scss';*/


// automatically import all files ending in *.stories.js
const req = require.context('../src/stories', true, /.stories.js$/);

function loadStories() {
    req.keys().forEach(filename => req(filename));
}

Vue.use(Vuex);
Vue.use(Vant);
Vue.use(ElementUI);
Vue.use(MuseUI);
Vue.config.silent = true;
configure(loadStories, module);