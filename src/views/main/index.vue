<template>
    <el-container class="f-body">
        <el-aside width="236px" class="f-aside">
            <el-row class="f-aside-content">
                <el-col :span="24">
                    <!--标题logo-->
                    <el-row type="flex" align="middle" justify="center" class="f-topbar-wrap">
                        <el-col :span="24" class="f-logo-wrap">
                            <div><img class="f-logo" src="../../assets/中原地產_LOGO-02.png"/></div>
                        </el-col>
                    </el-row>

                    <!--菜单-->

                    <el-menu default-active="1" class="f-menu">

                        <el-menu-item index="1">
                            <i class="el-icon-document"></i>
                            <span slot="title">总览</span>
                        </el-menu-item>

                        <el-menu-item index="2">
                            <i class="el-icon-menu"></i>
                            <span slot="title">表单设计</span>
                        </el-menu-item>

                        <el-menu-item index="3">
                            <i class="el-icon-document"></i>
                            <span slot="title">数据</span>
                        </el-menu-item>

                    </el-menu>

                </el-col>
            </el-row>

        </el-aside>
        <el-container style="height:100%;">
            <!--顶部菜单切换栏-->
            <!--<el-header></el-header>-->

            <!--内容容器-->
            <router-view name="formDesign"></router-view>
            <el-main class="f-content">
                <tab-view :tabs="menu"></tab-view>
            </el-main>

        </el-container>
    </el-container>

</template>

<script>
    import tabView from '../../components/tabView.vue';
    import menu from './data/menu';

    export default {
        components: {
            tabView
        },
        data() {
            return {menu: menu}

        },
        mounted(){
            console.log(this.$router);
            this.$router.push('/formDesign');
        },
        methods: {}

    };
</script>

<style scoped="scoped">

    .f-body {
        height: 100%;
    }
    /*-----左侧导航栏-----*/
    .f-aside {
        height: 100%;
        padding-top: 10px;
        padding-bottom: 10px;
        padding-left: 20px;
    }
    .f-aside-content {
        padding-top: 10px;
        padding-bottom: 10px;
        height: 100%;
        background: white;
        border-radius: 4px;
        box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.12), 0 0 6px 0 rgba(0, 0, 0, 0.04);
    }
    .f-topbar-wrap {
        height: 86px;
    }
    .f-logo-wrap {
        text-align: center;
    }
    .f-logo {
        max-height: 45px;
    }

    /*菜单*/
    .f-menu {
        border-right: 0;
    }
    
    /*内容页*/
    .f-content {
        padding-top: 10px;
        padding-bottom: 10px;
    }
</style>