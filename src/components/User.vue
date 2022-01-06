<template>
  <h1>User</h1>
  <h3>My Id is {{userId}}</h3>
  <button @click="ping">ping</button>
</template>

<script>
export default {
  data(){
    return {
      userId:''
    }
  },
  methods:{
    ping(){
      console.log('pong')
    }
  },
  created(){
    console.log(this.$route)
    console.log(this.$route.query)
    this.userId = this.$route.params.id
  }
}
</script>
