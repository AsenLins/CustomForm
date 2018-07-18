<template>
    <van-row >
        <van-cell @click="show(control)" :title="control.title" :value="control.placeholder" is-link />
        <van-actionsheet  v-model="control.show" :title="control.title">
            <van-datetime-picker @cancel="hide(control)" v-on:change="change"  @confirm="commitSelect(control,$event)" v-model="control.vmodel" :type="dateType" />
        </van-actionsheet>
    </van-row>
</template>

<script>
    import {popMix} from '../mixins/popMix';
    export default {
        name:"vantPopDateTimePicket",
        mixins:[popMix],
        data(){
            return{
                dateType:"datetime"
            }
        },
        props:{
            control:Object
        },
        beforeMount:function(){
            if(this.control.type=="dateAndTime"){
                this.dateType="datetime";
            }else{
                this.dateType="date";
            }
        },
        methods:{
            commitSelect:function(control,s){
                if(this.dateType=="datetime"){
                      this.control.value=s.getFullYear()+"-"+(s.getMonth()+1)+"-"+s.getDate()+" "+s.getHours()+":"+s.getMinutes();
                }else{
                      this.control.value=s.getFullYear()+"-"+(s.getMonth()+1)+"-"+s.getDate();
                }
                this.control.placeholder=this.control.value;
                this.control.show=false;
                
            },
            change:function(e){
                var dateStr=e.getValues().join('-');
            }
        }
    }
</script>

<style scoped>

</style>