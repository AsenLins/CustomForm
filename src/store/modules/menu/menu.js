const state = {
    menu: []
}

const getters = {
    getMenuRouter(state, getters, rootState) {

    }
}


const actions = {
    setMenu(context, param) {
        context.commit("setMenu", param);
    }
}

const mutations = {
    setMenu(state, param) {

    }
}



export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}