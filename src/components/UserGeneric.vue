<template>
  <h1>UserGeneric</h1>
  <h3>The suffix is {{afterUser}}</h3>
</template>

<script>
export default {
  data(){
    return {
      afterUser:''
    }
  },

  created(){
    // http://localhost:3000/user-admin 
    // the afterUser is : admin
    console.log(this.$route)
    console.log(this.$route.params)
    this.afterUser = this.$route.params.afterUser
  }
}
</script>
