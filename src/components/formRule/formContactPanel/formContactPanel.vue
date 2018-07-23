<template>
    <el-row type="flex" justify="center">
        <el-col class="c-contactPanel" :offset="1" :span="11">
            <iframe
                class="c-frame"
                @load="frameIsReady()"
                id="contactFrame"
                :src="contactUrl"
                frameborder="0"></iframe>
        </el-col>
        <el-col class="c-selectPanel" :offset="1" :span="11">
            <el-row>
                <el-col :offset="2" :span="22">
                    <div class="c-select-tip">已选择的部门、成员</div>
                    <div class="c-select-panel">
                        <el-row
                            v-for="visibleObj in formRuleHelper.cacheSelect.users"
                            :key="visibleObj.userid"
                            class="c-select-item">
                            <el-col :span="2">
                                <i class="icon iconfont icon-touxiang"></i>
                            </el-col>
                            <el-col :span="20">{{visibleObj.name}}</el-col>
                            <el-col class="c-select-close" :span="2">
                                <i class="el-icon-close"></i>
                            </el-col>
                        </el-row>
                        <el-row
                            v-for="visibleObj in formRuleHelper.cacheSelect.department"
                            :key="visibleObj.userid"
                            class="c-select-item">
                            <el-col :span="2">
                                <i class="icon iconfont icon-bumen"></i>
                            </el-col>
                            <el-col :span="20">{{visibleObj.name}}
                            </el-col>
                            <el-col class="c-select-close" :span="2">
                                <i class="el-icon-close"></i>
                            </el-col>
                        </el-row>
                    </div>
                </el-col>
            </el-row>
        </el-col>
    </el-row>

</template>

<script>

    import formRuleMap from '../../../store/modules/formRule/formRuleMap';
    import {mapActions, mapGetters} from 'vuex';
    import formContact from './formContact';
    export default {
        name: "formContactPanel",
        data() {
            return {
                contactUrl: "http://hq.centanet.com/WechatApply/Contact/SelectContactCommon", //公用联系人地址
                formRuleHelper: {}
            }
        },
        props:{
            selectType:String
        },
        beforeMount() {
            console.log("子组件挂载");
            this.resetCacheSelect();
            this.formRuleHelper = this.getFormRuleHelper();
        },
        methods: {
            ...mapGetters(formRuleMap.getters),
            ...mapActions(formRuleMap.actions),
            frameIsReady() {
                console.log("ready");
               
                formContact.init("contactFrame");
                formContact.postMes("init");
                formContact.postMes({
                    optionType: "changeSelectMode", 
                    selectType: this.selectType
                });
            },
            init(frameId) {
                formContact.init(frameId);
            },
            /**
             * 接收已选择联系人或部门的信息
             */
            onMessage(name, fn) {
                formContact.listenMes(name, fn);
            },
            /**
             * 设置以选择的部门和人员
             */
            setSelectUserAndDepartMent(users, departments) {
                formContact.postMes(
                    {optionType: "setSelectUserAndDepartment", departments: departments, users: users}
                );
            },
            /**
             * 根据Id删除已选择的部门人员
             */
            removeSelectUser(userId) {
                formContact.postMes({optionType: "removeSelectUser", userId: userId})

            },
            /**
             * 根据部门Id删除以选择的部门
             */
            removeSelectDepartment(departmentId) {
                formContact.postMes(
                    {optionType: "removeSelectDepartment", departmentId: departmentId}
                );
            },
            /**
             * 清除所有联系人和部门
             */
            clearSelect() {
                formContact.postMes({optionType: "clear"})
            },
            /**
             * 修改联系人选择模式
             * all:部门和员工都能选择
             * onlyUser:只能选择一个用户
             */
            changeSelectModel(selectModel) {
                formContact.postMes({optionType: "changeSelectMode", selectType: selectModel})
            }
        }
    }
</script>

<style scoped="scoped">
    .c-contact-wrap {
        width: 100%;
        height: 100%;
    }
    .c-frame {
        width: 100%;
        height: 100%;
    }

    .c-noSelect {
        text-align: center;
    }
    .c-select-tip {
        color: #787878;
    }
    .c-select-panel {
        margin-top: 15px;
    }
    .c-select-item {
        margin-bottom: 9px;
        color: black;
    }
    .c-select-item i {
        color: #5c9ffa;
        font-size: 18px;
        font-weight: bold;

    }
    .c-select-close i {
        color: gray;
        font-weight: bold;
        cursor: pointer;
    }
    .c-selectPanel {
        border-left: 1px solid #eeeeee;
    }
</style>