<template>
    <button @click="sayHi">Global Button</button>
</template>

<script>
export default {
    setup() {
        
    },
    methods:{
        sayHi(){
            alert('This is a global component')
            this.$router.push('home')
        }
    }
}
</script>