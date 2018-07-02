import Vue from 'vue';
import { formMethod } from './formMethod';

/**
 * TODO 
 * 如何把原数据对象扩展为指定的表单对象。
 * 添加获取原对象的方法。
 * */

//var cjson=require("circular-json");

const state = {
    form: {},
    currentEditControl: {}
}
const actions = {

    changeForm(context, form) {
        context.commit("changeForm", form);
    },
    changeEditControl(context, control) {
        context.commit("changeEditControl", control);
    },
    addControl(context, control) {
        context.commit("addControl", control);
    },
    removeControl(context, control) {
        context.commit("removeControl", control);
    },
    setControlAttr(context, option) {
        context.commit("setControlAttr");
    },
    setControlVerify(context, option) {
        context.commit("setControlVerify");
    }

}
const getters = {
    /**
     * 返回当前编辑控件对象
     */
    getCurrentEditControl(state, getters, rootState) {
        return state.currentEditControl;
    },
    getCurrentEditAttr(state, getters, rootState) {
        return state.currentEditControl.attr;
    },
    getCurrentEditVerify(state, getters, rootState) {
        return state.currentEditControl.verify;
    },
    getCurrentForm(state, getters, rootState) {
        return state.form;
    },
    getOriginForm(state, getters, rootState) {

    }
}
const mutations = {
    /**
     * 替换当前设计的form对象,并且初始化为可用的表单编辑对象。
     * @param {当前store对象} state 
     * @param {要替换的窗体对象} form 
     */
    changeForm(state, option) {
        console.debug("changeFrom:beforeChange", state.form);
        Vue.delete(state, "form");
        Vue.set(state, "form", option.form);
        console.debug("changeFrom:afterChange", state.form);
    },

    /**
     *切换/设置当前编辑控件
     *
     * @param {当前store对象} state
     * @param {切换的控件} option
     */
    changeEditControl(state, control) {

        Vue.delete(state, "currentEditControl");
        Vue.set(state, "currentEditControl", control);
        console.debug("changeControl", state.currentEditControl);
    },
    /**
     * 添加控件
     * @param {当前store对象} state 
     * @param {新对象以及被添加的对象} option 
     */
    addControl(state, control) {
        console.debug("mutations 【addControl】");
        if (control === undefined) {
            console.warn("addControl: control is empty");
            return;
        }
        state.form.add(control);
    },
    /**
     * 删除控件
     * @param {当前store对象} state 
     */
    removeControl(state, control) {
        console.debug("mutations 【removeControl】");

        var controlList = control.parent.controlList,
            removeIndex = -1;

        removeIndex = formMethod.getControlIndex(control._id, controlList);

        if (removeIndex > -1) {
            Vue.delete(controlList, removeIndex);
        }

        /*若控件已删除完，则把控件的容器也删除 */
        if (controlList.length == 0) {
            removeIndex = formMethod.getControlIndex(control.parent._id, state.form.controlList);
            Vue.delete(state.form.controlList, removeIndex);
        }
        console.debug("Delete After Obj", state.form);
    },
    /**
     * 设置对象属性
     * @param {当前store对象} state 
     * @param {对象属性} option 
     */
    setControlAttr(state, option) {
        console.debug("mutations 【setControlAttr】");
    },
    /**
     * 设置控件的验证
     * @param {当前store对象} state 
     * @param {验证对象} option 
     */
    setControlVerify(state, option) {
        console.debug("mutations 【setControlVerify】");
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