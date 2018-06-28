<template>
    <div @click="openEditModel(control)" class="edit-panel">
        <div class="edit-mask"></div>
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name:"editPanel",
        props:{
            control:Object
        },
        methods:{
            showEdit:function(control){

            },
            hover:function(control){

            },
            openEditModel:function(control){
                console.log("当前控件进入编辑模式",control);
            },
            removeControl:function(control){
                console.log("删除控件",control);
            }
            
        }
        /*
            TODO:
            1.控件编辑模式,
            2.控件的删除,
            3.嵌套控件的问题
        
        */

    }
</script>

<style scoped>
.edit-panel{
    position: relative;
    top: 0px;
    left: 0px;
    cursor: pointer;
}
.edit-mask{
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    background-color: white;
    opacity: 0.6;
    z-index: 5;
}

.edit-action-isEdit{
    border:1px solid #007ED3;
}
.edit-action-hover{
    border:1px dotted #007ED3;
}
.edit-action-default{
    border: none;
}
</style>