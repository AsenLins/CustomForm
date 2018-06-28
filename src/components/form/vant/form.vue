<template>
        <div class="c-form-wrap">
         <van-nav-bar class="c-form-title" :title="form.title"/>   
        
        <!--<form :action="form.action" :method="form.method" :enctype="form.enctype">-->

            <van-cell-group class="c-form-item" v-for="item in form.controlList" :key="item._id" >
                
                             <template v-for="control in item.controlList">
                                    <!--文本控件-->
                                    <van-field :key="control._id" v-if="control.type==='text'"  :label="control.title"   v-model="control.vmodel"  :placeholder="control.placeholder" />
                                    
                                    <!--金额控件-->
                                    <van-field :key="control._id" v-if="control.type==='money'" :label="control.title"  type="number"  v-model="control.vmodel"  :placeholder="control.placeholder" />

                                    <!--数字控件-->
                                    <van-field :key="control._id" v-if="control.type==='number'" :label="control.title" type="number" v-model="control.vmodel"  :placeholder="control.placeholder" />

                                    <!--多选框-->
                                    <vantPopCheckBoxGroup :key="control._id" v-if="control.type==='checkBoxGroup'" :control="control" ></vantPopCheckBoxGroup>

                                     <!--单选框-->
                                    <vantPopRadioGroupBox :key="control._id" v-if="control.type==='radioBoxGroup'" :control="control" ></vantPopRadioGroupBox>

                                
                                    <!--日期控件 年月日-时分-秒-->
                                    <vantPopDateTimePicket :key="control._id"  v-else-if="control.type==='dateAndTime'" :control="control"></vantPopDateTimePicket>

                                     <!--日期控件 年-月-日-->
                                    <vantPopDateTimePicket :key="control._id"  v-else-if="control.type==='date'" :control="control"></vantPopDateTimePicket>                                 
                                
                                     <!--多文本框-->
                                    <van-field
                                    :key="control._id"
                                        v-else-if="control.type==='multiText'"
                                        v-model="control.vmodel"
                                        :label="control.title"
                                        type="textarea"
                                        :placeholder="control.placeholder"
                                        rows="1"
                                        autosize
                                    />

                                    <!--附件-->
                                    <van-cell-group  :key="control._id" v-else-if="control.type==='fileUpload'">
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
                             </template>
            </van-cell-group>




        <!--</form>-->

        <van-cell-group>
            <van-cell>
                    <van-button type="primary " bottom-action>提交申请</van-button>
            </van-cell>
        </van-cell-group> 

    </div>
</template>

<script>

/*vant自定义组件 */
import vantPopRadioGroupBox from './control/vantPopRadioGroupBox.vue';
import vantPopCheckBoxGroup from './control/vantPopCheckBoxGroup.vue';
import vantPopDateTimePicket from './control/vantPopDateTimePicket.vue';


export default {
        name: "vantUIForm",
        components:{
            vantPopRadioGroupBox,
            vantPopCheckBoxGroup,
            vantPopDateTimePicket
        },
        data() {
            return {
            show2: false,
            testCheck: true,
            testVal: ["sam"],
            po:function(){
                console.log("pc");
            }
            };
        },
        props: {
            form: Object
        },
        mounted: function() {
            console.log("===========mounted beigin=============");
            console.log("data", this);
        },
        created() {
            console.log("============created finish===========");
            console.log("data", this);
        },
        methods: {     

        }
};
</script>

<style scoped>
body {
  background-color: #e9eaeb;
}

.c-form-title {
  background-color: rgb(244, 67, 54);
  color: white;
}
.c-form-item {
  margin-top: 12px;
}

.v-upload {
  border: 1px solid #dfdfdf;
  padding: 10px;
  padding-top: 8px;
  border-radius: 4px;
  padding-bottom: 3px;
}
.v-icon {
  color: #dfdfdf;
  font-size: 20px;
  margin-top: 2px;
}
</style>