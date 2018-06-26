import Vue from 'vue'
import Router from 'vue-router'
//import Home from '../views/Home/index'

/*测试组件路由*/
//import Home from '../components/form/VantUI-template'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'Home',
        component: Home
    }]
})