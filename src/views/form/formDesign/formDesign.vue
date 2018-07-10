<template>
<el-container>
  <el-main>
      <el-row type="flex" >
        <el-col class="f-design-panel" :span="12">
            <form-panel></form-panel>
            <form-control-panel></form-control-panel>
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
    import formPanel from '../../../components/form/formPanel';
    import formAttrPanel from '../../../components/form/formAttrPanel';
    import formControlPanel from '../../../components/form/formControlPanel';



    export default {
        name:"formDesign",
        data(){
          return{
               
          }
        },
        beforeCreate(){

        },
        mounted(){
         
        },
        components:{
            formPanel,
            formAttrPanel,
            formControlPanel
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