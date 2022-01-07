<template>
  <h1>Welcome to VueDemo</h1>
  <router-view></router-view>

  <div id="view1">
      <router-view name="view1"></router-view>
  </div>
  
  <router-view name="view2"></router-view>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#view1 {
 border: 2px red solid;
}
</style>
