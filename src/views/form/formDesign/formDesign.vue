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
            <el-button  @click="saveForm()" :loading="submitButton.loading"  type="primary">{{submitButton.text}}</el-button>
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
             formVerify:{},
             submitButton:{
                loading:false,
                text:"提交"
             }             
          }
        },
        methods:{
            ...mapActions(formMap.actions),
            ...mapGetters(formMap.getters),
            /** 
             * 保存表单
            */
            submitBtnChangeStatus(option){
                this.submitButton.loading=option.status;
                this.submitButton.text=option.text;              
            },
            saveForm(){
                /*
                this.submitBtnChangeStatus({
                    status:true,
                    text:"加载中"
                });
                */
                this.$refs.formAttrPanel.parentVerify().then((result)=>{
                    if(result){
                        this.mix_g_notice({
                            mes:"保存成功",
                            type:"success"
                         });
                        var form=this.getOriginForm();
                        console.log("保存的表单是",form);
                    }else{
                         this.mix_g_notice({
                            mes:"表单模板格式不正确,请修改后再试。",
                            type:"warning"
                         });                       
                    }
                    console.log("验证结果",result);
                });

            },
            /*
            * 子组件的方法验证
            */
            childVerify(fn){
       
                
                setTimeout(() => {
                 this.$refs.formAttrPanel.parentVerify().then((result)=>{
                     fn.call(this,result);
                 });                       
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