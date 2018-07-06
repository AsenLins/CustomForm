import Vuex from 'vuex';
import Vue from 'vue';

import form from './modules/form/formDesign';
import tabsView from './modules/tabsViews/tabsView';



Vue.use(Vuex);

var store = new Vuex.Store({
    modules: {
        form,
        tabsView
    }
})


export default store;