import Vue from 'vue';


const state = {
    tabs: {
        list: [],
        currentTab: {
            name: "",
            label: ""
        }
    }
}

const getters = {
    /**
     * 获取当前选中的tab对象
     * @param {*} state 
     * @param {*} getters 
     * @param {*} rootState 
     */
    getCurrentTab(state, getters, rootState) {
        return state.tabs.currentTab;
    },
    /**
     * 
     * @param {获取当前tabs列表} state 
     * @param {*} getters 
     * @param {*} rootState 
     */
    getCurrentTabList(state, getters, rootState) {
        return state.tabs.list;
    }
}

const actions = {
    setTabViews(context, param) {
        context.commit("setMenu", param);
    },
    addAndSelectTabView(context, param) {
        var curTabViews = context.state.tabs.list,
            tab = param.tab,
            hasTab = false;
        console.log("tabs", curTabViews);
        for (var index = 0, tabLength = curTabViews.length; index < tabLength; index++) {
            if (curTabViews[index].name == tab.id) {
                hasTab = true;
                break;
            }
        }

        if (hasTab) {
            context.commit("changeTabSelect", param);
        } else {
            context.commit("addTabView", param);
        }
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
        Vue.delete(state.tabs, "list");
        Vue.set(state.tabs, "list", param.list);
    },
    /**
     *添加tabView
     *
     * @param {*} state
     * @param {*} param
     */
    addTabView(state, param) {

        var addTab = param.tab;
        var newTab = {
            name: addTab.id,
            label: addTab.title,
            routerName: addTab.path,
        }
        state.tabs.list.push(newTab);
        Vue.set(state.tabs.currentTab, "name", newTab.name);

        console.debug("TabView Has add", newTab);

    },
    /**
     *删除tabView
     *
     * @param {*} state
     * @param {*} param
     */
    removeTabView(state, param) {
        for (var index = 0, listLength = state.tabs.list.length; index < listLength; index++) {
            if (state.tabs.list[index].id == param.tabView.id) {
                Vue.delete(state, "list", index);
                if (index - 1 > 0) {
                    Vue.set(state, "currentMenu", state.tabs.list[index - 1]);
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

        Vue.set(state.tabs.currentTab, "name", param.tab.id);

    }
}


export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}