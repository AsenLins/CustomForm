/*form表单页面*/
import formDesign from '../views/form/formDesign';
import formList from '../views/form/formList';
import uuid from 'uuid';

const menu = [{
        id: uuid(),
        title: "总览",
        router: {

        }
    }, {
        id: uuid(),
        title: "表单设计",
        router: {

        }
    },
    {
        id: uuid(),
        title: "数据",
        router: {

        }
    }
]

const InsideRouter = [{
    path: "formDesign",
    components: {
        formDesign,
        formList
    }
}]
export default InsideRouter;