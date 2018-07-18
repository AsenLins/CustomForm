<template>
<el-container>
  <el-main>

    

      <el-row type="flex" >
        
        <el-col class="f-design-panel" :span="12">
            <form-panel @childVerify="childVerify"></form-panel>
           
        </el-col>
        <el-col :offset="1" :span="11">
            <form-attr-panel ref="formAttrPanel"></form-attr-panel>
        </el-col>
      </el-row>
      
      <el-row class="submit-wrap" type="flex" justify="center">
      
        <el-col class="submit-line" :span="24">
            <el-button  @click="saveForm()"  type="primary">保存</el-button>
        </el-col>
      </el-row>
  
  </el-main>
</el-container>
</template>

<script>
    /**组件 */
    import formPanel from '../../../components/form/formPanel/formPanel';
    import formAttrPanel from '../../../components/form/formAttrPanel/formAttrPanel';
    import { mapActions, mapGetters } from 'vuex';
    import formMap from '../../../store/modules/form/model/formMap';   

    export default {
        name:"formDesign",
        components:{
            formPanel,
            formAttrPanel
        },
        data(){
          return{
             formVerify:{}
          }
        },
        mounted(){
             //this.formVerify=this.getFormVerify();     
        },
    
        methods:{
            ...mapActions(formMap.actions),
            ...mapGetters(formMap.getters),
            /** 
             * 保存表单
            */
            saveForm(){
                //console.log("valort",this.$validator);
                this.$refs.formAttrPanel.parentVerify().then((result)=>{
                    console.log("验证结果",result);
                });
                /*
                if(this.formVerify.$invalid){
                    console.log("验证不通过");
                }
                console.log("touch",this.formVerify.$touch);
            
                console.log("$params",this.formVerify.formDesign.form.$each);
                console.log("$iter",this.formVerify.$iter);
                console.log("$each",this.formVerify.$each);
                console.log("$v",this.formVerify);
                console.log("objSave");
                */
            },
            /*
            * 子组件的方法验证
            */
            childVerify(){
                setTimeout(() => {
                 this.$refs.formAttrPanel.parentVerify();                       
                }, 50);

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