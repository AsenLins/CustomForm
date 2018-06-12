<template>
    <div>
        <mu-paper class="c-menu-wrap " >
            <mu-appbar class="c-logo-wrap">
                    <div class="c-logo"><img src="../../assets/中原地產_LOGO-02.png" /></div>
            </mu-appbar>
            <div>
              <hr class="mu-divider" />
              <mu-paper  class="c-menu">
                
                <mu-list>
                  <mu-list-item v-for="item in menuData" :key="item.name" button :ripple="false">
                    <mu-list-item-action>
                      <mu-icon class="material-icons" :value="item.icon"></mu-icon>
                    </mu-list-item-action>
                    <mu-list-item-title>{{item.name}}</mu-list-item-title>
                  </mu-list-item>
                </mu-list>

                <mu-divider></mu-divider>

              </mu-paper>
            </div>
        </mu-paper>
        <mu-appbar class="c-appbar-wrap" color="red">
            {{name}}
            <mu-button flat slot="right">选项</mu-button>
        </mu-appbar>

        <mu-flex class="flex-wrapper c-content-wrap" justify-content="start">
          <mu-container class="c-content">
            <mu-paper :z-depth="1" style="height:100%;">
              <mu-tabs  inverse color="secondary" text-color="rgba(0, 0, 0, .54)"  center>
                <mu-tab>申请记录</mu-tab>
                <mu-tab>模板设置</mu-tab>
                <mu-tab>规则设置</mu-tab>
              </mu-tabs>
              <div>
                <router-view name="apply" />
                <router-view name="form" />
                <router-view name="rule" /> 
              </div>
              <!-- <div class="demo-text" v-if="active1 === 0">
                <p>“……是的，我承认从很早以前我都害怕死亡，在医院里被人研究的时候，以前做出布局的时候，其实我很怕死的，因为除了死以外，我没有值得珍惜的东西，很奇怪是吧？恰好是这样我真的很怕死，因为我想要有值得珍惜的东西之后，死亡之后才会不寂寞，我才能够安然的面对死亡……”</p>
              </div>
              -->
            </mu-paper>
          </mu-container>         
        </mu-flex>

    </div>
</template>

<script>
    import menuData from './data/menu'
    import tabData from './data/tab'

    console.log(menuData);
    export default {
        data(){
          return {
            name:"自定义表单",
            menuData:menuData,
          }
        }
    }
</script>

<style>
html,body{
    padding: 0px;
    margin: 0px;
    height:100%;
}
.c-menu-wrap{
    position: fixed;
    top: 0px;
    width: 256px;
    height: 100%;
}
.mu-divider{
  background-color: #dddddd;
}
.c-appbar-wrap{
    position: fixed;
    top: 0px;
    left: 256px;
    overflow: hidden;
    right: 0px;
}
.c-logo{
    margin-top: 23px;
}
.c-logo img{
    max-height: 40px;
}
.c-menu{
  height: 100%;
  background: white;
}

.c-content-wrap{
  padding-left:256px;
  padding-top: 64px;
  height: 100%;
  z-index: 1;
 
}
.c-content{
  z-index: 1;
  height: 400px;

}

</style>