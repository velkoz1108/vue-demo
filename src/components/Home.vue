<template>
  <h1>Welcome</h1>
   <button @click="about" >Go to About Page</button>
   <button @click="user" >Go to User Page</button>
   <button @click="userGeneric" >Go to UserGeneric Page</button>
   <global-button></global-button>
</template>

<script>
export default{

  methods:{
    about(){
     this.$router.push({path:'/about'})
    },
    user(){
      this.$router.push({name:'users',params:{id:'123'}})
    },
    userGeneric () {
       this.$router.push({name:'user',params:{afterUser:'admin'}})
    }
  }
}
</script>