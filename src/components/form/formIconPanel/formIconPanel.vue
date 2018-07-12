<template>
    <div :style="{display:display}" class="icon-wrap">
        <el-row>
            <el-col class="icon-title" :span="12">表单图标</el-col>
            <el-col class="icon-close" :span="12">
                <i @click="hideIconPanel()" class="el-icon-error"></i>
            </el-col>
        </el-row>
        

        <div class="icon-wrap-panel">
            <div @click="selectIcon(icon)" class="icon-item" v-for="(icon,index) in iconList" :key="index">
                <i class="ct" :class="icon.icon" :style="{color:icon.color}" ></i>
            </div>
        </div>
    </div>
</template>

<script>

    import '../../../css/formIcon/iconfont';
    import {mapActions,mapGetters} from 'vuex';
    import formMap from '../../../store/modules/form/model/formMap';

    //import 

    export default {
        name:"formIconPanel",
        props:{
            showOrDisplay:String
        },

        data(){
            return{
                display:"none",
                iconList:[
                    {
                        icon:"ct-wodeshenpi",
                        color:"#FDAD22"
                    },
                    {
                        icon:"ct-drxx37",
                        color:"#66B5FF"
                    },
                    {
                        icon:"ct-icon-test",
                        color:"#FDAD22"
                    },
                    {
                        icon:"ct-baoxiao",
                        color:"#FDAD22"
                    },
                    {
                        icon:"ct-overtime",
                        color:"#66B5FF"
                    },
                    {
                        icon:"ct-10",
                        color:"#66B5FF"
                    },
                    {
                        icon:"ct-31412412",
                        color:"#FDAD22"
                    },
                    {
                        icon:"ct-daichuhang",
                        color:"#63d22c"
                    },
                    {
                        icon:"ct-rili",
                        color:"#66B5FF"
                    }                 
                ]
            }
        },
        mounted(){
            this.display=this.showOrDisplay;
        },
        watch:{
            showOrDisplay(val){
                this.display=val;
            }
        },

        methods:{
            ...mapActions(formMap),
            /*
            * 隐藏图标面板
            */
            hideIconPanel(){
                this.display="none";
                this.$emit("childshoworclose","none");
            },
            /*
            * 选中图标面板
            */
            selectIcon(icon){
                this.$emit("childselecticon",icon);
                this.hideIconPanel();
            }
        }
    }
</script>

<style scoped>
.icon-wrap{
    position: absolute;
    top: 58px;
    width: 238px;
    height: auto;
    /*padding:10px;*/
    padding-top: 5px;
    padding-bottom: 5px;
    box-shadow: 1px 1px 8px -2px gray;
    background-color: white ;
    z-index: 6;
    text-align: left;
}
.icon-item{
    width: 46px;
    margin-left: 11px;
    height: 46px;
    display: inline-block;
    word-break: break-all;
    text-align: center;
    transition: all 0.2s;
    border-radius: 4px;
}

.icon-item:hover{
    background-color: #fff7ec;
}

.icon-item i{
    font-size: 32px;
}
.icon-title{
    text-align: left;
    font-size: 14px;
 
    padding-left: 18px;
    
}
.icon-close{
   text-align: right;
   padding-right: 18px;
   font-size: 18px;
}
</style>