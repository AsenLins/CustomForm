<template>
    <div>
        <el-form class="c-rule-form" label-position="left" label-width="96px">
            <!--可见范围-->
            <el-form-item class="c-rule-item" label="可见范围">

                <el-button :key="visable.userId" v-for="visable in formRuleDesign.formRule.visibleUser.users" class="c-visable-item" type="default" size="mini" icon="icon iconfont icon-touxiang"  plain="plain" disabled >
                    {{visable.name}}
                </el-button>

                <el-button :key="visable.userId" v-for="visable in formRuleDesign.formRule.visibleUser.department" class="c-visable-item" type="default" size="mini" icon="icon iconfont icon-bumen"  plain="plain" disabled >
                    {{visable.name}}
                </el-button>

                <el-button class="c-btn-selectVisable" @click="showAndInitVisibleUser()" size="mini" icon="el-icon-circle-plus" type="info" plain="plain">修改可见范围</el-button>
            </el-form-item>
            <!--审批流程-->
            <el-form-item class="c-rule-item" label="审批流程"></el-form-item>
            <el-form-item class="c-rule-item noborder c-rule-approval" label="默认审批人">
                <draggable class="c-rule-drag" v-model="formRuleDesign.formRule.approver.approverList" :options="{group:'approver'}" @start="drag=true" @end="drag=true"> 
                    <div v-for="(apUser,index) in formRuleDesign.formRule.approver.approverList" :key="index"  class="c-approval-wrap">
                        <!--渲染单个员工-->
                        <template>
                            <div class="c-approval-item">
                                <template v-if="apUser.approverType===approverType.single">
                                    <div class="c-approval-img"><img :src="apUser.approverPeople.avatar" /></div>
                                    <div class="c-approval-title">{{apUser.approverPeople.name}}</div>
                                </template>
                                <template v-else-if="apUser.approverType===approverType.boss">
                                    <div class="c-approval-bossImg">
                                        <i class="icon iconfont icon-lingdao"></i>
                                    </div>
                                    <div class="c-approval-title">上级</div>                               
                                </template>
                                <i @click="removeSelectApprover(apUser)" class="c-item-remove el-icon-error" ></i>
                            </div>
                            <div v-if="formRuleDesign.formRule.approver.approverList.length>1&&index!=(formRuleDesign.formRule.approver.approverList.length-1)" class="c-approval-conect">
                                <i class="icon iconfont icon-diandiandian" ></i>
                            </div>
                        </template>
                    </div>
                </draggable>
                <div @click="showAndInitApprover()" class="c-btn-add" :class="{'c-btn-more':formRuleDesign.formRule.approver.approverList.length>0}" >
                    <i class="el-icon-plus"></i>
                </div>

            </el-form-item>
            <!--抄送人-->
            <el-form-item class="c-rule-item" label="默认抄送人">
                <draggable class="c-rule-drag" v-model="formRuleDesign.formRule.send.sendList" :options="{group:'sendUser'}" @start="drag=true" @end="drag=true"> 
                    <template>
                        <div v-for="(sendUser,index) in formRuleDesign.formRule.send.sendList" :key="index"  class="c-approval-wrap">
                            <div class="c-approval-item">
                                <template v-if="sendUser.sendType===sendType.single">
                                    <div class="c-approval-img"><img :src="sendUser.sendPeople.avatar" /></div>
                                    <div class="c-approval-title">{{sendUser.sendPeople.name}}</div>
                                </template>
                                <template v-else-if="sendUser.sendType===sendType.boss">
                                    <div class="c-approval-bossImg">
                                        <i class="icon iconfont icon-lingdao"></i>
                                    </div>
                                    <div class="c-approval-title">上级</div>
                                </template>   
                                <i @click="removeSelectSendUser(sendUser)" class="c-item-remove el-icon-error" ></i>
                            </div>

                            <div v-if="formRuleDesign.formRule.send.sendList.length>1&&index!=(formRuleDesign.formRule.send.sendList.length-1)" class="c-approval-conect" >
                                <i class="icon iconfont icon-diandiandian" style="color:white;" ></i>
                            </div>
                        </div>
                    </template>
                </draggable>


                <div @click="showAndInitSend()" class="c-btn-add" :class="{'c-btn-more':formRuleDesign.formRule.send.sendList.length>0}">
                    <i class="el-icon-plus"></i>
                </div>
            </el-form-item>
            <el-form-item class="c-rule-item" label="抄送通知">
                <el-radio-group class="c-rule-send"  v-model="formRuleDesign.formRule.sendConfig">
                        <div><el-radio label="submit">提交申请时抄送</el-radio></div>
                        <div><el-radio label="approval">审批通过后抄送</el-radio></div>
                        <div><el-radio label="all">提交申请时和审批通过后都抄送</el-radio></div>                 
                </el-radio-group>
            </el-form-item>

        </el-form>
        <el-row type="flex" justify="center">
            <el-button @click="saveRule()"  type="primary">保存</el-button>
            <el-button @click="clearRule()"  type="danger">清除</el-button>
            <el-button @click="changeRule()"  type="infor">设置规则</el-button>
        </el-row>

        <!--可见范围Dialog-->
        <el-dialog width="40%"  :open="formVisableContactPanelOpen()" v-if="formVisibleUserPanelDisplay"  title="可见范围" :visible.sync="formVisibleUserPanelDisplay">
            <form-contact-panel selectType="all" class="c-contactPanel"  v-if="formVisibleUserPanelDisplay" ref="formContactPanel"></form-contact-panel>
            <div slot="footer" class="dialog-footer">
                    <el-button @click="formVisibleUserPanelDisplay=false">取 消</el-button>
                    <el-button type="primary" @click="saveVisibleUser()">确认选择</el-button>
            </div>          
        </el-dialog>

        <!--审批人员Dialog-->
        <el-dialog width="40%"  :open="formContactPanelOpen()" v-if="formApproverPanelDisplay"  title="选择审批人" :visible.sync="formApproverPanelDisplay">
            <el-radio-group class="c-rule-send" v-model="formRuleDesign.formRuleHelper.cacheApprover.approverType">
                    <div><el-radio label="boss">上级</el-radio></div>
                    <div><el-radio label="single">单个成员</el-radio></div>                
            </el-radio-group>
            <div class="c-sign-way" v-if="formRuleDesign.formRuleHelper.cacheApprover.approverType==='boss'">
                <div class="c-sign-tip">请选择上级的审批方式</div>
                <el-radio-group class="c-rule-send " v-model="formRuleDesign.formRuleHelper.cacheApprover.approverWay">
                        <div><el-radio label="all">会签</el-radio></div>
                        <div><el-radio label="single">或签</el-radio></div>                
                </el-radio-group>
            </div>
            <div class="c-sign-contact" v-if="formRuleDesign.formRuleHelper.cacheApprover.approverType==='single'">
                <form-contact-panel selectType="onlyUser" class="c-contactPanel" ref="formContactPanel"></form-contact-panel>
            </div>
            <div slot="footer" class="dialog-footer">
                    <el-button @click="formApproverPanelDisplay=false">取 消</el-button>
                    <el-button type="primary" @click="saveApprover()">确认选择</el-button>
            </div>          
        </el-dialog>

        <!--抄送人员Dialog-->
        <el-dialog width="40%" :open="formContactPanelOpen()"  title="选择抄送人" v-if="formSendPanelDisplay" :visible.sync="formSendPanelDisplay">
            <el-radio-group class="c-rule-send" v-model="formRuleDesign.formRuleHelper.cacheSend.sendType">
                    <div><el-radio label="boss">上级</el-radio></div>
                    <div><el-radio label="single">单个成员</el-radio></div>                
            </el-radio-group>
            <div class="c-sign-contact" v-if="formRuleDesign.formRuleHelper.cacheSend.sendType==='single'">
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
     * 可见范围的用户列表和部门读取（√）
     * 默认审批的人用户列表读取，删除(√)
     * 抄送人的用户列表读取，删除(√)
     * 
     * 默认审批用户和抄送人用户列表可拖拽排序(√)
     * 
     * 联系人弹出宽的用户和部门读取(√)
     *     
     * 读取表单规则源对象。（√）
     * 设置表单规则对象。(√)
     * 
     * 验证表单规则对象，可见范围不能为空。（√）
     */



    import formContactPanel from '../../../components/formRule/formContactPanel/formContactPanel';
    import formRuleMap from '../../../store/modules/formRule/formRuleMap';
    import {mapActions,mapGetters} from 'vuex';
    import {FormContactMesType,approverType,sendType} from '../../../store/modules/formRule/formRuleEmun';
    /*拖拽组件*/  
    import draggable from 'vuedraggable'
    export default {
        components:{
            formContactPanel,
            draggable
        },
        name: "formRule",
        data(){
            return{
                send:"提交申请时抄送",
                displayContact:false,
                formVisibleUserPanelDisplay:false,
                formApproverPanelDisplay:false, 
                formSendPanelDisplay:false,
                formRuleDesign:{},
                approverType:approverType,
                sendType:sendType,
                testChangeObj:{}
            }
        },
        beforeMount(){
            this.formRuleDesign=this.getFormRuleDesign();
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
            haseItem(itemName,attrName,attrVal,list){
                if(list===undefined){
                    return false;
                }
                for(var index=0;index<list.length;index++){
                    if(list[index][itemName][attrName]===attrVal){
                        return true;
                    }
                }
                return false;
            },
            getFirstItem(obj){
                for(var key in obj){
                    return obj[key]
                }
            },
            formVisableContactPanelOpen(){
                this.delayRefs(()=>{
                    if(this.$refs.formContactPanel===undefined){
                        return;
                    }
                    this.$refs.formContactPanel.onMessage("getMessages",(postMes)=>{
                        if(postMes.data.mesType===FormContactMesType.users){
                            this.setCacheUserSelect({users:postMes.data.users});
                        }else if(postMes.data.mesType===FormContactMesType.department){
                            this.setCacheDepartmentSelect({department:postMes.data.department});
                        }
                    });

                    var cacheSelect=this.formRuleDesign.formRuleHelper.cacheSelect;
                    this.$refs.formContactPanel.addUnprocessed(
                        this.$refs.formContactPanel.setSelectUserAndDepartMent,
                        [this.formRuleDesign.formRule.visibleUser.users,this.formRuleDesign.formRule.visibleUser.department]
                    );
                    
                    this.setCacheSelect({
                        users:this.formRuleDesign.formRule.visibleUser.users,
                        department:this.formRuleDesign.formRule.visibleUser.department
                    });
                });
            },
            formContactPanelOpen(){
                this.delayRefs(()=>{
                    if(this.$refs.formContactPanel===undefined){
                        return;
                    }
                    this.$refs.formContactPanel.onMessage("getMessageOpen",(postMes)=>{
                        var cacheSelect=this.formRuleDesign.formRuleHelper.cacheSelect;
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
                var cacheSelect=this.formRuleDesign.formRuleHelper.cacheSelect;
                var chioseUser=this.getFirstItem(cacheSelect.users);
                var chioseDepartMent=this.getFirstItem(cacheSelect.department);
         
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
                console.log("保存后的可见对象",this.formRuleDesign.formRule);
            },
            saveApprover(){
                var formRuleHelper=this.formRuleDesign.formRuleHelper;
                var formRule=this.formRuleDesign.formRule;
                var users=formRuleHelper.cacheSelect.users;
                var cacheApprover=formRuleHelper.cacheApprover;
                var chiose=this.getFirstItem(users);
                var isBoss=formRuleHelper.cacheApprover.approverType===approverType.boss?true:false;

                console.log("isBoss",isBoss);
                console.log("isChiose",chiose);
                if(cacheApprover.approverType===approverType.single&&chiose===undefined){
                        this.mix_g_message({
                            mes:"请选择一个成员",
                            type:"warning"
                        });
                        return;                       
                }
                else if(isBoss===false&&this.haseItem("approverPeople","userid",chiose.userid,formRule.approver.approverList)){
                        this.mix_g_message({
                            mes:"请不要选择重复的审批人员",
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
                console.log("保存后的审批对象",formRule);
            },
            saveSend(){
                var formRuleHelper=this.formRuleDesign.formRuleHelper;
                var formRule=this.formRuleDesign.formRule;
                var users=formRuleHelper.cacheSelect.users;
                var cacheSend=formRuleHelper.cacheSend;
                var chiose=this.getFirstItem(users);
                var isBoss=formRuleHelper.cacheApprover.approverType===approverType.boss?true:false;
                if(cacheSend.sendType===sendType.single&&chiose===undefined){
                        this.mix_g_message({
                            mes:"请选择一个成员",
                            type:"warning"
                        });
                        return;                       
                }else if(isBoss===false&&this.haseItem("sendPeople","userid",chiose.userid,formRule.send.sendList)){
                        this.mix_g_message({
                            mes:"请不要选择重复的抄送人员",
                            type:"warning"
                        });
                        return;                      
                }
                this.setSingleSend({
                    sendType: cacheSend.sendType,
                    sendPeople: chiose                 
                });
                this.formSendPanelDisplay=false;
                console.log("保存后的抄送对象",formRule);
            },
            removeSelectApprover(selectUser){
                this.removeApproverUser({userid:selectUser.approverPeople.userid});
            },
            removeSelectSendUser(selectUser){
                this.removeSendUser({userid:selectUser.sendPeople.userid});
            },
            saveRule(){
                var originForm=this.getOriginFormRule();
                if(originForm.visibleUser.count==undefined||originForm.visibleUser.count===0){
                         this.mix_g_message({
                            mes:"可见范围至少选择一人",
                            type:"warning"
                        });                   
                    return;
                }
                this.testChangeObj=originForm;
                console.log("【SaveForm】",originForm);
            },
            clearRule(){
                console.log("【resetForm】");
                this.resetFormRule();
            },
            changeRule(){
                this.changeFormRule({formRule:this.testChangeObj});
            }
            //clearRule changeRule
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
        position: relative;
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
    .c-approval-bossImg{
        width: 46px;
        height: 44px;
  
        line-height: 44px;
        text-align: center;
        color: white;
        background-color: #abbacb;   
        border-radius: 6px;   
    }
    .c-approval-bossImg i{
        font-size: 24px;
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

    .c-btn-selectVisable{
        height: 32px;
        vertical-align: middle;
    }
    .c-visable-item{
        height: 32px;
        vertical-align: middle;
    }

    .c-item-remove{
        position: absolute;
        right: 0px;
        top: -4px;
        color: #5d5c5c;
        z-index: 10;
        cursor: pointer;
    }
    .c-rule-drag{
        display: inline-block;
        vertical-align: top;
    }


    
</style>