<template>
    <div class="c-contact-wrap">
        <iframe id="contactFrame" :src="contactUrl" frameborder="0">
    </div>
</template>

<script>
    export default {
        name:"formContactPanel",
        data(){
            return {
                contactUrl:"http:// "
            }
        },
        mounted(){
            //var  document.getElementById("contactFrame");
        }
    }
</script>

<style scoped>
.c-contact-wrap{
    width: 100%;
    height: 100%;
}
</style>