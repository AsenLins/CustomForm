// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import MuseUI from 'muse-ui';
import Vuex from 'vuex';
import 'muse-ui/dist/muse-ui.css';

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './css/element-variables.scss';





import Vant from 'vant';
import 'vant/lib/vant-css/index.css';



Vue.use(ElementUI);
Vue.use(Vuex);
Vue.use(Vant);
Vue.use(MuseUI);
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})