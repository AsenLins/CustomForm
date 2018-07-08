
import uuid from 'uuid/v1';


const menuList=[
    {
        id:uuid(),
        title:"总览",
        icon:"",
        path:"'"
    },
    {
        id:uuid(),
        title:"表单",
        icon:"",
        children:[
            {
                id:uuid(),
                title:"表单设计",
                path:"formDesign"
            },
            {
                id:uuid(),
                title:"表单列表",
                path:"formList"
            }
        ]
    },
    {
        id:uuid(),
        icon:"",
        title:"数据",
        path:""
    }
]



export default menuList;
