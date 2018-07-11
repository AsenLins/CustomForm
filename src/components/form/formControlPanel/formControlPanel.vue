<template>
    <el-row :style="{display:display}" class="c-control-panel">
        <el-row>
            <el-col class="c-control-title" :span="12">控件库</el-col>
            <el-col class="c-control-close" :span="12">
                <i class="el-icon-error" @click="closeControlPanel"></i>
            </el-col>
        </el-row>
        <el-row class="c-item-panel">

            <el-col v-for="(control,index) in controls" :key="index"  class="c-control-item">

                <div  @click="selectControl(control)">
                    <template v-if="control===controlType.text">
                        <i class="iconfont icon-wenben"></i>
                        <div>文本</div>
                    </template>
                    <template v-else-if="control===controlType.multiText">
                        <i class="iconfont icon-fuwenbenkuang"></i>
                        <div>多行文本</div>
                    </template>
                    <template v-else-if="control==controlType.number">
                        <i class="iconfont icon-shuzi"></i>
                        <div>数字</div>
                    </template>
                    <template v-else-if="control==controlType.checkBoxGroup">
                        <i class="iconfont icon-duoxuankuang"></i>
                        <div>复选</div>
                    </template>
                    <template v-else-if="control==controlType.radioBoxGroup">
                        <i class="iconfont icon-danxuankuang-copy"></i>
                        <div>单选</div>
                    </template>
                    
                    <template v-else-if="control==controlType.date">
                        <i class="iconfont icon-riqi1"></i>
                        <div>日期</div>
                    </template>
                    <template v-else-if="control==controlType.dateAndTime">
                        <i class="iconfont icon-riqi"></i>
                        <div>日期+时间</div>
                    </template>
                    <template v-else-if="control==controlType.fileUpload">
                        <i class="iconfont icon-fujian"></i>
                        <div>附件</div>
                    </template>
                    <template v-else-if="control==controlType.title">
                        <i class="iconfont icon-liebiao"></i>
                        <div>说明文字</div>
                    </template>
                </div>
            </el-col>
        </el-row>
    </el-row>
</template>

<script>
    import '../../../css/iconfont/iconfont.css';
    import {Controls} from '../model/controls/index';
    import {FormItem} from '../model/container/formItem';
    import {controlType} from '../model/controls/controlsTypeEnum';
    
    import addControlPanelHelp from './helper';

    /**store */
    import { mapActions, mapGetters } from 'vuex';
    import formMap from '../../../store/modules/form/model/formMap';

    console.log("controls",Controls);
    export default {
        name: "formControlPanel",
        data(){
            return{
                controls:{},
                controlType:controlType,
                display:"none"
            }
        },
        props:{
            controlPanelDisplay:String
        },
        mounted(){
            var controlList=[
                controlType.text,
                controlType.multiText,
                controlType.number,
                controlType.dateAndTime,
                controlType.date,
                controlType.checkBoxGroup,
                controlType.radioBoxGroup,
                controlType.fileUpload,
                controlType.title,  
            ]
            this.controls=controlList;
            console.log(this.controlPanelDisplay);
            this.display=this.controlPanelDisplay;
        },
        watch:{
          controlPanelDisplay(value){
             this.display=value;
          }
        },
        methods:{
            ...mapActions(formMap.actions),
            ...mapGetters(formMap.getters),
            /** 
             * 关闭控件容器
            */
            closeControlPanel(){
                this.display="none";
                this.$emit("paneldisplay","none");
            },
            /*
            * 添加选中的控件容器
            */
            selectControl(controlTypeStr){
                var newFormItem=new FormItem({});
                var newControl=new Controls[controlTypeStr]({});

                switch(controlTypeStr){
                    case this.controlType.text:
                        addControlPanelHelp.setNewControlAttr.text.call(newControl,null);
                    break;
                    case this.controlType.multiText:
                        addControlPanelHelp.setNewControlAttr.multiText.call(newControl,null);
                    break;
                    case this.controlType.number:
                        addControlPanelHelp.setNewControlAttr.number.call(newControl,null);
                    break;
                    case this.controlType.radioBoxGroup:
                        addControlPanelHelp.setNewControlAttr.radioBoxGroup.call(newControl,null);
                    break;
                    case this.controlType.checkBoxGroup:
                        addControlPanelHelp.setNewControlAttr.checkBoxGroup.call(newControl,null);
                    break;
                    case this.controlType.date:
                        addControlPanelHelp.setNewControlAttr.dateInput.call(newControl,null);
                    break;
                    case this.controlType.dateAndTime:
                        addControlPanelHelp.setNewControlAttr.dateAndTimeInput.call(newControl,null);
                    break;
                    case this.controlType.fileUpload:
                        addControlPanelHelp.setNewControlAttr.fileUpload.call(newControl,null);
                    break;
                    case this.controlType.title:
                        addControlPanelHelp.setNewControlAttr.title.call(newControl,null);
                    break;
                }
               
                newFormItem.add(newControl);
                this.addControl(newFormItem);
                this.closeControlPanel();
                console.log("newControl",newControl); 
            }
        }
    }
</script>

<style scoped="scoped">
/*控件面板*/
.c-control-panel{
    position:absolute;
    bottom: 50px;
    width: 100%;
    padding: 10px;
    padding-top:15px;
    padding-bottom: 15px;
    box-shadow: 1px 1px 15px -3px gray;
    background-color: white;
    z-index: 6;
    color: #4A5159;
}

.c-control-title{
    padding-left: 10px;
}
.c-control-close{
    text-align: right;
    padding-right: 10px;
    font-size: 21px;
    cursor: pointer;
}
.c-control-item{
    transition: all 0.3s;
    display: inline-block;
    width: 70px;
    height: 60px;
    border: 1px solid #E4E6E9; 
    text-align: center;
    margin-top: 20px;
    padding-top: 4px;
    margin-left: 10px;
    cursor: pointer;
    border-radius: 2px;
}
.c-control-item:hover{
    border:1px solid #338fda;
    box-shadow: 1px 1px 4px -1px #277dc3;
}
.c-control-item div{
    margin-top: 5px;
    font-size: 12px;
}
.c-control-item i{
    font-size: 18px;
}




</style>