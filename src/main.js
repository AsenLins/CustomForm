/*vue组件 */
import Vue from 'vue'
import App from './App'


/*引入elementUI */
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './css/element-variables.scss';

/*引入vantUI */
import Vant from 'vant';
import 'vant/lib/vant-css/index.css';

/*router */
import router from './router'

/*store */
import store from './store/index';




/*引入插件 */
Vue.use(ElementUI);
Vue.use(Vant);
Vue.config.productionTip = false


new Vue({
    el: '#app',
    store,
    router,
    components: { App },
    template: '<App/>'
})