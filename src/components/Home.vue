<template>
  <h1>Welcome</h1>
   <button @click="about" >Go to About Page</button>
</template>

<script>
export default{

  methods:{
    about(){
     this.$router.push({path:'/about'})
    }
  }
}
</script>