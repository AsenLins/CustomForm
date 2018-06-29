const state = {
    form: {},
    currentEditControl: {}
}
const actions = {

}
const getters = {
    /**
     * 返回当前编辑控件对象
     */
    getCurrentEditControl: (state, getters, rootState) => {
        return state.currentEditControl;
    }
}
const mutations = {
    /**
     * 替换当前设计的form对象,并且初始化为可用的表单编辑对象。
     * @param {当前store对象} state 
     * @param {要替换的窗体对象} form 
     */
    changeForm(state, form) {
        state.form = {...state.form, form };
    },

    /**
     *切换/设置当前编辑控件
     *
     * @param {当前store对象} state
     * @param {切换的控件} option
     */
    changeEditControl(state, control) {
        state.currentEditControl = {...state.currentEditControl, ...control };
    },
    /**
     * 
     * @param {当前store对象} state 
     * @param {新对象以及被添加的对象} option 
     */
    addControl(state, option) {
        //console.log("begin commit");
        //console.log(this);
        //console.log(Vue);
        //console.log(option.vue.$set);


        //option.vue.$set(option.item, option.name, option.newControl);
    },
    /**
     * 
     * @param {当前store对象} state 
     */
    removeControl(state) {
        //state.currentEditControl
    },
    /**
     * 设置对象属性
     * @param {当前store对象} state 
     * @param {对象属性} option 
     */
    setControlAttr(state, option) {

    },
    /**
     * 设置控件的验证
     * @param {当前store对象} state 
     * @param {验证对象} option 
     */
    setControlVerify(state, option) {

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