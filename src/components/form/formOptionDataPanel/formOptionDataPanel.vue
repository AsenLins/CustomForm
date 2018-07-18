<template>

    <div v-if="optionData.length>0">
                <el-row v-for="(dataItem,index) in optionData" :key="dataItem._id" >
                    <el-col :span="12">
                        <el-input :key="dataItem.id" placeholder="选项名称" v-validate="'required'" :name="dataItem._id"  @change="dataChange(dataItem,index)" size="mini" v-model="dataItem.value" ></el-input>
                        <span v-if="errors.has(dataItem._id)" class="error">请输入选项名称</span>
                    </el-col>
                    <el-col class="data-option" :offset="1" :span="11">
                        <i @click="dataLess(dataItem,index)" :class="{'data-option-cantUse':optionData.length<=1}" class="el-icon-remove data-option-less"></i>
                        <i @click="dataAdd(dataItem,index)" class="el-icon-circle-plus data-option-add"></i>
                    </el-col>
                </el-row>
    </div>

</template>

<script>
    import formMap from '../../../store/modules/form/model/formMap';
    import form from '../../../store/modules/form/formDesign';   
    import { mapActions, mapGetters } from 'vuex';

    export default {
        name: "formOptionDataPanel",
        data(){
            return {
                formDesign:{},
                addValue:"选项名称",
                optionData:[],
                addIndex:0
            }
        },
        beforeMount(){
            this.formDesign=this.getCurrentDesignForm();
            this.optionData=this.formDesign.currentEditControl.data.optionData;
            if(this.optionData.length==0){
                this.dataAdd();
            }
        },
        methods:{
            ...mapActions(formMap.actions),
            ...mapGetters(formMap.getters),
            dataLess(dataItem,index){

                if(this.optionData.length-1<=0){
                    return;
                }
                this.attrOptionDataDelete({
                    removeIndex:index
                })
            },
            dataChange(dataItem,index){
                console.log("change");
            },
            dataAdd(){
                var val="";
                if(this.optionData.length==0){
                    val="选项1"
                }
                this.addIndex=this.addIndex+1;
                this.attrOptionDataPush({
                    value:val
                });
                
                //attrOptionDataPush attrOptionChange attrOptionDataDelete
            },
            /**
             * 父组件方法,用于验证当前域的字段验证。
             */
            parentVerify(){
                return this.$validator.validateAll();
            }
        }
    }
</script>

<style scoped="scoped">
/*
[数据]:新增面板
*/
.data-option i{
    position: relative;
    top: 4px;
    font-size:20px;
    cursor: pointer;
}

.data-option-less{
    color: #a29e9e;
}
.data-option-add{
    color: #a29e9e;
}
.data-option-cantUse{
    color:#eeeeee;
}

/*验证*/
.error{
    color: #f56c6c;
    font-weight: bold;
    font-size: 12px;
}


</style>