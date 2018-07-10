<template>
    <el-container>
        <el-main>
            <el-row type="flex" justify="center" >
              <el-col :span="16">
                <el-tabs v-model="activeName"  >
                    <!--模板设置页-->
                    <el-tab-pane label="模板设置" name="formDesign">
                        <el-row type="flex"  align="middle">
                            <el-col :span="24">
                                <keep-alive>
                                    <form-design></form-design>
                                </keep-alive>
                                
                            </el-col>
                        </el-row>
                    </el-tab-pane>
                    <!--规则设置页-->
                    <el-tab-pane label="规则设置" name="formRule">
                        <el-row type="flex"  align="middle">
                            <el-col  :span="24">
                                <keep-alive>
                                    <form-rule></form-rule>
                                </keep-alive>                               
                            </el-col>
                        </el-row>                        
                    </el-tab-pane>
                </el-tabs>
              </el-col>
            </el-row>

        </el-main>

    </el-container>
</template>

<script>
    import formDesign from './formDesign';
    import formRule from './formRule';
    export default {
        components:{
            formDesign,
            formRule
        },
        data(){
            return{
                activeName:"formDesign"
            }
        }, 
    }
</script>

<style scoped>

</style>