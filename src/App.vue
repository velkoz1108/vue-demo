<template>
  <!-- 开启顶部安全区适配 -->
  <!-- <van-nav-bar safe-area-inset-top /> -->

  <!-- <h1>Welcome to VueDemo</h1> -->
  <router-view></router-view>


  <router-view name="view1"></router-view>
  
  <router-view name="view2"></router-view>

  <!-- 开启底部安全区适配 -->
  <van-number-keyboard safe-area-inset-bottom />
</template>
<script>
import { NavBar, NumberKeyboard } from "vant"
export default {
  setup() {
    
  },
  components:{
    [NavBar.name]:NavBar,
    [NumberKeyboard.name]:NumberKeyboard
  }
}
</script>

<style>
</style>
