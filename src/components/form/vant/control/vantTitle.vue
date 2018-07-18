<template>
    <van-row
        class="title"
        type="flex"
        >
 
        {{title}}
    </van-row>
</template>

<script>
    export default {
        name: "vantTitle",
        props: {
            title: String
        }
    }
</script>

<style scoped="scoped">
    .title {
        padding-left: 13px;
        padding-right: 13px;
        margin-top: 1px;
        margin-bottom: 1px;
        background-color: #ececec;
        color: gray;
        font-weight:bold;
    }
</style>