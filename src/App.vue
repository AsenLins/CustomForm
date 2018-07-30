
<template>
  <div id="app">
  
    <router-view/>
     <!--全局弹出框-->
     <keep-alive>
      <el-button plain>
      </el-button>
     </keep-alive>
     <login ref="login"></login>
  </div>
</template>

<script>
import login from './components/login/login';
import storage from './common/storage';
import apiEnum from './api/apiModel/index';
import formDesignApi from './api/formDesignApi';
import formRuleApi from './api/formRuleApi';
import formDataApi from './api/formDataApi';
import uuid from 'uuid/v1';
export default {
  components:{
    login
  },
  beforeMount(){

  },
  mounted(){
    /** 
     * 设置请求全局Token验证
    */
    this.$http.interceptors.request.use((config)=>{
        var token=storage.getItem("token");
        if(token!==undefined&&token!==""){
           config.headers.Authorization=token;
        }
        return config;
    });
    
    /**
     * 全局监听登录验证
     */
    this.$http.interceptors.response.use((data)=>{
        var apiModel=data.data;
        /*登录失败或登录过期,则重新登录*/
        if(apiModel.MesType===apiEnum.apiMesType.Authorize&&apiModel.Status===apiEnum.apiStatus.Fail){
           this.$refs.login.parentShowLogin();
        }
        return data;
    },(error)=>{
       /*过期则重新登录 */
       if(error.toString().indexOf("403")>-1){
         this.$refs.login.parentShowLogin();
       }
    });


    formDataApi.GetFormDataList({
      pageIndex:1,
      pageSize:6
    }).then(result=>{
      console.log("获取数据列表",result);
    })

    formDataApi.GetFormData({
      id:"2498dbf4-0ef7-4bb1-9077-cbcb4c017c49"
    }).then(result=>{
      console.log("获取单条数据详细",result);
    });



    /*
    formRuleApi.GetRuleByFormId({
      id:"3591bb61-9d61-47fe-9ad5-8c3451180d37"
    }).then(result=>{
      console.log("获取单个FormRule",result);
    });

    formRuleApi.UpdateFormRule({
      id:"d0826aaa-ed9e-4192-b3ae-15d6217c4f91",
      formRuleObj:"this is formRule obj2222",
      formId:"713adcdc-2b29-43dd-85a2-a92562c4d06c"
    }).then(result=>{
      console.log("更新单个表单FormRule",result);
    });
    */

    /*
    formDesignApi.AddForm({
      form:{
        id:uuid(),
        designObj:JSON.stringify({name:"asen",age:123,ary:[{sonname:"son",sonage:10}]}),
        enable:true,
        formName:"这是一个测试表单！",
        icon:"icfont test"
      },
      formRule:{
        formRuleObj:JSON.stringify({ruleName:"123",ruleStart:10})
      }
    }).then((result)=>{
      console.log(result);
    });

    formDesignApi.GetFormDesignPageList({
      pageIndex:1,
      pageSize:4
    }).then((result)=>{
      console.log("获取列表",result);
    });

    formDesignApi.UpdateForm({
      id:"86f68738-6896-49ff-b948-1f8b567becde",
      designObj:"443",
      formName:"coolForm",
      enable:false
    }).then((result)=>{
      console.log("修改列表",result);
    });

    formDesignApi.RemoveForm({
      id:"86f68738-6896-49ff-b948-1f8b567becde"
    }).then((result)=>{
      console.log("删除的列表",result);
    })
    */


  },
  name: 'App'
}

</script>
<style>
 #app{
   height: 100%;
 }
 body,html{
   height: 100%;
   background-color: #ececec;
 }
</style>


