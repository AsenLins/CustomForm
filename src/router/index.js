import Vue from 'vue'
import Router from 'vue-router'

/*首页*/
import Main from '../views/Main/index';
import formDesign from '../views/form/formDesign/formDesign';
import formList from '../views/form/formList';
import formDesignMain from '../views/form/formDesign/formDesignMain';
Vue.use(Router)

const routers = [{

    path: '/',
    name: "Main",
    component: Main,
    children: [{
            name: "formDesignMain",
            path: "formDesignMain",
            components: { formDesignMain }
            //components: { formDesign }
        }, {
            name: "formList",
            path: "formList",
            components: { formList }
        }, {
            path: "data",
            components: {}
        }, {
            path: "overView",
            components: {}
        }

    ]

}]

/*测试组件路由*/
//import Home from '../components/form/VantUI-template'

const router = new Router({ routes: routers });

export default router;