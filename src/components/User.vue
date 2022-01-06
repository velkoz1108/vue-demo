<template>
  <h1>User</h1>
  <h3>My Id is {{userId}}</h3>
  <button @click="ping">ping</button>
  <Back ></Back>
</template>

<script>
import Back from './Back.vue'
export default {
  components:{
    'Back':Back
  },
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
