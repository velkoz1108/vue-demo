<template>
  <h1>About Us</h1>
  <button @click="home">Go to Home page</button>
</template>

<script>import { routerKey } from "vue-router"

export default {
  methods:{
    home(){
      this.$router.push({path:'/'})
    }
  }
}
</script>