import Vue from "vue";

const state = {
    formRule: {
        formId: "",
        visibleUser: {},
        approver: {
            approverList: []
        },
        send: {
            sendList: []
        },
        /**
         * sendConfig-抄送设置
         * submit:"提交申请时抄送"，
         * approval:"审批通过后抄送",
         * all:"提交申请时和审批通过后都抄送"
         */
        sendConfig: "submit"
    },
    formRuleHelper: {
        cacheSelect: {
            users: {},
            department: {}
        },
        cacheApprover: {
            /** 
             * approverType-审批人员
             * boss:"默认上级审批",
             * single:"单个人员审批"
             */
            approverType: "boss",
            /** 
             * approverWay-会签方式
             * all:"会签,所有成员同意"
             * single:"或签,单个成员同意"
             */
            approverWay: "single",
            approverPeople: {},
        },
        cacheSend: {
            /**
             * sendType-抄送方式 
             * boss:默认上级,
             * single:"单个成员"
             */
            sendType: "boss",
            sendPeople: {}
        }
    }

}

const getters = {
    /*获取表单规则*/
    getFormRule(state, getters, rootState) {
        return state.formRule;
    },
    /**
     * 获取formRuleHelper
     */
    getFormRuleHelper(state, getters, rootState) {
        return state.formRuleHelper;
    }
}

const actions = {
    changeFormRule(context, payload) {
        context.commit("changeFormRule", payload);
    },
    setCacheSelect(context, payload) {
        context.commit("setCacheSelect", payload);
    },
    setFormId(context, payload) {
        context.commit("setFormId", payload);
    },
    setVisibleUser(context, payload) {
        context.commit("setVisibleUser", payload);
    },
    setSingleApprover(context, payload) {
        context.commit("setSingleApprover", payload);
    },
    setApprover(context, payload) {
        context.commit("setApprover", payload);
    },
    setSend(context, payload) {
        context.commit("setSend", payload);
    },
    setSendConfig(context, payload) {
        context.commit("setSendConfig", payload);
    },
    resetCacheSelect(context, payload) {
        context.commit("resetCacheSelect", payload);
    },

    saveFormRule(context, payload) {
        context.commit("saveFormRule", payload);
    },
    setSingleSend(context, payload) {
        context.commit("setSingleSend", payload)
    },
    resetCacheAll(context, payload) {
        context.commit("resetCacheAll", payload);
    }


}

const mutations = {
    /**
     * 切换当前表单规则对象
     * @param {当前store对象} state 
     * @param {切换的表单规则对象} payload 
     */
    changeFormRule(state, payload) {
        Vue.delete(state, "formRule");
        Vue.set(state, payload.formRule);
    },
    /**
     * 设置关联的表单ID
     * @param {当前store对象} state 
     * @param {设置表单的ID} payload 
     */
    setFormId(state, payload) {
        state.formId = payload.formId;
    },
    /**
     * 设置用户可见范围
     * @param {当前store对象} state 
     * @param {可见范围用户对象} payload 
     */
    setVisibleUser(state, payload) {
        Vue.set(state.formRule, "visibleUser", payload);
    },
    /**
     * 设置默认审批人员
     * @param {当前store对象} state 
     * @param {可见范围用户对象} payload 
     */
    setApprover(state, payload) {
        Vue.set(state.formRule, "approver", payload.approver);
    },
    /**
     * 设置抄送人员
     * @param {当前store对象} state 
     * @param {抄送人员列表} payload 
     */
    setSend(state, payload) {
        Vue.set(state.formRule.send, "sendList", payload.sendList);
    },
    /**
     * 设置抄送配置
     * @param {当前store对象} state 
     * @param {抄送配置对象} payload 
     */
    setSendConfig(state, payload) {
        Vue.set(state.formRule, "sendConfig", payload.sendConfig);
    },
    /**
     * 
     * @param {当前store对象} state 
     * @param {保持当前表单规则对象} payload 
     */
    saveFormRule(state, payload) {

    },
    /**
     * 设置当前cacheSelect
     * @param {当前store对象} state 
     * @param {要修改的cacheSelect} payload 
     */
    setCacheSelect(state, payload) {
        Vue.set(state.formRuleHelper, "cacheSelect", payload);
    },
    /**
     * 重置当前cacheSelect
     * @param {当前store对象} state 
     * @param {*} payload 
     */
    resetCacheSelect(state) {
        Vue.set(state.formRuleHelper.cacheSelect, "users", {});
        Vue.set(state.formRuleHelper.cacheSelect, "department", {});
    },
    /**
     * 添加审批用户
     * @param {当前store对象} state 
     * @param {*} payload 
     */
    setSingleApprover(state, payload) {
        if (state.formRuleHelper.cacheApprover.approverType !== "single") {
            payload.approverPeople = null;
        }

        //setSingleApprover
        state.formRule.approver.approverList.push({
            approverType: payload.approverType,
            approverWay: payload.approverWay,
            approverPeople: payload.approverPeople
        });
    },
    /**
     * 添加单个抄送人
     *
     * @param {当前store对象} state
     * @param {当前要添加的抄送人员对象} payload
     */
    setSingleSend(state, payload) {
        if (state.formRuleHelper.cacheSend.sendType !== "single") {
            payload.sendPeople = null;
        }

        state.formRule.send.sendList.push({
            sendType: payload.sendType,
            sendPeople: payload.sendPeople
        });
    },
    /**
     *重置缓存的类型，用于弹出框初始化
     *
     * @param {当前store对象} state
     * @param {*} payload
     */
    resetCacheAll(state, payload) {
        state.formRuleHelper.cacheApprover.approverType = "boss";
        state.formRuleHelper.cacheSend.sendType = "boss";
    }
}


export default {
    namespaced: true,
    state,
    actions,
    getters,
    mutations
}