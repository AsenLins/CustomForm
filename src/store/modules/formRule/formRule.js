import Vue from "vue";
import uuid from 'uuid/v1';
import FormRuleModel from "./formRuleModel";
const state = {
    formRuleDesign: {
        formRule: new FormRuleModel(),
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
                id: "",
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


}

const getters = {
    /*获取表单规则*/
    getFormRule(state, getters, rootState) {
        return state.formRuleDesign.formRule;
    },
    /**
     * 获取formRuleHelper
     */
    getFormRuleHelper(state, getters, rootState) {
        return state.formRuleDesign.formRuleHelper;
    },
    /**
     * 获取表单规则设计对象
     */
    getFormRuleDesign(state, getters, rootState) {
        return state.formRuleDesign;
    },
    /**
     * 获取保存的表单规则
     */
    getOriginFormRule(state, getters, rootState) {
        var originObj = JSON.parse(JSON.stringify(state.formRuleDesign.formRule));
        return originObj;
    }
}

const actions = {
    changeFormRule(context, payload) {
        context.commit("changeFormRule", payload);
    },
    resetFormRule(context, payload) {
        context.commit("resetFormRule", payload);
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
    setCacheDepartmentSelect(context, payload) {
        context.commit("setCacheDepartmentSelect", payload);
    },
    setCacheUserSelect(context, payload) {
        context.commit("setCacheUserSelect", payload);
    },
    saveFormRule(context, payload) {
        context.commit("saveFormRule", payload);
    },
    setSingleSend(context, payload) {
        context.commit("setSingleSend", payload)
    },
    resetCacheAll(context, payload) {
        context.commit("resetCacheAll", payload);
    },
    removeCacheUser(context, payload) {
        context.commit("removeCacheUser", payload);
    },
    removeCacheDepartment(context, payload) {
        context.commit("removeCacheDepartment", payload);
    },
    removeApproverUser(context, payload) {
        context.commit("removeApproverUser", payload);
    },
    removeSendUser(context, payload) {
        context.commit("removeSendUser", payload);
    }


}

const mutations = {
    /**
     * 切换当前表单规则对象
     * @param {当前store对象} state 
     * @param {切换的表单规则对象} payload 
     */
    changeFormRule(state, payload) {
        Vue.delete(state.formRuleDesign, "formRule");
        Vue.set(state.formRuleDesign, "formRule", payload.formRule);
    },
    resetFormRule(state, payload) {
        Vue.delete(state.formRuleDesign, "formRule");
        Vue.set(state.formRuleDesign, "formRule", new FormRuleModel());
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
        var visbleUsers = JSON.parse(JSON.stringify(payload));
        var count = 0;
        for (var key in visbleUsers.users) {
            count++;
        }
        for (var key in visbleUsers.department) {
            count++;
        }
        visbleUsers.count = count;
        console.log("visbleUsers", visbleUsers);
        Vue.set(state.formRuleDesign.formRule, "visibleUser", visbleUsers);
    },
    /**
     * 设置默认审批人员
     * @param {当前store对象} state 
     * @param {可见范围用户对象} payload 
     */
    setApprover(state, payload) {
        var approver = JSON.parse(JSON.stringify(payload.approver));
        Vue.set(state.formRuleDesign.formRule, "approver", approver);
    },
    /**
     * 设置抄送人员
     * @param {当前store对象} state 
     * @param {抄送人员列表} payload 
     */
    setSend(state, payload) {
        var sendList = JSON.parse(JSON.stringify(payload.sendList));
        Vue.set(state.formRuleDesign.formRule.send, "sendList", sendList);
    },
    /**
     * 设置抄送配置
     * @param {当前store对象} state 
     * @param {抄送配置对象} payload 
     */
    setSendConfig(state, payload) {
        Vue.set(state.formRuleDesign.formRule, "sendConfig", payload.sendConfig);
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
        var cacheSelect = JSON.parse(JSON.stringify(payload));
        Vue.set(state.formRuleDesign.formRuleHelper, "cacheSelect", cacheSelect);
    },
    /**
     * 设置当前缓存cacheSelct的users对象
     * @param {当前store对象} state 
     * @param {人员对象} payload 
     */
    setCacheUserSelect(state, payload) {
        Vue.set(state.formRuleDesign.formRuleHelper.cacheSelect, "users", payload.users);
    },
    /**
     * 设置当前缓存cacheSelct的department对象
     * @param {当前store对象} state 
     * @param {部门对象} payload 
     */
    setCacheDepartmentSelect(state, payload) {
        Vue.set(state.formRuleDesign.formRuleHelper.cacheSelect, "department", payload.department);
    },
    /**
     * 重置当前cacheSelect
     * @param {当前store对象} state 
     * @param {*} payload 
     */
    resetCacheSelect(state) {
        Vue.set(state.formRuleDesign.formRuleHelper.cacheSelect, "users", {});
        Vue.set(state.formRuleDesign.formRuleHelper.cacheSelect, "department", {});
    },
    /**
     * 添加审批用户
     * @param {当前store对象} state 
     * @param {*} payload 
     */
    setSingleApprover(state, payload) {
        var addObj = JSON.parse(JSON.stringify(payload));
        addObj.id = uuid();
        if (state.formRuleDesign.formRuleHelper.cacheApprover.approverType !== "single") {
            addObj.approverPeople = {
                userid: uuid()
            };
        }
        state.formRuleDesign.formRule.approver.approverList.push(addObj);
    },
    /**
     * 添加单个抄送人
     *
     * @param {当前store对象} state
     * @param {当前要添加的抄送人员对象} payload
     */
    setSingleSend(state, payload) {
        var addObj = JSON.parse(JSON.stringify(payload));
        addObj.id = uuid();
        if (state.formRuleDesign.formRuleHelper.cacheSend.sendType !== "single") {
            addObj.sendPeople = {
                userid: uuid()
            };
        }
        state.formRuleDesign.formRule.send.sendList.push(addObj);
    },
    /**
     *重置缓存的类型，用于弹出框初始化
     *
     * @param {当前store对象} state
     * @param {*} payload
     */
    resetCacheAll(state, payload) {
        state.formRuleDesign.formRuleHelper.cacheApprover.approverType = "boss";
        state.formRuleDesign.formRuleHelper.cacheSend.sendType = "boss";
    },
    /**
     * 删除指定人员的cacheSelect缓存对象
     * @param {当前store对象} state 
     * @param {人员ID} payload 
     */
    removeCacheUser(state, payload) {
        Vue.delete(state.formRuleDesign.formRuleHelper.cacheSelect.users, payload.userId);
        //Vue.set(state.formRuleHelper.cacheSelect.users, payload.userId, {});
    },
    /**
     * 删除指定部门ID的cacheSelect缓存对象
     * @param {当前store对象} state 
     * @param {部门ID} payload 
     */
    removeCacheDepartment(state, payload) {
        Vue.delete(state.formRuleDesign.formRuleHelper.cacheSelect.department, payload.departmentId);
    },
    /**
     * 删除已选择的抄送用户
     * @param {当前store对象} state 
     * @param {要删除的已选择抄送用户ID} payload 
     */
    removeApproverUser(state, payload) {
        var approvalList = state.formRuleDesign.formRule.approver.approverList;
        var removeIndex = -1;
        for (var index = 0, approvalListLength = approvalList.length; index < approvalListLength; index++) {
            if (approvalList[index].approverPeople.userid === payload.userid) {
                removeIndex = index;
                break;
            }
        }
        if (removeIndex == -1) {
            return;
        }
        Vue.delete(state.formRuleDesign.formRule.approver.approverList, removeIndex);
    },
    /**
     * 删除已选择审批用户
     * @param {当前store对象} state 
     * @param {要删除的已选择审批用户ID} payload 
     */
    removeSendUser(state, payload) {
        var sendList = state.formRuleDesign.formRule.send.sendList;
        var removeIndex = -1;
        for (var index = 0, sendListLength = sendList.length; index < sendListLength; index++) {
            if (sendList[index].sendPeople.userid === payload.userid) {
                removeIndex = index;
                break;
            }
        }
        if (removeIndex == -1) {
            return;
        }
        Vue.delete(state.formRuleDesign.formRule.send.sendList, removeIndex);
    }
}


export default {
    namespaced: true,
    state,
    actions,
    getters,
    mutations
}