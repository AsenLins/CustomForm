import Vue from 'vue';
const state = {
    list: [],
    currentTab: {}
}

const getters = {
    getCurrentMenu() {
        return this.currentMenu;
    }
}

const actions = {
    setTabViews(context, param) {
        context.commit("setMenu", param);
    },
    addTabViews(context, param) {
        context.commit("addMenu", param);
    },
    removeTabView(context, param) {
        context.commit("removeTabView", param)
    },
    changeTabSelect(context, param) {
        context.commit("changeTabSelect", param);
    }
}

const mutations = {
    /**
     *初始化tabView
     *
     * @param {*} state
     * @param {*} param
     */
    setTabViews(state, param) {
        Vue.delete(state, "list");
        Vue.set(state, "list", param.list);
    },
    /**
     *添加tabView
     *
     * @param {*} state
     * @param {*} param
     */
    addTabView(state, param) {
        state.list.push(param.tabView);
        Vue.set(state, "currentTab", param.tabView);
    },
    /**
     *删除tabView
     *
     * @param {*} state
     * @param {*} param
     */
    removeTabView(state, param) {
        for (var index = 0, listLength = state.list.length; index < listLength; index++) {
            if (state.list[index].id == param.tabView.id) {
                Vue.delete(state, "list", index);
                if (index - 1 > 0) {
                    Vue.set(state, "currentMenu", state.list[index - 1]);
                }

            }
        }
    },
    /**
     *切换当前选项卡
     *
     * @param {*} state
     * @param {*} param
     */
    changeTabSelect(state, param) {
        Vue.set(state, "currentTab", param.tab);
    }
}


export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}