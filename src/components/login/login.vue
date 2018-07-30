<template>
    <el-dialog
 
    :visible.sync="loginShow"
    width="30%"
    :lock-scroll="false"
    :show-close="false"
    :close-on-press-escape="false"
    :close-on-click-modal="false"
    center>
    <el-row>
      <el-row type="flex" justify="center">
        <el-col class="login-logo" :span="24">
            <img  src="../../assets/中原地產_LOGO-02.png"/>
        </el-col>
      </el-row>
      <el-row  type="flex" justify="center">
        <el-col :span="18">
            <el-form :model="user" status-icon   label-width="60px" >
                <el-form-item class="login-input" label="用户名:">
                    <el-input  prefix-icon="icon iconfont icon-denglu-copy" v-model="user.account"></el-input>
                </el-form-item>

                <el-form-item  class="login-input" label="密码:" >
                    <el-input prefix-icon="testclass icon iconfont icon-denglushimima" type="password" v-model="user.pwd" auto-complete="off"></el-input>
                </el-form-item>
            </el-form>
            <el-form  label-width="120px" >

                <el-form-item label="一周内保持登录:" >
                    <el-checkbox  v-model="user.longLogin" ></el-checkbox>
                </el-form-item> 
            </el-form>
        </el-col>
      </el-row>

    </el-row>

    <span slot="footer" class="login-footer">
        <el-button  type="primary" class="login-btn" icon="btn-icon icon iconfont icon-denglu" :loading="loading"  @click="login"> 登 录</el-button>
    </span>
    </el-dialog>

</template>

<script>
    import apiEnum from '../../api/apiModel/index';
    import authorizeApi from '../../api/authorizeApi';
    import storage from '../../common/storage';
    import qs from 'qs';
  
    export default {
        name:"login",
        data(){
            return{
                loginShow:false,
                loading:false,
                user:{
                    account:"",
                    pwd:"",
                    longLogin:true,
                }
            }
        },
        methods:{
            login(){
                this.loading=true;
                authorizeApi.MangerLogin({
                    account:this.user.account,
                    pwd:this.user.pwd
                })
                .then((data)=>{
                    var apiModel=data.data;
                    console.log(data);
                    if(apiModel.Status===apiEnum.apiStatus.Success){
                         this.mix_g_showMessage(apiModel.Mes,"success");
                         this.loginShow=false;                         
                         storage.setItem("token",apiModel.Data.Token);
                    }else{
                         this.mix_g_showMessage(apiModel.Mes,"warning");
                    }
                    this.loading=false;
                    
                },(error)=>{
                     this.mix_g_showMessage(apiModel.Mes,"error");
                     this.loading=false;
                })         
            },
            parentShowLogin(){
                this.loginShow=true;
            }
        }
        
    }
</script>

<style scoped>
.login-logo{
    text-align: center;
    margin-bottom: 40px;
}
.login-logo img{
    max-width: 180px;
}
.login-footer{
    margin-top:0px;
}
.iconfont{
    margin-left: 12px!important;
}
.btn-icon{

    margin-right: 10px;
}
</style>