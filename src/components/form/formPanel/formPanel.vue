<template>
        <div class="c-form-wrap">
   
         <van-nav-bar  class="c-form-title" :title="formDesign.form.title"/>  
            <draggable class="c-drag-panel"  v-model="formDesign.form.controlList" :options="{group:'control'}" @start="drag=true" @end="drag=false"> 
            <van-cell-group  style="  position: relative; top:0px;" class="c-form-item" v-for="item in formDesign.form.controlList" :key="item._id" >
              
                             <template v-for="control in item.controlList">

                                    <div :style="{border:control.border}"  v-on:mouseout="outControlPanel()"  v-on:mouseover="hoverControlPanel(control,$event,item)"  :control="control" :key="control._id" @click="openEditModel(control,$event)" class="edit-panel">
                                        <!--遮罩层-->
                                        <div class="edit-mask" ></div>
                                        <div class="edit-remove" :class="{showEditRemove:control._id===formDesign.currentEditControl._id}" >
                                            <div class="edit-btn-remove" @click="removeEditControl(control,item,$event)"> <i class="el-icon-close" ></i></div>
                                        </div>


                                        <!--文本控件-->
                                        <van-field  v-if="control.type===controlType.text"  :label="control.title"   v-model="control.vmodel"  :placeholder="control.placeholder" />

                                        <!--金额控件-->
                                        <!--<van-field  v-if="control.type===controlType.number" :label="control.title"  type="number"  v-model="control.vmodel"  :placeholder="control.placeholder" />-->

                                        <!--数字控件-->
                                        <van-field  v-if="control.type===controlType.number" :label="control.title" type="number" v-model="control.vmodel"  :placeholder="control.placeholder" />

                                        <!--多选框-->
                                        <vantPopCheckBoxGroup  v-if="control.type===controlType.checkBoxGroup" :control="control" ></vantPopCheckBoxGroup>

                                        <!--单选框-->
                                        <vantPopRadioGroupBox  v-if="control.type===controlType.radioBoxGroup" :control="control" ></vantPopRadioGroupBox>
                                
                                        <!--日期控件 年月日-时分-秒-->
                                        <vantPopDateTimePicket   v-else-if="control.type===controlType.dateAndTime" :control="control"></vantPopDateTimePicket>

                                        <!--日期控件 年-月-日-->
                                        <vantPopDateTimePicket   v-else-if="control.type===controlType.date" :control="control"></vantPopDateTimePicket>                                 
                                    
                                        <!--多文本框-->
                                        <van-field
                                        
                                            v-else-if="control.type===controlType.multiText"
                                            v-model="control.vmodel"
                                            :label="control.title"
                                            type="textarea"
                                            :placeholder="control.placeholder"
                                            rows="1"
                                            autosize
                                        />

                                        <!--附件-->
                                        <van-cell-group  v-else-if="control.type===controlType.fileUpload">
                                            <van-row>
                                                <van-cell :value="control.title" />   
                                            </van-row>
                                            <van-row>

                                                <van-cell :value="control.title" >
                                                    <van-uploader class="v-upload">
                                                        <van-icon class="v-icon" name="add-o" style="" />
                                                    </van-uploader>                                               
                                                </van-cell>

                                            </van-row>                                                
                                        </van-cell-group>                                     
                                    </div>

                                    

                             </template>
            </van-cell-group> 
                <div style="height:50px;"></div>
            </draggable>
     
            <div class="c-addControl-wrap">
                <form-control-panel @childsetedit="childsetedit" @paneldisplay="panelDisplay" :controlPanelDisplay="controlPanelDisplay" ></form-control-panel>                
                <van-button   @click="openOrCloseControlPanel" class="c-btn-addControl" type="primary" bottom-action>
                    <i class="el-icon-plus"></i> 新增控件
                </van-button>
            </div>
    </div>

</template>

<script>
    /*vant自定义组件 */
    import vantPopRadioGroupBox from '../vant/control/vantPopRadioGroupBox.vue';
    import vantPopCheckBoxGroup from '../vant/control/vantPopCheckBoxGroup.vue';
    import vantPopDateTimePicket from '../vant/control/vantPopDateTimePicket.vue';
    
    import formControlPanel from '../formControlPanel/formControlPanel';

    /*拖拽组件*/  
    import draggable from 'vuedraggable'

    /**模板工厂 */
    import templateFactory from '../model/template/templateFactory';
    import {mapActions,mapGetters} from 'vuex';

    import {controlType} from '../model/controls/controlsTypeEnum';

    /**store */
    import form from '../../../store/modules/form/formDesign';
    import formMap from '../../../store/modules/form/model/formMap';

    import each from '../../../common/each';

    export default {
        name:"formPanel",
        components:{
            vantPopRadioGroupBox,
            vantPopCheckBoxGroup,
            vantPopDateTimePicket,
            formControlPanel,
            draggable,
        },
        data(){
            return{
                formDesign:form.state.designForm,
                controlPanelDisplay:"none",
                controlType:controlType               
            }
        },
        computed:{

        },
        mounted(){               
               var vacationForm=templateFactory["vacationForm"]();
               this.changeForm(vacationForm);
        },
        methods:{
            ...mapGetters(formMap.getters),
            ...mapActions(formMap.actions),
            /*
             * 显示控件面板
             */
            openOrCloseControlPanel(){               
                this.controlPanelDisplay="block";
            },
            /**
             * 子组件方法：用于显隐控件面板
             */
            panelDisplay(val){
                this.controlPanelDisplay=val;
            },

            /**
             * 设置编辑边框
             */
            setEditBorder(fn){
                var form=this.getCurrentForm();    
                var curEdit=this.getCurrentEditControl();
                each.setAllItem(form.controlList,(obj,key)=>{
                    var curItem=obj[key];
                    this.$set(curItem,"border","");
                    each.setAllItem(curItem.controlList,(cobj,ckey)=>{
                        var curControl=cobj[ckey];
                        if(curEdit._id!=curControl._id){
                            this.$set(cobj[ckey],"border","");
                        }
                    });
                });
                if(fn!==undefined){
                    fn.call(this);
                }  
            },
            /*
            * 设置浮动边框
            */
            hoverControlPanel(control,e,item){
                this.setEditBorder(()=>{
                    this.$set(control,"border","1px dotted #007ED3");
                });
            },
            /*
            * 移出编辑框
            */
            outControlPanel(){
               this.setEditBorder(); 
            },
            /*
            * 当前选中控件进入编辑模式
            */
            openEditModel(control){ 
                this.changeEditControl(control);
                this.setEditBorder(()=>{
                    this.$set(control,"border","1px dotted #007ED3");
                });             
                console.log("edit model",control);
            },
            /*
            删除控件
            */
            removeEditControl(control,item,e){
                e.stopPropagation();
                this.removeControl({
                    item:item,
                    control:control
                });
                console.log("remove editModel",control);
            },
            /*
            * 子组件方法：把新添加的控件加入到编辑模式
            */
            childsetedit(control){
                this.openEditModel(control);
            }
        }
        
    }

        /*
        TODO:
        - .新增控件的组件接口（√）
        - .控件属性的组件接口（DO）
        - .控件拖拽排序（√）
        - .控件删除（DO）
        */
</script>

<style scoped>
.c-form-wrap{
    position: relative;
    top: 0px;
}
.c-form-item {
  margin-top: 12px;

}
.c-form-title {
  background-color: rgb(244, 67, 54);
  color: white;
}

.c-drag-panel{
    height: 560px;
    overflow-y:auto;
}

.el-icon-plus{
   
    font-weight: bold;
}

.c-addControl-wrap{
    position:absolute;
    bottom: 0px;
    width:100%;
    box-shadow: 1px 1px 3px -1px gray;
    z-index: 10;

}
.c-btn-addControl{
    background-color: #6fb1d8;
    color: white;
}


/*编辑框样式*/
.edit-panel{
    position: relative;
    top: 0px;
    left: 0px;
    cursor: pointer;
    border:1px solid white;
}
.edit-mask{
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    background-color: white;
    opacity: 0.6;
    z-index: 5;
}

.edit-action-isEdit{
    border:1px solid #007ED3;
}
.edit-action-hover{
    border:1px dotted #007ED3;
}
.edit-action-default{
    border: none;
}


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
    border: 1px dotted #E4E6E9; 
    text-align: center;
    margin-top: 20px;
    padding-top: 10px;
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

.edit-remove{
    width: 100%;
    height: 0px;
    position: absolute;
    display: none;
    top:0px;

}
.edit-btn-remove{
    width: 15px;
    height: 15px;
    background-color: #59a6e8;
    position: absolute;
    top: 0px;
    right: 0px;
    z-index:6;
    color: white;
    text-align: center;
    cursor: pointer;
  
}
.edit-remove{
    font-size: 12px;
}


.showEditRemove{
    display: block;
}




</style>