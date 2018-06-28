import { stat } from "fs";

const state = {
    form: {}
}
const actions = {

}
const getters = {

}
const mutations = {
    setProducts(state, products) {
        state.all = products
    }
}
export default {
    namespaced: true,
    state,
    actions,
    getters,
    mutations
}


/*
form表单面板:
- 支持编辑模式，子控件：editPanel
- 支持拖拽
- 支持控件面板
- 支持编辑面板
--子控件
---【编辑面板控件】:


form控件面板：
- 

form控件属性面板:



*/