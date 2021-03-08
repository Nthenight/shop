<!--tabbar内容-->
<template>
  <tab-bar>
      <tab-bar-item path="/home">
        <img slot="img" src="~@/assets/img/index/index.svg" alt="">
        <img slot="ativeImg" src="~@/assets/img/index/indexaf.svg" alt="">
        <div slot="text">首页</div> 
      </tab-bar-item>
      <tab-bar-item  path="/search">
        <img slot="img" src="~@/assets/img/search/Searchbf.svg"alt="">
        <img slot="ativeImg" src="~@/assets/img/search/Searchaf.svg" alt="">
        <div slot="text">搜索</div> 
      </tab-bar-item>
      <tab-bar-item  path="/cart">
        <img slot="img" src="~@/assets/img/cart/cart.svg" alt="">
        <img slot="ativeImg" src="~@/assets/img/cart/cartaf.svg" alt="">
        <div slot="text">购物车</div> 
      </tab-bar-item>
      <tab-bar-item  path="/profile">
        <img slot="img" src="~@/assets/img/user/user.svg" alt="">
        <img slot="ativeImg" src="~@/assets/img/user/useraf.svg" alt="">
        <div slot="text">我的</div> 
      </tab-bar-item>
   </tab-bar>
</template>

<script>
import TabBar from 'components/common/tabbar/TabBar';
import TabBarItem from 'components/common/tabbar/TabBarItem';
export default {
name:'MainTabBar',
  data () {
    return {
    }
  },
components:{
   TabBar,
   TabBarItem
}
}
</script>

<style scoped>

</style>
