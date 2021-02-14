<!--  -->
<template>
<div class="item">
  <img :src="goodsitem.img" alt="图片">
  <div class="content">
    <p>{{goodsitem.content}}</p>
    <span class="price">{{goodsitem.price}}</span>
  </div>
  
</div>
  
</template>

<script>
export default {
name:'GoodsListItem',
  data () {
    return {
    }
  },
props:{
  goodsitem:{
    type:Object,
    default(){
      return {}
    }
  }
}
}
</script>

<style scoped>
  .item{
    width: 48%;
  }
  .content{
    text-align: center;
    font-size: 16px;
  }
 .content p{
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    margin-bottom: 5px;
  }
  img{
    width: 100%;
    border-radius: 10px;
    margin-bottom: 5px;
  }
  .price{
    font-size: 14px;
    color: var(--color-hight-text);
  }
</style>
