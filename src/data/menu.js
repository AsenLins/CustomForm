import uuid from 'uuid/v1';


const menuList = [{
        id: uuid(),
        title: "总览",
        icon: "el-icon-star-on",
        path: "overView"
    },
    {
        id: uuid(),
        title: "表单",
        icon: "el-icon-menu",
        children: [{
                id: uuid(),
                title: "表单设计",
                path: "formDesign"
            },
            {
                id: uuid(),
                title: "表单列表",
                path: "formList"
            }
        ]
    },
    {
        id: uuid(),
        icon: "el-icon-tickets",
        title: "数据",
        path: "data"
    }
]



export default menuList;