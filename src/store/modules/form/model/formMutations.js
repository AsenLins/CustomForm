import Vue from 'vue';
import { DesignForm } from './formModel';
import { formMethod } from './formMethod';

const formMutations = {
    /**
     * 替换当前设计的form对象,并且初始化为可用的表单编辑对象。
     * @param {当前store对象} state 
     * @param {要替换的窗体对象} form 
     */
    changeForm(state, form) {
        //console.log("constructor", form.prototype);
        console.debug("before:【changeForm】", state.designForm.form);

        formMethod.resetVueObj(state.designForm, "form", form);
        formMethod.resetVueObj(state.designForm, "currentEditControl", {})

        console.debug("after:【changeForm】", state.designForm.form);
    },

    /**
     *切换/设置当前编辑控件
     *
     * @param {当前store对象} state
     * @param {切换的控件} option
     */
    changeEditControl(state, control) {
        console.debug("before:【changeEditControl】", control);

        formMethod.resetVueObj(state.designForm, "currentEditControl", control);

        console.debug("after:【changeEditControl】", state.designForm.currentEditControl);

    },
    /**
     * 添加控件到集合
     * @param {当前store对象} state 
     * @param {要添加的新对象} option 
     */
    addControl(state, control) {
        console.log("addddddd");
        console.debug("before:【addControl】");

        state.designForm.form.controlList.push(control);

        console.debug("after:【addControl】", state.designForm.form.controlList);
    },
    /**
     * 删除控件
     * @param {当前store对象} state 
     */
    removeControl(state, item, control) {
        console.debug("mutations 【removeControl】");

        var controlList = item.controlList,
            removeIndex = -1;

        removeIndex = formMethod.getControlIndex(control._id, controlList);

        if (removeIndex > -1) {
            Vue.delete(controlList, removeIndex);
        }

        /*若控件集为空，则把控件的容器也删除 */
        if (controlList.length == 0) {
            removeIndex = formMethod.getControlIndex(item._id, state.form.controlList);
            Vue.delete(state.form.controlList, removeIndex);
        }
        console.debug("Delete After Obj", state.form);
    },
    /**
     * 设置对象属性
     * @param {当前store对象} state 
     * @param {对象属性} option 
     */
    setControlAttr(state, attrs) {
        console.debug("begin 【setControlAttr】");

        formMethod.addVueObj(state.designForm.currentEditControl, "attrs", {});

        var curAttr = state.designForm.currentEditControl.attrs;
        for (var key in attrs) {
            Vue.set(curAttr, key, attrs[key])
        }

        console.debug("after 【setControlAttr】", curAttr);
    },
    /**
     * 设置控件的验证
     * @param {当前store对象} state 
     * @param {验证对象} option 
     */
    setControlVerify(state, rulesObj) {
        console.debug("before 【setControlVerify】", rulesObj);


        formMethod.addVueObj(state.designForm.currentEditControl, "verify", {
            isNotEmpty: false,
            rules: []
        });

        var rules = rulesObj.rules,
            curVerify = state.designForm.currentEditControl.verify;

        if (curVerify.rules === undefined) {
            Vue.set(curVerify, "rules", []);
        }

        for (var index = 0, rlength = rules.length; index < rlength; index++) {
            curVerify.rules.push(rules[index]);
        }

        console.debug("after 【setControlVerify】", curVerify);
    },
    /**
     *添加控件的规则
     *
     * @param {当前store对象} state
     * @param {要添加的rule} rule
     */
    addControlVerify(state, rule) {
        var curVerify = state.designForm.currentEditControl.verify;
        curVerify.rules.push(rule);
    },
    /**
     * 修改当前表单属性
     * @param {当前store对象} state 
     * @param {修改对象} option 
     */
    modifyEditControl(state, option) {
        console.debug("before:【modifyEditControl】");

        for (var key in option) {
            Vue.set(state.designForm.currentEditControl, key, option[key]);
        }

        console.debug("after:【modifyEditControl】", state.designForm.currentEditControl);
    }
}

export { formMutations };