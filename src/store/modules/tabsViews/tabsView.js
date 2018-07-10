import Vue from 'vue';


const state = {
    tabs: {
        list: [],
        currentTab: {
            name: "",
            label: ""
        },
        prevTab: {}

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
    },
    getPrevTab(state) {
        return state.tabs.prevTab;
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
            context.commit("changeTabSelect", tab.id);
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
    removeTabView(state, removeTabName) {
        var tabs = state.tabs.list,
            removeTabName = removeTabName,
            prevIndex = -1;

        for (var index = 0, tabsLength = tabs.length; index < tabsLength; index++) {
            var curTap = tabs[index];
            if (curTap.name == removeTabName) {
                Vue.delete(tabs, index);
                prevIndex = index - 1;
                console.log("prevIndex", prevIndex);
                break;
            }
        }
        if (prevIndex >= 0) {
            console.log("tabs prev", tabs);
            Vue.set(state.tabs, "prevTab", tabs[prevIndex]);
        }
    },
    /**
     *切换当前选项卡
     *
     * @param {*} state
     * @param {*} param
     */
    changeTabSelect(state, name) {

        Vue.set(state.tabs.currentTab, "name", name);

    }
}


export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}