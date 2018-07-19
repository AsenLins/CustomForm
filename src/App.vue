
<template>
  <div id="app">
  
    <router-view/>
     <!--全局弹出框-->
     <keep-alive>
      <el-button plain>
      </el-button>
     </keep-alive>
    <!--全局提示框-->
       
  </div>
</template>

<script>

export default {
  name: 'App'
}
</script>
<style>
 #app{
   height: 100%;
 }
 body,html{
   height: 100%;
   background-color: #ececec;
 }
</style>


