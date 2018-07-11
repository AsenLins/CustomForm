import { formGetters } from './model/formGetters';
import { formAction } from './model/formAction';
import { formMutations } from './model/formMutations';
import { DesignForm } from './model/formModel';

/**
 * TODO 
 * 如何把原数据对象扩展为指定的表单对象。
 * 添加获取原对象的方法。(√)
 * */


const state = {
    designForm: new DesignForm({
        form: {
            title: "表单名称",
            controlList: []
        },
        currentEditControl: {}
    })
}

const actions = formAction;
const getters = formGetters;
const mutations = formMutations;


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