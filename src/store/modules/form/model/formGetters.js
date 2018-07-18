const cjson = require("circular-json");
const formGetters = {

    /*
     获取当前编辑控件
    */
    getCurrentEditControl(state, getters, rootState) {
        return state.designForm.currentEditControl;
    },
    /*
     获取当前编辑控件属性
    */
    getCurrentEditAttr(state, getters, rootState) {
        return state.designForm.currentEditControl.attrs;
    },
    /*
     获取当前编辑控件的验证属性
    */
    getCurrentEditVerify(state, getters, rootState) {
        return state.designForm.currentEditControl.verify;
    },
    /*
     获取当前编辑表单对象
    */
    getCurrentForm(state, getters, rootState) {
        console.log(state);
        return state.designForm.form;
    },
    /*
     获取设计表单对象
    */
    getCurrentDesignForm(state, getters, rootState) {
        return state.designForm;
    },
    /*
     获取当前源表单对象：包含json字符串,表单对象
    */
    getOriginForm(state, getters, rootState) {
        return {
            str: cjson.stringify(state.designForm.form),
            origin: JSON.parse(cjson.stringify(state.designForm.form))
        }
    },
    getFormVerify(state, getters, rootState) {
        return state.designForm.formVerify;
    }



}

export { formGetters };