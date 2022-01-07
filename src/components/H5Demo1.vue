<template>
<van-notice-bar
  left-icon="volume-o"
  mode="closeable"
  text="在代码阅读过程中人们说脏话的频率是衡量代码质量的唯一标准。"
/>
    表单提交
    <van-cell-group inset>
        <van-cell title="单元格" value="内容" />
        <van-cell title="单元格" value="内容" label="描述信息" />
    </van-cell-group>
</template>

<script>

import {Cell,CellGroup,NoticeBar} from 'vant'

export default {
    setup() {
        
    },
    components:{
        [CellGroup.name]: CellGroup,
        [Cell.name]: Cell,
        [NoticeBar.name]:NoticeBar,
    }

}
</script>