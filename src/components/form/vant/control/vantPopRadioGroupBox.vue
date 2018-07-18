<template>
    <van-row>
        <van-cell v-on:click="show(control)" :title="control.title" :value="control.placeholder" is-link />
        <van-actionsheet v-model="control.show" :title="control.title">
            <van-radio-group v-model="control.vmodel">
                <van-cell-group>
                    <van-cell v-for="radiobox in control.controlList" :title="radiobox.keyName" clickable :key="radiobox._id">
                        <van-radio :name="radiobox.keyName" />
                    </van-cell>
                </van-cell-group>
            </van-radio-group>
            <van-cell>
                <van-button @click="commitSelect(control)" type="primary" bottom-action>确认</van-button>
            </van-cell>
        </van-actionsheet>
    </van-row>
</template>

<script>
    import {popMix} from '../mixins/popMix';
    export default {      
        name:"vantPopRadioGroupBox",  
        mixins:[popMix],
        props:{
            control:Object
        },
        methods:{
            commitSelect:function(control){
                control.value=control.vmodel;
                control.placeholder=control.value;
                control.show=false;
            }
        }
    };
</script>

<style scoped>

</style>