<template>
    <el-row>
      <el-col :span="24">
          <el-form ref="form"  label-width="80px">
            <el-form-item label="表单名称">
                <el-input size="small" ></el-input>
            </el-form-item>

            <el-form-item label="图标">
                <div @click="childShowOrClose('block')"  class="icon-wrap">
                    <i class="selectItem ct" :class="curIcon.icon" :style="{color:curIcon.color}" ></i>
                </div>
                <formIconPanel @childselecticon="childselecticon" @childshoworclose="childShowOrClose" :showOrDisplay="showOrCloseIconPanel"></formIconPanel>
            </el-form-item>          

            <el-form-item label="是否启用">
                <el-switch ></el-switch>
            </el-form-item>           

            <template v-if="formDesign.currentEditControl._id!=''">
                <div>242423</div>
            </template>
          </el-form>

      </el-col>
    </el-row>
</template>

<script>
    import '../../../css/formIcon/iconfont.css';
    import formIconPanel from '../formIconPanel/formIconPanel'; 
    /**store */
    import { mapActions, mapGetters } from 'vuex';
    import formMap from '../../../store/modules/form/model/formMap';
    import form from '../../../store/modules/form/formDesign';

    export default {
        name:"formAttrPanel",
        components:{
            formIconPanel
        },        
        data(){
            return{
                curIcon:{
                    icon:"ct-wodeshenpi",
                    color:"#FDAD22"
                },
                formDesign:form.formDesign,
                showOrCloseIconPanel:"none"
            }
        },
        mounted(){
            this.formDesign=this.getCurrentForm();
        },
        methods:{
            ...mapActions(formMap.actions),
            ...mapGetters(formMap.getters),
            /**
             * 显示图标面板
             */
            childShowOrClose(val){
                this.showOrCloseIconPanel=val;
            },
            /**
             * 获取图标面板选中的图标
             */
            childselecticon(icon){
                this.curIcon=icon;
            }
        }
    }
</script>

<style scoped>
/*
图标选择
*/
.icon-wrap{
    width: 50px;
    height: 50px;
    border: 1px solid #ececec;
    border-radius: 5px;
    text-align: center;
    line-height: 50px;
    cursor: pointer;
}
.selectItem{
    font-size: 34px;
}



</style>