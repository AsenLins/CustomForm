<template>

      <iframe class="c-frame"  @load="frameIsReady()" id="contactFrame" :src="contactUrl" frameborder="0"> </iframe>

</template>

<script>


/**
        document.getElementById("clear").addEventListener("click", function() {
            frame.contentWindow.postMessage({
                optionType: "clear"
            }, "*");
        });
        document.getElementById("removeSelectUser").addEventListener("click", function() {
            frame.contentWindow.postMessage({
                optionType: "removeSelectUser",
                userId: "1611341"
            }, "*");
        });
        document.getElementById("removeSelectDepartment").addEventListener("click", function() {
            frame.contentWindow.postMessage({
                optionType: "removeSelectDepartment",
                departmentId: "5"
            }, "*");
        });
        document.getElementById("setSelect").addEventListener("click", function() {
            frame.contentWindow.postMessage({
                optionType: "setSelectUserAndDepartment",
                departments: {
                    "5": {},
                    "1": {}
                },
                users: {
                    "1611341": {},
                    "1702455": {}
                }
            }, "*");
        });

        document.getElementById("onlyUser").addEventListener("click", function() {
            frame.contentWindow.postMessage({
                optionType: "changeSelectMode",
                selectType: "onlyUser"
            }, "*");
        });
        document.getElementById("all").addEventListener("click", function() {
            frame.contentWindow.postMessage({
                optionType: "changeSelectMode",
                selectType: "all"
            }, "*");
        });
 */



    import formContact from './formContact';
    export default {
        name:"formContactPanel",
        data(){
            return {
                contactUrl:"http://hq.centanet.com/WechatApply/Contact/SelectContactCommon",//公用联系人地址
            }
        },
        mounted(){
            console.log("子组件挂载");
        },
        methods:{
            frameIsReady(){
                console.log("ready");
                formContact.init("contactFrame");
                formContact.postMes("init");
            },
            init(frameId){
                formContact.init(frameId);
            },
            /**
             * 接收已选择联系人或部门的信息
             */
            onMessage(name,fn){
                formContact.listenMes(name,fn);
            },
            /**
             * 设置以选择的部门和人员
             */
            setSelectUserAndDepartMent(users,departments){
                formContact.postMes({              
                    optionType: "setSelectUserAndDepartment",
                    departments: departments,
                    users:users
                });
            },
            /**
             * 根据Id删除已选择的部门人员
             */
            removeSelectUser(userId){
                formContact.postMes({
                    optionType: "removeSelectUser",
                    userId: userId
                })
              
            },
            /**
             * 根据部门Id删除以选择的部门
             */
            removeSelectDepartment(departmentId){
                formContact.postMes({
                    optionType:"removeSelectDepartment",
                    departmentId:departmentId
                });
            },
            /**
             * 清除所有联系人和部门
             */
            clearSelect(){
                formContact.postMes({
                    optionType: "clear"
                })
            },
            /**
             * 修改联系人选择模式
             * all:部门和员工都能选择
             * onlyUser:只能选择用户
             */
            changeSelectModel(selectModel){
                formContact.postMes({
                    optionType: "changeSelectMode",
                    selectType: selectModel                    
                })

            }
        }
    }
</script>

<style scoped>
.c-contact-wrap{
    width: 100%;
    height: 100%;
}
.c-frame{
    width: 100%;
    height: 100%;
}
</style>