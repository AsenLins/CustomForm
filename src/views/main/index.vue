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

                    <menus :menuList="menuList"></menus>

                </el-col>
            </el-row>

        </el-aside>
        <el-container style="height:100%;">
            <!--顶部菜单切换栏-->
            <!--<el-header></el-header>-->

            <!--内容容器-->

            <el-main class="f-content">
                <!--<tab-view :tabs="menuList"></tab-view>-->
                
            </el-main>

        </el-container>
    </el-container>

</template>

<script>
    import menus from '../../components/menu.vue';
    import tabView from '../../components/tabView.vue';

    import menuList from './data/menu';
   
   console.log(menuList);

    export default {
        components: {
            tabView,
            menus
        },
        data() {
            return {menuList}

        },
        mounted() {
            console.log("store is ", this.$store);
            console.log("router", this.$router);
            console.log(this.$router);
            console.log("menu is", menu);

            /*
            this
                .$router
                .push('/formDesign');
                var vue=this;
            setTimeout(function () {
                vue
                    .menu
                    .push({
                        id: "443",
                        name: "数据记录",
                        icon: "grade",
                        path: "",
                        routerName: "formList",
                        child: []
                    })

            }, 4000);
            */
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