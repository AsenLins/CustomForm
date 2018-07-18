<template>
    <el-row>
        <el-col :span="24">
            <el-form label-width="80px">

                <el-form-item label="表单名称">
                    <el-input
                        v-validate="'required'"
                        key="formName"
                        name="formName"
                        v-model="formDesign.form.title"
                        size="small"
                        placeholder="表单名称"></el-input>
                    <span v-if="errors.has('formName')" class="error">请输入表单名称</span>
                    <!--<div class="error"
                    v-if="!$v.formDesign.form.title.required">表单名称不能为空</div>-->
                </el-form-item>

                <el-form-item label="图标">
                    <div @click="childShowOrClose('block')" class="icon-wrap">
                        <i class="selectItem ct" :class="curIcon.icon" :style="{color:curIcon.color}"></i>
                    </div>
                    <formIconPanel
                        @childselecticon="childselecticon"
                        @childshoworclose="childShowOrClose"
                        :showOrDisplay="showOrCloseIconPanel"></formIconPanel>
                </el-form-item>

                <el-form-item label="是否启用">
                    <el-switch v-model="formDesign.form.enable"></el-switch>
                </el-form-item>

                <!-- <el-form-item label="测试验证"> <el-input v-model="testName"
                placeholder=""></el-input> <div class="error"
                v-if="!$v.testName.required">控件说明不能为空</div> </el-form-item> -->

                <template v-if="formDesign.currentEditControl._id!=''">

                    <el-form-item
                        v-if="formDesign.currentEditControl.title!==undefined"
                        label="控件名称">
                        <el-input
                            v-validate="'required'"
                            name="controlName"
                            size="small"
                            v-model="formDesign.currentEditControl.title"
                            placeholder="控件名称"></el-input>
                        <span v-if="errors.has('controlName')" class="error">请输入控件名称</span>
                        <!--<div class="error"
                        v-if="!$v.formDesign.currentEditControl.title.required">控件名称不能为空</div>-->
                    </el-form-item>

                    <el-form-item
                        v-if="formDesign.currentEditControl.placeholder!==undefined"
                        label="控件说明">

                        <el-input
                            type="textarea"
                            resize="none"
                            :autosize="{ minRows: 3, maxRows: 3}"
                            placeholder="控件说明"
                            v-model="formDesign.currentEditControl.placeholder"></el-input>

                    </el-form-item>
                    <!--<template
                    v-if="formDesign.currentEditControl.type==controlType.text"></template>-->
                    <!--<form-option-data-panel ref="child"></form-option-data-panel>-->
                    <!--数据属性-->
                    <el-form-item
                        v-if="
                    formDesign.currentEditControl.type===controlType.checkBoxGroup||
                    formDesign.currentEditControl.type===controlType.radioBoxGroup"
                        label="添加选项">
                        <form-option-data-panel ref="formOptionDataPanel"></form-option-data-panel>

                    </el-form-item>

                    <!--控件的其他attr-->
                    <el-form-item label="其他">
                        <el-checkbox
                            label="是否必填"
                            v-model="formDesign.currentEditControl.attrs.isNotEmpty"
                            name="isNotEmpty"></el-checkbox>
                        <el-checkbox
                            label="是否参与打印"
                            v-model="formDesign.currentEditControl.attrs.isPrint"
                            name="isPrint"></el-checkbox>
                    </el-form-item>
                </template>
            </el-form>
        </el-col>
    </el-row>
</template>

<script>
    import '../../../css/formIcon/iconfont.css';
    import formIconPanel from '../formIconPanel/formIconPanel';
    import formOptionDataPanel from '../formOptionDataPanel/formOptionDataPanel';
    /**store */
    import {mapActions, mapGetters} from 'vuex';
    import formMap from '../../../store/modules/form/model/formMap';
    import form from '../../../store/modules/form/formDesign';
    import {controlType} from '../model/controls/controlsTypeEnum';

    import {Validator} from 'vee-validate';

    //import { Validator } from 'vee-validate';
    /*
    const dict = {
    custom: {
        email: {
        required: 'Your email is empty'
        },
        controlName: {
            required: () => '控件名称不能为空'
        },
        formName:{
            required: () => '表单名称不能为空'
        }
    }
    };

    Validator.localize('en', dict);
    */
    // or use the instance method
    //

    Validator.extend('required', {
        messages: {
            zh_CN: field => 'qq号码输入不正确'
        },
        validate(value) {
            return new Promise(resolve => {
                if (value === "" || value === undefined) {
                    console.log("空的");
                }
            });
        }
    });

    export default {
        name: "formAttrPanel",
        components: {
            formIconPanel,
            formOptionDataPanel
        },
        data() {
            return {
                curIcon: {
                    icon: "ct-wodeshenpi",
                    color: "#FDAD22"
                },
                formDesign: form.formDesign,
                showOrCloseIconPanel: "none",
                controlType: controlType
            }
        },
        beforeMount() {
            this.formDesign = this.getCurrentDesignForm();
        },
        mounted() {
            // this.formVerifyChange(this.$v); console.log(this.$v);
            // this.$validator.localize('en', dict);
        },
        methods: {
            ...mapActions(formMap.actions),
            ...mapGetters(formMap.getters),
            /**
             * 显示图标面板
             */
            childShowOrClose(val) {
                this.showOrCloseIconPanel = val;
            },
            /**
             * 获取图标面板选中的图标
             */
            childselecticon(icon) {
                this.curIcon = icon;
            },
            custom() {
                console.log("触发了自定义事件");
            },
            changeControlVerifyStatus(result) {
                if (result) {} else {}
            },
            /*
            * 父组件验证方法
            */
            parentVerify(fn) {
                console.log("验证表单问题", this.$validator);
                if (this.$refs.formOptionDataPanel === undefined) {
                    return this
                        .$validator
                        .validateAll()
                        .then((result) => {
                            this.changeControlVerifyStatus();
                            //fn.call(this,fn);
                        });
                } else {
                    return this
                        .$refs
                        .formOptionDataPanel
                        .parentVerify()
                        .then((result) => {
                            if (result) {
                                return this
                                    .$validator
                                    .validateAll();
                            } else {
                                return false;
                            }
                            this.changeControlVerifyStatus(result);
                        });
                }
            }
        }
        /*,
        validations:{
            formDesign:{
                form:{
                    title:{
                        required
                    }
                },
                 currentEditControl:{
                     title:{
                         required
                     }
                }
            },
        }
        */
    }
</script>

<style scoped="scoped">
    /*
图标选择
*/
    .icon-wrap {
        width: 50px;
        height: 50px;
        border: 1px solid #ececec;
        border-radius: 5px;
        text-align: center;
        line-height: 50px;
        cursor: pointer;
    }

    .selectItem {
        font-size: 34px;
    }

    .error {
        color: #f56c6c;
        font-weight: bold;

    }
</style>