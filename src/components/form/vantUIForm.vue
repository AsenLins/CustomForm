<template>
        <div class="c-form-wrap">
         <van-nav-bar class="c-form-title" :title="form.title"/>   
        
        <form :action="form.action" :method="form.method" :enctype="form.enctype">

            <van-cell-group class="c-form-item" v-for="item in form.constrolList" :key="item._id" >
                
                             <template v-for="control in item.constrolList">
                                    <!--文本控件-->


                                    <!--日期控件-->
                                     <van-row  :key="control._id" v-if="control.type==='dateAndTime'">
                                        <van-cell  :title="control.title" :value="control.placeholder" is-link />
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
                                        v-if="control.type==='multiText'"
                                        v-model="control.vmodel"
                                        :label="control.title"
                                        type="textarea"
                                        :placeholder="control.placeholder"
                                        rows="1"
                                        autosize
                                    />

                                    <!--附件-->
                                    <van-cell-group  :key="control._id" v-if="control.type==='fileUpload'">
                                        <van-row>
                                              <van-cell :value="control.title" />   
                                        </van-row>
                                        <van-row>

                                            <van-cell :value="control.title" >
                                                <van-uploader style="border:1px solid #dfdfdf; padding:10px; padding-top:8px; border-radius:4px; padding-bottom:3px;">
                                                    <van-icon name="add-o" style="color:#dfdfdf;font-size:20px;margin-top:2px;" />
                                                </van-uploader>                                               
                                            </van-cell>

                                            <!--
                                            <van-cell :value="control.title" >
                                                <van-uploader style="border:1px solid #dfdfdf; padding:10px; padding-top:8px; border-radius:4px; padding-bottom:3px;" :after-read="onRead">
                                                    <van-icon name="add-o" style="color:#dfdfdf;font-size:20px;margin-top:2px;" />
                                                </van-uploader>                                               
                                            </van-cell>
                                            -->  
                                        </van-row>
                                            
                                    </van-cell-group>
                             </template>
            </van-cell-group>



        </form>

        <van-cell-group>
            <van-cell>
                    <van-button type="primary " bottom-action>提交申请</van-button>
            </van-cell>
        </van-cell-group> 
        <!--
        <van-cell-group class="c-form-item">
            <van-field v-model="value" placeholder="请输入用户名" />
            <van-field v-model="value" placeholder="请输入用户名" />
            <van-field v-model="value" placeholder="请输入用户名" />
        </van-cell-group>

        <van-cell-group class="c-form-item">
            <van-field v-model="value" placeholder="请输入用户名" />
        </van-cell-group>
        -->
    </div>
</template>

<script>
    /*
    import {templateFactory} from "./model/template/templateFactory";
    
    console.log("overTimeForm",templateFactory["overTimeForm"]());
    console.log("vacationForm",templateFactory["vacationForm"]());
    console.log("travelExpensesForm",templateFactory["travelExpensesForm"]());
    console.log("testForm",templateFactory["testForm"]());
    */
    //import {Base} from './model/base/base'
    //console.log("Base",Base);

    //import {Form} from './model/container/form'

    /*
    import Form from './model/container/form';
    console.log("from",Form);
    import {OverTimeForm} from "./model/template/OverTimeForm"
    */
 


   
    //import OverTimeForm from './model/template/OverTimeForm.js'

    export default {
        name:"vantUIForm",
        text:"444",
        data(){

        },

        props: {
            form: Object,
            text: String
        },

        mounted:function(){
            console.log("===========mounted beigin=============");
            console.log("data",this);
            
            

        },
        created(){
            console.log("============created finish===========");
            console.log("data",this);

        }
    }
</script>

<style scoped>
    body{
        background-color: #e9eaeb;
    }

    .c-form-title{
        background-color: rgb(244, 67, 54);
        color: white;
    }
    .c-form-item{
        margin-top: 12px;
    }
</style>