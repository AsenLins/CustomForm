<template>
    <div>

    </div>
</template>

<script>
    
    export default {
        name:"formStoreTest",
        data(){
            return{

            }
        },
        mounted:function(){
            console.log("store is:",this.$store);
            console.log("getControl",this.$store.getters["formStores/getCurrentEditControl"]); 
            this.$store.commit("formStores/addControl",{
                vue:this
            });

            /*
            console.log("store is:",this.$store);
            
            console.log("getControl",this.$store.getters["formStores/getCurrentEditControl"]); 
           
            this.$store.commit("formStores/addControl",{
                vue:this,
                
            });
            */
        }
    }

</script>

<style scoped>

</style>