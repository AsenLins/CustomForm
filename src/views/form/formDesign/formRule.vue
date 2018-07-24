<template>
    <div>
        <el-form class="c-rule-form" label-position="left" label-width="96px">
            <el-form-item class="c-rule-item" label="可见范围">
                <el-button @click="showAndInitVisibleUser()" size="mini" icon="el-icon-circle-plus" type="info" plain="plain">选择可见范围</el-button>
            </el-form-item>
            <el-form-item class="c-rule-item" label="审批流程"></el-form-item>
            <el-form-item class="c-rule-item noborder c-rule-approval" label="默认审批人">
                <!-- 
                approver
                send
                -->
                <div v-for="(apUser,index) in formRule.approver.approverList" :key="index"  class="c-approval-wrap">
                    <div class="c-approval-item">
                        <div class="c-approval-img"><img :src="apUser.approverPeople.avatar" /></div>
                        <div class="c-approval-title">{{apUser.approverPeople.name}}</div>
                    </div>
                    <div v-if="formRule.approver.approverList.length>1&&index!=(formRule.approver.approverList.length-1)" class="c-approval-conect">
                        <i class="icon iconfont icon-diandiandian" ></i>
                    </div>
                </div>

                <div @click="showAndInitApprover()" class="c-btn-add" :class="{'c-btn-more':formRule.approver.approverList.length>0}" >
                    <i class="el-icon-plus"></i>
                </div>

            </el-form-item>
            <el-form-item class="c-rule-item" label="默认抄送人">
                <div @click="showAndInitSend()" class="c-btn-add">
                    <i class="el-icon-plus"></i>
                </div>
            </el-form-item>
            <el-form-item class="c-rule-item" label="抄送通知">
                <el-radio-group class="c-rule-send"  v-model="formRule.sendConfig">
                        <div><el-radio label="submit">提交申请时抄送</el-radio></div>
                        <div><el-radio label="approval">审批通过后抄送</el-radio></div>
                        <div><el-radio label="all">提交申请时和审批通过后都抄送</el-radio></div>                 
                </el-radio-group>
            </el-form-item>

        </el-form>
        <el-row type="flex" justify="center">
            <el-button  type="primary">保存</el-button>
        </el-row>

        <!--可见范围Dialog-->
        <el-dialog width="40%" :open="formVisibleUserPanelOpen()"  title="可见范围" :visible.sync="formVisibleUserPanelDisplay">
            <form-contact-panel selectType="all" class="c-contactPanel"  v-if="formVisibleUserPanelDisplay" ref="formContactPanel"></form-contact-panel>
            <div slot="footer" class="dialog-footer">
                    <el-button @click="formVisibleUserPanelDisplay=false">取 消</el-button>
                    <el-button type="primary" @click="saveVisibleUser()">确认选择</el-button>
            </div>          
        </el-dialog>

        <!--审批人员Dialog-->
        <el-dialog width="40%" :open="formVisibleUserPanelOpen()"  title="选择审批人" :visible.sync="formApproverPanelDisplay">
            <el-radio-group class="c-rule-send" v-model="formRuleHelper.cacheApprover.approverType">
                    <div><el-radio label="boss">上级</el-radio></div>
                    <div><el-radio label="single">单个成员</el-radio></div>                
            </el-radio-group>
            <div class="c-sign-way" v-if="formRuleHelper.cacheApprover.approverType==='boss'">
                <div class="c-sign-tip">请选择上级的审批方式</div>
                <el-radio-group class="c-rule-send " v-model="formRuleHelper.cacheApprover.approverWay">
                        <div><el-radio label="all">会签</el-radio></div>
                        <div><el-radio label="single">或签</el-radio></div>                
                </el-radio-group>
            </div>
            <div class="c-sign-contact" v-if="formRuleHelper.cacheApprover.approverType==='single'">
                <form-contact-panel selectType="onlyUser" class="c-contactPanel" ref="formContactPanel"></form-contact-panel>
            </div>
            <div slot="footer" class="dialog-footer">
                    <el-button @click="formApproverPanelDisplay=false">取 消</el-button>
                    <el-button type="primary" @click="saveApprover()">确认选择</el-button>
            </div>          
        </el-dialog>

        <!--抄送人员Dialog-->
        <el-dialog width="40%" :open="formVisibleUserPanelOpen()"  title="选择抄送人" :visible.sync="formSendPanelDisplay">
            <el-radio-group class="c-rule-send" v-model="formRuleHelper.cacheSend.sendType">
                    <div><el-radio label="boss">上级</el-radio></div>
                    <div><el-radio label="single">单个成员</el-radio></div>                
            </el-radio-group>
            <div class="c-sign-contact" v-if="formRuleHelper.cacheSend.sendType==='single'">
                <form-contact-panel selectType="onlyUser" class="c-contactPanel" ref="formContactPanel"></form-contact-panel>
            </div>
            <div slot="footer" class="dialog-footer">
                    <el-button @click="formSendPanelDisplay=false">取 消</el-button>
                    <el-button type="primary" @click="saveSend()">确认选择</el-button>
            </div>          
        </el-dialog>

        
        
    </div>
</template>

<script>
    /**
     * 2017-7-24 TODO
     * 可见范围的用户列表和部门读取，删除
     * 默认审批的人用户列表读取，删除
     * 抄送人的用户列表读取，删除
     * 
     * 联系人弹出宽的用户和部门读取
     * 
     * 读取表单规则源对象。
     * 设置表单规则对象。
     * 
     * 验证表单规则对象，可见范围不能为空。
     */



    import formContactPanel from '../../../components/formRule/formContactPanel/formContactPanel';
    import formRuleMap from '../../../store/modules/formRule/formRuleMap';
    import {mapActions,mapGetters} from 'vuex';
    export default {
        components:{
            formContactPanel
        },
        name: "formRule",
        data(){
            return{
                send:"提交申请时抄送",
                displayContact:false,
                formVisibleUserPanelDisplay:false,
                formApproverPanelDisplay:false, 
                formSendPanelDisplay:false,
                formRule:{},
                formRuleHelper:{}
            }
        },
        beforeMount(){
            this.formRule=this.getFormRule();
            this.formRuleHelper=this.getFormRuleHelper();
            console.debug("【formRule】",this.formRule);
        },
        computed:{

        },
        methods:{
            ...mapActions(formRuleMap.actions),
            ...mapGetters(formRuleMap.getters),
            delayRefs(fn){
                setTimeout(() => {
                    fn.call(this);
                }, 50);
            },
            getFirstUser(obj){
                for(var key in obj){
                    //console.log(obj[key]);
                    return obj[key]
                }
            },
            formVisibleUserPanelOpen(){
                this.delayRefs(()=>{
                    if(this.$refs.formContactPanel===undefined){
                        return;
                    }

                    this.$refs.formContactPanel.onMessage("getMessages",(postMes)=>{
                        var cacheSelect=this.formRuleHelper.cacheSelect;
                        this.setCacheSelect(postMes.data);
                    });
                });
            },
            showAndInitVisibleUser(){
                this.formVisibleUserPanelDisplay=true;
            },
            showAndInitApprover(){
                this.resetCacheAll();
                this.formApproverPanelDisplay=true;
            },
            showAndInitSend(){
                this.resetCacheAll();
                this.formSendPanelDisplay=true;
            },
            saveVisibleUser(){
                var cacheSelect=this.formRuleHelper.cacheSelect;
                var chioseUser=this.getFirstUser(cacheSelect.users);
                var chioseDepartMent=this.getFirstUser(cacheSelect.department);
                if(chioseUser===undefined&&chioseDepartMent===undefined){
                        this.mix_g_message({
                            mes:"请选择一个成员或部门",
                            type:"warning"
                        });
                        return;                     
                }
                this.setVisibleUser({
                        users:cacheSelect.users,
                        department:cacheSelect.department
                });
                this.formVisibleUserPanelDisplay=false;
                console.log("保存后的可见对象",this.formRule);
            },
            saveApprover(){
                var users=this.formRuleHelper.cacheSelect.users;
                var cacheApprover=this.formRuleHelper.cacheApprover;
                var chiose=this.getFirstUser(users);
                if(cacheApprover.approverType==="single"&&chiose===undefined){
                        this.mix_g_message({
                            mes:"请选择一个成员",
                            type:"warning"
                        });
                        return;                       
                }
                this.setSingleApprover({
                    approverType:cacheApprover.approverType,
                    approverWay:cacheApprover.approverWay,
                    approverPeople:chiose 
                });
                this.formApproverPanelDisplay=false;
                console.log("保存后的审批对象",this.formRule);
            },
            saveSend(){
                var users=this.formRuleHelper.cacheSelect.users;
                var cacheSend=this.formRuleHelper.cacheSend;
                var chiose=this.getFirstUser(users);
                if(cacheSend.sendType==="single"&&chiose===undefined){
                        this.mix_g_message({
                            mes:"请选择一个成员",
                            type:"warning"
                        });
                        return;                       
                }
                this.setSingleSend({
                    sendType: cacheSend.sendType,
                    sendPeople: chiose                 
                });
                this.formSendPanelDisplay=false;
                console.log("保存后的抄送对象",this.formRule);
            },
            testOpen(){
                //console.log("open",this.$refs);

            },
            addApprove(){
                
            }
        }
    }
</script>

<style scoped="scoped">
    .c-rule-form {
        }
    .c-rule-item {
        padding-left: 20px;
        padding-bottom: 15px;
        border-bottom: 1px solid #dcdcdc;
        color: #787878;
    }
    .noborder {
        border: 0;
    }
    .c-rule-send>div{
        margin-bottom: 14px;
    }
    .c-contactPanel{
        height: 460px;
    }

    .c-sign-way,.c-sign-contact{
        margin-top: 15px;
        padding-top: 20px;
        border-top:1px solid #eeeeee;
    }
    .c-sign-tip{
        margin-bottom: 20px;
    }
    /**审批栏**/
    .c-approval-wrap{
        display: inline-block;
        vertical-align: top;
    }
    .c-btn-add{
        display: inline-block;
        padding: 10px;
        padding-top: 1px;
        padding-bottom: 1px;
        font-size: 24px;
        font-weight: bold;
        border: 1px solid #d6d6d6;
        border-radius: 6px;
        cursor: pointer;
    }
    .c-btn-more{
        margin-left: 15px;
    }

    .c-rule-approval{
        margin-bottom: 20px;
    }
    .c-approval-item{
        display: inline-block;
        width: 50px;
        height: 80px;
        vertical-align: top;
        cursor: move;
        line-height: 0px;
        text-align: center;
    }
    .c-approval-img{

    }
    .c-approval-title{
        width: 100%;
        height:30px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        display: inline-block;
        line-height: 24px;
    }
    .c-approval-img img{
        width: 46px;
        height: 44px;
        border-radius: 6px;
    }
    .c-approval-conect{
        display: inline-block;
        vertical-align: top;
    }
    .c-approval-conect{
        padding-top:4px;
    }

    /**审批栏End**/


    .c-btn-add i{
        color: #d6d6d6;
    }


    
</style>