var uuid = require("uuid/v1");

const menu = [{
        id: uuid(),
        name: "表单设计",
        icon: "inbox",
        path: "",
        routerName: "formDesign",
        child: []
    },
    {
        id: uuid(),
        name: "数据记录",
        icon: "grade",
        path: "",
        routerName: "formList",
        child: []
    }
]

module.exports = menu;