<template>
        <div class="c-form-wrap">
   
         <van-nav-bar class="c-form-title" :title="form.title"/>  
            <draggable v-model="form.controlList" :options="{group:'control'}" @start="drag=true" @end="drag=false"> 
            <van-cell-group  style="  position: relative; top:0px;" class="c-form-item" v-for="item in form.controlList" :key="item._id" >
              
                             <template v-for="control in item.controlList">
                                   
                                    <edit-panel :control="control" :key="control._id">
                                        <!--文本控件-->
                                        <van-field  v-if="control.type==='text'"  :label="control.title"   v-model="control.vmodel"  :placeholder="control.placeholder" />

                                        <!--金额控件-->
                                        <van-field  v-if="control.type==='money'" :label="control.title"  type="number"  v-model="control.vmodel"  :placeholder="control.placeholder" />

                                        <!--数字控件-->
                                        <van-field  v-if="control.type==='number'" :label="control.title" type="number" v-model="control.vmodel"  :placeholder="control.placeholder" />

                                        <!--多选框-->
                                        <vantPopCheckBoxGroup  v-if="control.type==='checkBoxGroup'" :control="control" ></vantPopCheckBoxGroup>

                                        <!--单选框-->
                                        <vantPopRadioGroupBox  v-if="control.type==='radioBoxGroup'" :control="control" ></vantPopRadioGroupBox>
                                
                                        <!--日期控件 年月日-时分-秒-->
                                        <vantPopDateTimePicket   v-else-if="control.type==='dateAndTime'" :control="control"></vantPopDateTimePicket>

                                        <!--日期控件 年-月-日-->
                                        <vantPopDateTimePicket   v-else-if="control.type==='date'" :control="control"></vantPopDateTimePicket>                                 
                                    
                                        <!--多文本框-->
                                        <van-field
                                        
                                            v-else-if="control.type==='multiText'"
                                            v-model="control.vmodel"
                                            :label="control.title"
                                            type="textarea"
                                            :placeholder="control.placeholder"
                                            rows="1"
                                            autosize
                                        />

                                        <!--附件-->
                                        <van-cell-group  v-else-if="control.type==='fileUpload'">
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

                                    </edit-panel>

                                    

                             </template>
            </van-cell-group> 
            </draggable>



    </div>
</template>

<script>
    /*vant自定义组件 */
    import vantPopRadioGroupBox from '../vant/control/vantPopRadioGroupBox.vue';
    import vantPopCheckBoxGroup from '../vant/control/vantPopCheckBoxGroup.vue';
    import vantPopDateTimePicket from '../vant/control/vantPopDateTimePicket.vue';
    /*拖拽组件*/  
    import draggable from 'vuedraggable'
    /*面板设计组件 */
    import editPanel from './control/editPanel.vue';
    console.log(editPanel);
    export default {
        name:"formPanel",
        components:{
            vantPopRadioGroupBox,
            vantPopCheckBoxGroup,
            vantPopDateTimePicket,
            draggable,
            editPanel
        },
        data(){
        },
        props:{
            form:Object
        }

        

        /*
        TODO:
        - .新增控件的组件接口
        - .控件属性的组件接口
        - .控件拖拽排序(√)
        
        */
    }
</script>

<style scoped>
.c-form-item {
  margin-top: 12px;

}
.c-form-title {
  background-color: rgb(244, 67, 54);
  color: white;
}

</style>