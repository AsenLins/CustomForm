import Vue from "vue";

const state={
    formRule:{
        formId:"",
        visibleUser:{},
        approver:{},
        sendList:{},
        sendListConfig:{}
    }

}

const getters={
    /*获取表单规则*/
    getFormRule(state, getters, rootState){
        return state.formRule;
    }
}

const actions={
    changeFormRule(context,payload){
        context.commit("changeFormRule",payload);
    },
    setFormId(context,payload){
        context.commit("setFormId",payload);
    },
    setVisibleUser(context, payload){
        context.commit("setVisibleUser",payload);
    },
    setApprover(context,payload){
        context.commit("setApprover",payload);
    },
    setSendList(context,payload){
        context.commit("setSendList",payload);
    },
    setSendListConfig(context,payload){
        context.commit("setSendListConfig",payload);
    },
    saveFormRule(context,payload){
        context.commit("saveFormRule",payload);
    }
    
}

const mutations={
    /**
     * 切换当前表单规则对象
     * @param {当前store对象} state 
     * @param {切换的表单规则对象} payload 
     */
    changeFormRule(state, payload){
        Vue.delete(state,"formRule");
        Vue.set(state,payload.formRule);
    },
    /**
     * 设置关联的表单ID
     * @param {当前store对象} state 
     * @param {设置表单的ID} payload 
     */
    setFormId(state,payload){
        state.formId=payload.formId;
    },
    /**
     * 设置用户可见范围
     * @param {当前store对象} state 
     * @param {可见范围用户对象} payload 
     */
    setVisibleUser(state,payload){
        Vue.set(state.formRule,"visibleUser",payload.visibleUser);
    },
    /**
     * 设置默认审批人员
     * @param {当前store对象} state 
     * @param {可见范围用户对象} payload 
     */
    setApprover(state,payload){
        Vue.set(state.formRule,"approver",payload.approver);
    },
    /**
     * 设置抄送人员
     * @param {当前store对象} state 
     * @param {抄送人员列表} payload 
     */
    setSendList(state,payload){
        Vue.set(state.formRule,"sendList",payload.sendList);
    },

    /**
     * 设置抄送配置
     * @param {当前store对象} state 
     * @param {抄送配置对象} payload 
     */
    setSendListConfig(state,payload){
        Vue.set(state.formRule,"sendListConfig",payload.sendListConfig);
    },
    /**
     * 
     * @param {当前store对象} state 
     * @param {保持当前表单规则对象} payload 
     */
    saveFormRule(state,payload){
        
    }

}


export default {
    namespaced: true,
    state,
    actions,
    getters,
    mutations
}
