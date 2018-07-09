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
    import menuList from '../data/menu';
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
            tabSelect(selectTab){
                var name=selectTab.name;
                console.log(selectTab);
            },
            tabSelect(){
                var curTab=this.tab;
                for(var i=0;i<menuList.length;i++){
                    var curMenu=menuList[i];
                    if(curMenu.id==curTab.name){
                        console.log("父符合");
                        this.$router.push(curMenu.path);
                        break;
                    }
                    if(curMenu.children!==undefined){
                        for(var c=0;c<curMenu.children.length;c++){
                            var childMenu=curMenu.children[c];
                            if(childMenu.id==curTab.name){
                                console.log("符合");
                                this.$router.push(childMenu.path);
                                break;
                            }
                        }

                    }
                }
                console.log(curTab);
            },
            remove(id){
                for(var index=0,tabLength=this.tabs.length;index<tabLength;index++){
                    if(this.tabs[index].id==id){
                        this.tabs.splice(index,1);
                        if(index-1>=0){
                            this.tabIndex=this.tabs[index-1].id;
                        }
                        break;
                    }
                }
                console.debug("tab is remove");
            }
        }
    }
</script>

<style scoped>
.f-tabView,.f-tabPane{
    height:100%;
}
</style>