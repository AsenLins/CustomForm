<template>
    <el-menu default-active="1" class="f-menu">
       
        <template v-for="(menu, menuIndex) in menuList" >
            <el-menu-item v-if="menu.children===undefined" :key="menu.id" :index="menuIndex">
                <i :class="menu.icon"></i>
                <span slot="title">{{menu.title}}</span>
            </el-menu-item>
            <el-submenu v-else :key="menu.id" :index="menuIndex">
                <template slot="title">
                    <i :class="menu.icon"></i>
                    <span>{{menu.title}}</span>
                </template>
                <template v-for="(childMenu,childMenuIndex) in menu.children" >
                     <el-menu-item :key="childMenu.id" :index="childMenuIndex">
                         {{childMenu.title}}
                    </el-menu-item>
                </template>
               

            </el-submenu>
        </template>
    </el-menu>
</template>

<script>
    export default {
        name:"menu",
        props: {
            menuList: Array
        }

    }
</script>

<style scoped="scoped"></style>