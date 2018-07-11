<template>
<el-container>
  <el-main>
      <el-row type="flex" >
        <el-col class="f-design-panel" :span="12">
            <form-panel></form-panel>
           
        </el-col>
        <el-col :span="12">
            <form-attr-panel></form-attr-panel>
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


</style>