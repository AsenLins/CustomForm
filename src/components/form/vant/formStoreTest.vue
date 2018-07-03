<template>
    <div>
        <div>表单Store测试：</div>
        <div class="test1">
            <div>获取</div>
            <div>
                <van-button @click="testGetCurrentFrom" type="default">获取当前【表单】对象</van-button>
                <van-button @click="testGetCurrentControl" type="default">获取当前【编辑】控件对象</van-button>
                <van-button @click="testGetVerify" type="default">获取当前控件【验证】对象</van-button>
                <van-button @click="testGetAttr" type="default">获取当前控件【属性】对象</van-button>
            </div>
            <hr>
            <div>设置</div>
            <div>
                <van-button @click="testUpdateFormControl" type="default">【修改】修改当前窗体</van-button>
                 <van-button @click="testSelectControl" type="default">【修改选中】控件对象</van-button>
                <van-button @click="testAddControl" type="default">【添加】控件对象</van-button>
                <van-button @click="testDeleteControl" type="default">【删除】选中的控件对象</van-button>
                <van-button @click="testUpdateControl" type="default">【修改】当前的选中对象</van-button>
                <van-button @click="testSetAttr" type="default">【设置】表单属性</van-button>
                <van-button @click="testSetVerify" type="default">【设置】表单验证属性</van-button>
            </div>
        </div>
    </div>
</template>


<script>
    import { templateFactory } from "../model/template/templateFactory";
    import { mapActions, mapGetters } from 'vuex';
    import { formMap } from '../../../store/modules/form/model/formMap';
  
    import { FormItem } from '../model/container/formItem';
    import { Controls } from '../model/controls/index';
    import { TextInput } from '../model/controls/textInput';
    import Vue from 'vue';
   
    var cjson=require("circular-json");

    export default {
        name: "formStoreTest",
        data() {
            return {
                forms: templateFactory["overTimeForm"]()
            }
        },
        props: {
            form: Object
        },
        created: function() {
            console.debug("测试对象form", this.form);
        },
        mounted: function() {
            
            var changeObj = templateFactory["overTimeForm"]();
            console.log("cjson",cjson);
           
            console.log("转换的对象是",this.$data);
           // console.log("原始对象是",JSON.parse(JSON.stringify(this.$data)));
            /*
            this.$store.dispatch("formStores/changeForm", {
                form: this.form
            });
            */
            console.log(this);
            this.changeForm(changeObj)
            .then(()=>{
                console.warn("obj",this.getCurrentForm());
                /*
                console.log("str",JSON.parse(cjson.stringify(this.getCurrentForm())));
                console.log("form",this.getCurrentForm());
                var controlObj = this.getCurrentForm().controlList[0].controlList[0];
                return controlObj;
                */
            })
            .then((control)=>{
                console.log("control",control);
            })
            .then(()=>{

            });
            var vue=this;

            var changeObj2 = templateFactory["testForm"]();

            setTimeout(function(){
                vue.$store.dispatch("formStores/changeForm", changeObj2)
                    .then(() => {
                        
                        /*
                        var controlObj = this.getCurrentForm().controlList[0].controlList[0];
                            console.debug("param", controlObj);

                        this.$store.dispatch("formStores/changeEditControl", {
                                control: controlObj
                            })
                            .then(() => {
                                console.debug("changeDebug", this.$store.currentEditControl);
                            });
                        */
                    });



            },2000)


                console.debug("method",this);

            /*
             */
        },
        methods: {
            ...mapActions(formMap.actions),
            ...mapGetters(formMap.getters),
            test(){

              
            },

            testUpdateControl(){
                //var edit=this.getCurrentEditControl();
                //edit.name="testForm"
                
            },
            testGetCurrentFrom(){
                console.warn(this.getCurrentForm());
            },
            testGetCurrentControl(){
                console.warn(this.getCurrentEditControl());

            },
            testGetVerify(){
                console.warn(this.getCurrentEditVerify());
            }, 
            testGetAttr(){
                console.warn(this.getCurrentEditAttr());
            },
            testUpdateFormControl(){
                var changeObj = templateFactory["vacationForm"]();
                this.changeForm(changeObj)
            },
            testAddControl(){
                this.addControl(new FormItem({})
                .add(new TextInput({
                    title:"这是新增的测试输入框"

                }).setVerify({
                    rules:[{
                     tip:"测试验证",
                     rule:"notEmpty"   
                    }]
                })
                .setAttrs({
                    isPrint:true
                })

                ))
                .then(()=>{
                    console.warn("添加成功");
                    console.warn(this.getCurrentForm());

                });
            },
            testDeleteControl(){
                console.warn("delete Obj",this.getCurrentForm());
                this.removeControl(this.getCurrentForm().controlList[0].controlList[0]);
            },
            testSelectControl(){
                var testEidt=this.getCurrentForm().controlList[0].controlList[0];
                Vue.set(testEidt,"attrs",{
                    isPrint:true
                })
                Vue.set(testEidt,"verify",{
                    rules:[
                        {
                            tip:"报错",
                            reg:"notEmpty"
                        }
                    ]
                })
                this.changeEditControl(testEidt);
            },
            testUpdateControl(){
                this.modifyEditControl({
                    name:"testName",
                    title:"【这是修改后的typescript】",
                    newThing:"443"
                })
            },
            testSetAttr(){
                this.setControlAttr({
                    isMoeny:true,
                    isPrint:false
                })

            },
            testSetVerify(){
                this.setControlVerify({
                    isNotEmpty:true,
                    rules: [
                        {

                        }
                        ,{

                        }
                    ]
                });
            }
        }//testAddControl testDeleteControl testUpdateControl testSetAttr testSetVerify
    }
</script>

<style scoped>

</style>