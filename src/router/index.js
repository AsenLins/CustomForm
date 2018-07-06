import Vue from 'vue'
import Router from 'vue-router'

/*首页*/
import Main from '../views/Main/index';

/*二级路由（嵌套路由） */
import InsideRouter from './InsideRouter';


Vue.use(Router)


const routers = [{
    path: '/',
    name: "Main",
    component: Main,
    children: InsideRouter
}]




/*测试组件路由*/
//import Home from '../components/form/VantUI-template'


const router = new Router({
    routes: routers
});


export default router;