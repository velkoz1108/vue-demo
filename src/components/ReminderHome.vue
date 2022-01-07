<template>
    <van-icon name="add-o" color="#1989fa" size="3rem" id="add" />


<van-list
  v-model="loading"
  :finished="finished"
  finished-text="没有更多了"
  @load="onLoad"
>
 <reminder-item v-for="item in list" :key="item" />
    
</van-list>

</template>

<script>

import {PullRefresh,List,Cell,Icon,Row,Tag,ContactList} from 'vant'
import ReminderItem from './ReminderItem.vue'

export default {
    setup() {
        
    },
data() {
    return {
        loading:false,
        finished:true,
      chosenContactId: '1',
      list: [
        {
          id: '1',
          name: '张三',
          tel: '13000000000',
          isDefault: true,
        },
        {
          id: '2',
          name: '李四',
          tel: '1310000000',
        },
      ],
    };
  },
    components:{
        'reminder-item':ReminderItem,
        [PullRefresh.name]: PullRefresh,
        [Cell.name]: Cell,
        [List.name]: List,
        [Icon.name]:Icon,
        [Row.name]:Row,
         [Tag.name]:Tag,
         [ContactList.name]:ContactList,
    },
     methods: {
    onLoad() {
      setTimeout(() => {
        if (this.refreshing) {
          this.list = [];
          this.refreshing = false;
        }

        for (let i = 0; i < 10; i++) {
          this.list.push(this.list.length + 1);
        }
        this.loading = false;

        if (this.list.length >= 40) {
          this.finished = true;
        }
      }, 1000);
    },
    onRefresh() {
      // 清空列表数据
      this.finished = false;

      // 重新加载数据
      // 将 loading 设置为 true，表示处于加载状态
      this.loading = true;
      this.onLoad();
    },
    onLoad(){

    }
  },

}
</script>

<style scoped>
#add{
    position:fixed; 
    right: 1rem;
    top: 10rem;
    z-index: 100;
}
</style>