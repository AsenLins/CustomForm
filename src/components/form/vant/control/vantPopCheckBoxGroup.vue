<template>
    <van-row>
        <van-cell v-on:click="show(control)" :title="control.title" :value="control.value" is-link />
        <van-actionsheet v-model="control.show" :title="control.title">
            <van-checkbox-group @change="show(control)" v-model="control.vmodel">
                <van-cell-group>
                    <van-cell v-for="checkbox in control.controlList" :title="checkbox.keyName" :key="checkbox._id">
                        <van-checkbox :name="checkbox.keyName" />
                    </van-cell>
                </van-cell-group>
                <van-cell>
                    <van-button @click="commitSelect(control)" type="primary" bottom-action>确认</van-button>
                </van-cell>
            </van-checkbox-group>
        </van-actionsheet>
    </van-row>
</template>

<script>
    import {popMix} from '../mixins/popMix';
    export default {
        name: "vantPopCheckBoxGroup",
        mixins:[popMix],
        props: {
            control: Object
        },
        methods: {
            commitSelect: function(control) {
                control.value=control.vmodel.join(',');
                control.show = false;
            }
        }
    }
</script>

<style scoped>

</style>