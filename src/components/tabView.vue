<template  v-if="list.length>0">
    
            <el-tabs
                class="f-tabView"
                v-model="tab.name"
                @tab-click="tabSelect"
                type="border-card"
                closable="closable"
                @tab-remove="remove">
                <el-tab-pane  class="f-tabPane" v-for="(tab) in list"  :name="tab.name" :key="tab.name">
                    <span slot="label">                   
                        <i :class="tab.icon"></i>{{tab.label}}
                    </span>
                <keep-alive>
                    <router-view :name="tab.routerName" ></router-view>
                </keep-alive>                     
                </el-tab-pane>
                
            </el-tabs>

</template>

<script>
    /** 
     * TODO
     * 路由需要菜单的配合
     * 
     * 
    */
 
    import { mapActions, mapGetters } from 'vuex'; 
    import tabsView from '../store/modules/tabsViews/tabsView';
    import tabsViewMap from '../store/modules/tabsViews/tabsViewMap';
    export default {
        name:"tabView",
        data(){
            return{
                list:tabsView.state.tabs.list,
                tab:tabsView.state.tabs.currentTab,
                tabs:tabsView.state.tabs
            }
        },
        methods:{
            ...mapActions(tabsViewMap.actions),
            ...mapGetters(tabsViewMap.getters),
            tabSelect(tab){
                var curTab=this.tab;
                for(var index=0,listLength=this.list.length;index<listLength;index++){
                    if(this.list[index].name==tab.name){
                         this.$router.push(this.list[index].routerName);
                    }
                }
            },
            remove(removeTabName){
                this.removeTabView(removeTabName)
                .then(()=>{
                    var prevTab=this.getPrevTab();
                    if(prevTab!=null){
                        this.changeTabSelect(prevTab.name);
                        this.$router.push(prevTab.routerName);
                    }
                });
            }
        }
    }
</script>

<style scoped>
.f-tabView,.f-tabPane{
    height:100%;
}
</style>