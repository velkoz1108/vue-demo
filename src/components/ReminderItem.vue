<template>
    <demo-section>
    <van-row class="row">
        <van-col  class="name" span="10">星期六还有</van-col>
        <van-col class="number" span="8">1</van-col>
        <van-col span="3">天</van-col>
    </van-row>
    </demo-section>

</template>

<script>
import { Row,Col } from "vant"
import DemoSection from "./DemoSection.vue"

export default {
    setup() {
        
    },
    components:{
        [Row.name]:Row,
        [Col.name]:Col,
        [DemoSection.name]:DemoSection
    }
}
</script>
<style scoped>
.row{
    margin-bottom: 1rem;
    margin-top: 1rem;
    background-color: yellow;
}
.name{
    margin-left: 1rem;
}
.number{
    text-align: right;
    margin-right: 1rem;
}
</style>