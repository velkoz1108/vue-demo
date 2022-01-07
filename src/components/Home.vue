<template>
  <h1>Welcome</h1>
   <button @click="about" >Go to About Page</button>
   <button @click="user" >Go to User Page</button>
   <button @click="userGeneric" >Go to UserGeneric Page</button>
   <button @click="multiple" >MultipleRouterView</button>
   <global-button></global-button>
</template>

<script>
export default{
  setup(){

  },

  methods:{
    about(){
     this.$router.push({path:'/about'})
    },
    user(){
      this.$router.push({name:'users',params:{id:'123'}})
    },
    userGeneric () {
       this.$router.push({name:'user',params:{afterUser:'admin'}})
    },
    multiple(){
       this.$router.push('multiple')
    }
  }
}
</script>