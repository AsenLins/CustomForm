<template>
    <div>
        <div>表单Store测试：</div>
        <div class="test1">
            <div>获取</div>
            <div>
                <van-button @click="testGetCurrentControl" type="default">获取当前【编辑】控件对象</van-button>
                <van-button @click="testGetVerify" type="default">获取当前控件【验证】对象</van-button>
                <van-button @click="testGetAttr" type="default">获取当前控件【属性】对象</van-button>
            </div>
            <hr>
            <div>设置</div>
            <div>
                <van-button @click="testAddControl" type="default">【添加】选中控件对象</van-button>
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
    import { formMap } from '../../../store/modules/form/formMap';
  
    import { FormItem } from '../model/container/formItem';
    import { Controls } from '../model/controls/index';
    import { TextInput } from '../model/controls/textInput';
   
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
            console.log("str",JSON.parse(cjson.stringify(this.$data)));
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
                console.log("form",this.getCurrentForm());
                var controlObj = this.getCurrentForm().controlList[0].controlList[0];
                return controlObj;
            })
            .then((control)=>{
                console.log("control",control);
            })
            .then(()=>{

            });
        
            this.$store.dispatch("formStores/changeForm", {
                    form: changeObj
                })
                .then(() => {
                    var controlObj = this.$store.getters["formStores/getCurrentForm"].controlList[0].controlList[0];
                         console.debug("param", controlObj);

                    this.$store.dispatch("formStores/changeEditControl", {
                            control: controlObj
                        })
                        .then(() => {
                            console.debug("changeDebug", this.$store.currentEditControl);
                        });
                });

                console.debug("method",this);

            /*
             */
        },
        methods: {
            ...mapActions(formMap.actions),
            ...mapGetters(formMap.getters),
            test(){

              
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
            testUpdateControl(){

            },
            testSetAttr(){

            },
            testSetVerify(){

            }
        }//testAddControl testDeleteControl testUpdateControl testSetAttr testSetVerify
    }
</script>

<style scoped>

</style>