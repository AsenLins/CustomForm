<template>
    <el-container>




        <el-main>
            <el-row type="flex" justify="center" >
              <el-col :span="16">
                <el-tabs v-model="activeName"  @tab-click="handleClick">
                    <el-tab-pane label="模板设置" name="first">
                        <el-row type="flex"  align="middle">
                            <el-col class="f-design-panel" :span="12">
                                left
                            </el-col>
                            <el-col class="f-attr-panel" :span="12">
                                right
                            </el-col>
                        </el-row>
                    </el-tab-pane>
                    <el-tab-pane label="规则设置" name="second">规则设置</el-tab-pane>
                </el-tabs>
              </el-col>
            </el-row>

        </el-main>

    </el-container>
</template>

<script>
    export default {
        name: "FormDesign",
        data(){
            return{
                activeName:"first"
            }
        }
        
    }
</script>

<style scoped="scoped">

.f-design-panel{
    width: 350px;
    height: 600px;
    background-color: #f5f5f5;
    border-radius: 5px;
    box-shadow: 1px 1px 16px -3px gray;
}

</style>