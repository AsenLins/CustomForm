<template>
    <div class="c-form-wrap">
        <van-nav-bar class="c-form-title" title="标题"/>      
        <van-cell-group class="c-form-item">
            <van-field v-model="value" placeholder="请输入用户名" />
            <van-field v-model="value" placeholder="请输入用户名" />
            <van-field v-model="value" placeholder="请输入用户名" />
        </van-cell-group>

        <van-cell-group class="c-form-item">
            <van-field v-model="value" placeholder="请输入用户名" />
        </van-cell-group>
    </div>
</template>

<script>

    import {OverTimeForm} from "./model/template/overTimeForm";
    console.log(new OverTimeForm());
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
        data(){
            return{
                options: [
                    '公章', '合同章'
                ],
                form: {
                    input: '',
                    select: '',
                    date: '',
                    radio: '',
                    checkbox: [],
                    switch: false,
                    slider: 30,
                    textarea: ''
                }
            }
        },
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