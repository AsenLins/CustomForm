<template>
    <div>
        <el-form class="c-rule-form" label-position="left" label-width="96px">
            <el-form-item class="c-rule-item" label="可见范围">
                <el-button size="mini" icon="el-icon-circle-plus" type="info" plain="plain">选择可见范围</el-button>
            </el-form-item>
            <el-form-item class="c-rule-item" label="审批流程"></el-form-item>
            <el-form-item class="c-rule-item noborder" label="默认审批人"></el-form-item>
            <el-form-item class="c-rule-item" label="默认抄送人"></el-form-item>
            <el-form-item class="c-rule-item" label="抄送通知">
                <el-radio-group class="c-rule-send"  v-model="send">
                        <div><el-radio label="提交申请时抄送"></el-radio></div>
                        <div><el-radio label="审批通过后抄送"></el-radio></div>
                        <div><el-radio label="提交申请时和审批通过后都抄送"></el-radio></div>                 
                </el-radio-group>
            </el-form-item>

        </el-form>
        <el-row type="flex" justify="center">
            <el-button  type="primary">保存</el-button>
        </el-row>

        <el-dialog :open="testOpen()"  title="收货地址" :visible.sync="displayContact">
            <form-contact-panel v-if="displayContact" ref="formContactPanel"></form-contact-panel>
        </el-dialog>

        
        
    </div>
</template>

<script>
    import formContactPanel from '../../../components/formRule/formContactPanel/formContactPanel';
    export default {
        components:{
            formContactPanel
        },
        name: "formRule",
        data(){
            return{
                send:"提交申请时抄送",
                displayContact:true
            }
        },
        mounted(){
            console.log("挂在");

        },
        methods:{
            delayRefs(fn){
                setTimeout(() => {
                    fn.call(this);
                }, 50);
            },
            testOpen(){
                console.log("open",this.$refs);
                this.delayRefs(()=>{
                    if(this.$refs.formContactPanel===undefined){
                        return;
                    }
                    this.$refs.formContactPanel.onMessage("getMessage",(data)=>{
                        console.log(data);
                    });  
                })
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
</style>