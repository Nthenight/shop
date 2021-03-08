<!-- 商品列表组件 -->
<template>
<div class="content">
  <div class="list-item">
  <div class="item-img"><img :src="product.img" alt="商品图片"></div>
  <div class="item-content">
      <span>{{product.content}}</span>
  </div>
  <div class="item-price">{{totalPrice}}</div>
  <div class="item-count"><p>{{product.count}}</p></div>
 </div>
    <div class="balck" @click="retruned(product.id)">退货</div>
</div>
</template>

<script>
import {mapGetters} from 'vuex';
import {mapActions} from 'vuex';
export default {
name:'ListItem',
  data () {
    return {
    }
  },
computed:{
  ...mapGetters(['paylist']),
    totalPrice(){
    return '￥'+(this.product.price * this.product.count).toFixed(2)
  }
},
methods:{
  ...mapActions(['delet']),
  retruned(id){
    this.delet(id);
    this.$toast.show('退货成功!',2000)
  }
},
props:{
  product:{
    type:Object,
    default(){
      return {}
    }
  }
}
}
</script>

<style scoped>
.content{
  position: relative;
  padding: 10px;
}
.list-item{
  display: flex;
  border-bottom: 1px solid #CDBA96;
}
.item-img{
  flex: auto;
  height: 100%;
  width: 100%;
  padding: 5px;
  margin: auto 0;
}
.item-img img{
  height: 100%;
  width: 100%;
}
.item-content{
  font-size: 12px;
  overflow: hidden;
  text-overflow: ellipsis;
}
.item-price{
  color: #CD0000;
  font-weight: 700;
  margin: 0 20px;
  margin-top: 25%;
}
.item-count{
  margin: 0 20px;
  margin-top: 25%;
  color: 	#A1A1A1;
}
.balck{
  position: absolute;
  top: 50%;
  right: 0;
  transform: translate(0,-50%);
  width: 45px;
  height: 45px;
  margin: auto 0;
  text-align: center;
  font-size: 14px;
  line-height: 45px;
  border-radius: 23px 0 0 23px;
  color: #fff;
  background: var(--color-tint);
}
</style>
