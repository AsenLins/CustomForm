<template>
        <div class="c-form-wrap">
            3333333434234234234234234

        <van-nav-bar class="c-form-title" title="标题"/>   
        <form :action="form.action" :method="form.method" :enctype="form.enctype">
            <van-cell-group class="c-form-item" v-for="item in form.constrolList" :key="item._id" >
                
            </van-cell-group>
        </form>



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

    import {templateFactory} from "./model/template/templateFactory";
    console.log("overTimeForm",templateFactory["overTimeForm"]());
    console.log("vacationForm",templateFactory["vacationForm"]());
    console.log("travelExpensesForm",templateFactory["travelExpensesForm"]());
    

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
        name:"customform",
        data(){
            return{
                form:templateFactory["overTimeForm"]() 
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