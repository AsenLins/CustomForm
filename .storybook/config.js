import { configure } from '@storybook/vue';



import Vue from 'vue';
import MuseUI from 'muse-ui';
import 'muse-ui/dist/muse-ui.css';
import Vant from 'vant';
import 'vant/lib/vant-css/index.css';
import { configureViewport } from '@storybook/addon-viewport';

// automatically import all files ending in *.stories.js
const req = require.context('../src/stories', true, /.stories.js$/);

function loadStories() {
    req.keys().forEach(filename => req(filename));
}




Vue.use(Vant);
Vue.use(MuseUI);



configure(loadStories, module);

