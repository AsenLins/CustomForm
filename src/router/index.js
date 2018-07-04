import Vue from 'vue'
import Router from 'vue-router'

/*首页*/
import Main from '../views/Main/index';

/*form表单页面*/
import formDesign from '../views/form/formDesign';
import formList from '../views/form/formList';

Vue.use(Router)


const routers = [{
        path: '/',
        name: "Main",
        component: Main,
        children: [{
            name: "formDesign",
            path: "formDesign",
            component: formDesign
        }]
    },

]




/*测试组件路由*/
//import Home from '../components/form/VantUI-template'


const router = new Router({
    routes: routers
});


export default router;