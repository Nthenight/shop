<!-- 商品组件 -->
<template>
  <div class="goods">
   <goods-list-item v-for="item in goods" 
   :key="item._id" 
   :goodsitem='item'/>
</div>
</template>

<script>
import GoodsListItem from './GoodsListItem'

export default {
name:'GoodsList',
  data () {
    return {
    }
  },
props:{
  goods:{
    type:Array,
    default(){
      return []
    }
  }
},
components:{
  GoodsListItem
}
}
</script>

<style scoped>
.goods{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 2px;
}
</style>
