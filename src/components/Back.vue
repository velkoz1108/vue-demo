<template>
    <button @click="back">Back</button>
</template>

<script>
export default {
    setup() {
        
    },
    methods:{
        back(){
            this.$router.back();
        }
    }
}
</script>