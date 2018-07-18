const state = {
    menu: []
}

const getters = {
}


const actions = {
    setMenu(context, param) {
        context.commit("setMenu", param);
    },
    getMenuRouter(context,param){
        
    }
}

const mutations = {
    setMenu(state, param) {

    },
    getMenuRouter(state,param){

    }
}



export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}