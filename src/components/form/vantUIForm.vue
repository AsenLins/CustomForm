<template>
        <div class="c-form-wrap">
         <van-nav-bar class="c-form-title" :title="title"/>   
        
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
                                     <van-row  :key="control._id" v-else-if="control.type==='checkBoxGroup'">
                                         <van-cell v-on:click="show(control)" :title="control.title" :value="control.placeholder" is-link />
                                         <van-actionsheet v-model="control.show" :title="control.title">
                                            <van-checkbox-group @change="GroupItemSelect(control)" v-model="control.vmodel">
                                                
                                                <van-cell-group>
                                                    <van-cell v-for="checkbox in control.controlList" :title="checkbox.keyName" :key="checkbox._id">
                                                         <van-checkbox :name="checkbox.keyName" />
                                                    </van-cell>
                                                </van-cell-group>
                                         
                                                    <van-cell>
                                                        <van-button  @click="closeGroupItem(control)"  type="primary" bottom-action>确认</van-button>  
                                                    </van-cell>                                             
                                                </van-checkbox-group>
                                        </van-actionsheet>                                         
                                     </van-row>

                                     <!--单选框-->
                                     <van-row  :key="control._id" v-else-if="control.type==='radioBoxGroup'">
                                        <van-cell v-on:click="show(control)" :title="control.title" :value="control.placeholder" is-link />
                                            <van-actionsheet v-model="control.show" :title="control.title">
                                                <van-radio-group v-model="control.vmodel">
                                                    <van-cell-group>
                                                        <van-cell v-for="radiobox in control.controlList" :title="radiobox.keyName" clickable :key="radiobox._id">
                                                             <van-radio :name="radiobox.keyName" />
                                                        </van-cell>
                                                    </van-cell-group>
                                                </van-radio-group>  
                                                <van-cell>
                                                    <van-button @click="closeGroupItem(control)" type="primary" bottom-action>确认</van-button>  
                                                </van-cell>                                             
                                            </van-actionsheet>
                                     </van-row>
                                
                                    <!--日期控件 年月日-时分-秒-->
                                     <van-row  :key="control._id" v-else-if="control.type==='dateAndTime'">
                                        <van-cell @click="show(control)"  :title="control.title" :value="control.placeholder" is-link />
                                        <van-actionsheet v-model="control.show" :title="control.title">
                                            <van-datetime-picker
                                                v-model="control.vmodel"
                                                type="datetime"
                                            />
                                        </van-actionsheet>                                        
                                     </van-row>

                                     <!--日期控件 年-月-日-->
                                       <van-row  :key="control._id" v-else-if="control.type==='date'">
                                        <van-cell  @click="show(control,po)" :title="control.title" :value="control.placeholder" is-link />
                                        <van-actionsheet v-model="control.show" :title="control.title">
                                            <van-datetime-picker
                                                v-model="control.vmodel"
                                                type="date"
                                            />                                       
                                        </van-actionsheet>  
                                     </van-row>                                   
                                
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

import {actionSheet} from './formAction/actionSheet';


export default {
        name: "vantUIForm",

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
            form: Object,
            title: String
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
            show:function(control,fn) {
                control.show = true;
                if(fn!==undefined){
                    console.log("this is mehotd");
                    fn.call(this);
                }
            },
            hide:function(control){

            },
            setVal:function(){

            },

            GroupItemSelect: function(control) {
                console.log("你的复中的是：", control.vmodel.join(","));
            },
            closeGroupItem:function(control){
                control.show=false;
            }
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