<template>
    <el-menu default-active="0" class="f-menu">

        <template v-for="(menu, menuIndex) in menuList">
            <el-menu-item
                @click="setTab(menu)"
                v-if="menu.children===undefined"
                :key="menu.id"
                :index="getIndex(menuIndex)">
                <i :class="menu.icon"></i>
                <span slot="title">{{menu.title}}</span>
            </el-menu-item>
            <el-submenu v-else :key="menu.id" :index="getIndex(menuIndex)">
                <template slot="title">
                    <i :class="menu.icon"></i>
                    <span>{{menu.title}}</span>
                </template>
                <template v-for="(childMenu,childMenuIndex) in menu.children">
                    <el-menu-item
                        @click="setTab(childMenu)"
                        :key="childMenu.id"
                        :index="getChildIndex(menuIndex,childMenuIndex)">
                        {{childMenu.title}}
                    </el-menu-item>
                </template>

            </el-submenu>
        </template>
    </el-menu>
</template>

<script>
    import menuList from '../data/menu';
    import tabsViewMap from '../store/modules/tabsViews/tabsViewMap';
    import {mapActions, mapGetters} from 'vuex';

    export default {
        name: "menus",
        data() {
            return {menuList}
        },
        methods: {
            ...mapActions(tabsViewMap.actions),
            ...mapGetters(tabsViewMap.getters),
            /*
            *设置路由到tabView
            */
            setTab(menu) {
                this.addAndSelectTabView({tab:menu})
                .then(()=>{
                  
                    this.$router.push({path:menu.path});
                    console.log("success"); 
                });
            },
            /**
             * 获取字符串索引
             */
            getIndex(index) {
                return index.toString();
            },
            /**
             * 获取子菜单字符串索引
             */
            getChildIndex(index, childIndex) {
                return index + "-" + childIndex;
            }
        }

    }
</script>

<style scoped="scoped"></style>