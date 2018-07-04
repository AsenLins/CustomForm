<template>
        <el-tabs
            class="f-tabView"
            v-model="tabIndex"
            type="border-card"
            closable="closable"
            @tab-remove="remove">
            <el-tab-pane class="f-tabPane" v-for="tab in tabs" :name="tab.id" :key="tab.id">
                <span slot="label">                   
                    <i :class="tab.icon"></i>{{tab.name}}
                </span>
                <router-view :name="tab.routerName"></router-view>

            </el-tab-pane>
        </el-tabs>
        
</template>

<script>


    export default {
        name:"tabView",
        data(){
            return{
                tabIndex:"1"
            }
            
        },
        computed:{

        },

        watch:{
          tabs(changeTabs){
            
              console.debug("tabs is change");
          }  
        },
        props:{
            tabs:Array
        },
        
        mounted(){
            this.tabIndex=this.tabs[0].id;
        },
        methods:{
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