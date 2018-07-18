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

/*插件*/
import VeeValidate from 'vee-validate';

//import Vuelidate from 'vuelidate';
//import VueValidator from 'vue-validator';


const config = {
    errorBagName: 'errors', // change if property conflicts
    fieldsBagName: 'formfields',
    events: "input|blur|custom"
};




console.log(store);


/*引入插件 */
Vue.use(ElementUI);
Vue.use(Vant);
Vue.use(VeeValidate, config);
//Vue.use(Vuelidate);
//Vue.use(VueValidator)

Vue.config.productionTip = false


new Vue({
    el: '#app',
    store,
    router,
    components: { App },
    template: '<App/>'
})