import Vue from 'vue';
import { DesignForm } from './formModel';
import { formMethod } from './formMethod';
import uuid from 'uuid/v1';


const formMutations = {
    /**
     * 替换当前设计的form对象,并且初始化为可用的表单编辑对象。
     * @param {当前store对象} state 
     * @param {要替换的窗体对象} form 
     */
    changeForm(state, form) {
        //console.log("constructor", form.prototype);
        console.debug("before:【changeForm】", state.designForm);
        /*
        Vue.set(state.designForm, "form", form);
        Vue.set(state.designForm, "currentEditControl", {
            _id: ""
        });
        */
        formMethod.resetVueObj(state.designForm, "form", form);
        formMethod.resetVueObj(state.designForm, "currentEditControl", {
            _id: ""
        })
        formMethod.resetVueObj(state.designForm, "formVerify", {});


        console.debug("after:【changeForm】", state.designForm);
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
    removeControl(state, option) {
        console.debug("mutations 【removeControl】");
        var item = option.item;
        var control = option.control;
        var controlList = item.controlList,
            removeIndex = -1;

        removeIndex = formMethod.getControlIndex(control._id, controlList);

        if (removeIndex > -1) {
            Vue.delete(controlList, removeIndex);
        }

        /*若控件集为空，则把控件的容器也删除 */
        if (controlList.length == 0) {
            removeIndex = formMethod.getControlIndex(item._id, state.designForm.form.controlList);
            Vue.delete(state.designForm.form.controlList, removeIndex);
        }
        console.debug("Delete After Obj", state.designForm.form);
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
    },
    /**
     * 添加数据属性optionData
     * @param {当前store对象} state 
     * @param {添加的对象} payload 
     */
    attrOptionDataPush(state, payload) {
        var newOptionData = {
            _id: uuid(),
            value: payload.value
        }
        state.designForm.currentEditControl.data.optionData.push(newOptionData);
    },
    /**
     * 修改数据对象
     * @param {当前store对象} state 
     * @param {修改的对象} payload 
     */
    attrOptionChange(state, payload) {
        var updateIndex = payload.updateIndex;
        var updateObj = payload.updateObj;
        Vue.set(state, designForm, currentEditControl.data.optionData, updateIndex, updateObj);
    },
    /**
     * 删除数据对象
     * @param {当前store对象} state 
     * @param {删除的对象} payload 
     */
    attrOptionDataDelete(state, payload) {
        var removeIndex = payload.removeIndex;
        Vue.delete(state.designForm.currentEditControl.data.optionData, removeIndex);
    },
    /**
     * 修改验证对象
     * @param {当前store对象} state 
     * @param {表单验证的布尔值true|false} payload 
     */
    formVerifyChange(state, payload) {
        Vue.set(state.designForm, "formVerify", payload);
    },
    setControlVerifyStatus(state, payload) {

        Vue.set(state.designForm.currentEditControl, "verifyStatus", payload.verifyStatus);

    }
}

export { formMutations };