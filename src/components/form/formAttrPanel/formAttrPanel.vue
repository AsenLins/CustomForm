<template>
    <el-row>
      <el-col :span="24">
          <el-form ref="form"  label-width="80px">
            <el-form-item label="表单名称">
                <el-input v-model="formDesign.form.title" size="small" placeholder="表单名称" ></el-input>
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
                
                <el-form-item v-if="formDesign.currentEditControl.title!==undefined" label="控件名称">
                    <el-input size="small" v-model="formDesign.currentEditControl.title" placeholder="控件名称" ></el-input>
                </el-form-item>

                <el-form-item v-if="formDesign.currentEditControl.placeholder!==undefined" label="控件说明">

                    <el-input
                        type="textarea"
                        resize="none"
                        :autosize="{ minRows: 3, maxRows: 3}"
                        placeholder="控件说明"
                        v-model="formDesign.currentEditControl.placeholder">
                    </el-input>

                </el-form-item>   
                <!--<template v-if="formDesign.currentEditControl.type==controlType.text"></template>-->
            
                <!--数据属性-->
                <el-form-item v-if="
                    formDesign.currentEditControl.type===controlType.checkBoxGroup||
                    formDesign.currentEditControl.type===controlType.radioBoxGroup" 
                    label="添加选项"
                >
                    <form-option-data-panel></form-option-data-panel>

                </el-form-item>

                <!--控件的其他attr-->
                <el-form-item label="其他">
                    <el-checkbox label="是否必填" v-model="formDesign.currentEditControl.attrs.isNotEmpty" name="isNotEmpty"></el-checkbox>
                    <el-checkbox label="是否参与打印" v-model="formDesign.currentEditControl.attrs.isPrint" name="isPrint"></el-checkbox>
                </el-form-item>              
            
            </template>

          </el-form>

      </el-col>
    </el-row>
</template>

<script>
    import '../../../css/formIcon/iconfont.css';
    import formIconPanel from '../formIconPanel/formIconPanel'; 
    import formOptionDataPanel from '../formOptionDataPanel/formOptionDataPanel';
    /**store */
    import { mapActions, mapGetters } from 'vuex';
    import formMap from '../../../store/modules/form/model/formMap';
    import form from '../../../store/modules/form/formDesign';
    import {controlType} from '../model/controls/controlsTypeEnum';

    

    export default {
        name:"formAttrPanel",
        components:{
            formIconPanel,
            formOptionDataPanel
        },        
        data(){
            return{
                curIcon:{
                    icon:"ct-wodeshenpi",
                    color:"#FDAD22"
                },
                formDesign:form.formDesign,
                showOrCloseIconPanel:"none",
                controlType:controlType
            }
        },
        beforeMount(){
            this.formDesign=this.getCurrentDesignForm();
            console.log("formDesign",this.getCurrentDesignForm());
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