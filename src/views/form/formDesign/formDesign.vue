<template>
<el-container>
  <el-main>
      <el-row type="flex" >
        <el-col class="f-design-panel" :span="12">
            <form-panel></form-panel>
           
        </el-col>
        <el-col :offset="1" :span="11">
            <form-attr-panel></form-attr-panel>
        </el-col>
      </el-row>
      
      <el-row class="submit-wrap" type="flex" justify="center">
      
        <el-col class="submit-line" :span="24">
            <el-button  @click="createFormObj()"  type="primary">保存</el-button>
        </el-col>
      </el-row>
  </el-main>
</el-container>
</template>

<script>
    /**组件 */
    import formPanel from '../../../components/form/formPanel/formPanel';
    import formAttrPanel from '../../../components/form/formAttrPanel/formAttrPanel';

    export default {
        name:"formDesign",
        components:{
            formPanel,
            formAttrPanel
        },
        data(){
          return{
               
          }
        },
        beforeCreate(){

        },
        mounted(){
         
        },
        methods:{
            createFormObj(){
                console.log("create from Obj");
            }
        }

    }
</script>

<style scoped>


.f-design-panel{
    width: 350px;
    height: 600px;
    background-color: #f5f5f5;
    border-radius: 5px;
    box-shadow: 1px 1px 19px -4px gray;
}
.submit-line{
    border-top:2px solid #e4e7ed;
    padding-top: 16px;
}
.submit-wrap{
    text-align: center;
    margin-top: 40px;
}
</style>