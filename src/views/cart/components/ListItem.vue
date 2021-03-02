<!-- 商品列表组件 -->
<template>
  <div class="list-item">
   <div class="check"><check-button :is-checked='product.check' @click.native='checkClick'/></div>
  <div class="item-img"><img :src="product.img" alt="商品图片"></div>
  <div class="item-content">
      <span>{{product.content}}</span>
    <div class="item-price">{{product.price}}￥
    </div>
    <div class="item-count">x{{product.count}}</div>
  </div>
</div>
</template>

<script>
import CheckButton from 'components/content/checkButton/CheckButton'
export default {
name:'ListItem',
  data () {
    return {
    }
  },
components:{
  CheckButton,
},
props:{
  product:{
    type:Object,
    default(){
      return {}
    }
  }
},
methods:{
  checkClick(){
    this.product.check = !this.product.check;
  }
},
}
</script>

<style scoped>
.list-item{
  display: flex;
  border-bottom: 1px solid #CDBA96;
}
.item-img{
  flex: auto;
  height: 100%;
  width: 100%;
  padding: 5px;
}
.item-img img{
  height: 100%;
  width: 100%;
}
.check{
  height: 100%;
  margin: auto 0;
}
.item-content{
  position: relative;
  flex: auto;
  font-size: 12px;
  padding: 10px;
}
.item-price{
  position:absolute;
  left: 10px;
  bottom: 10px;
  color: #CD0000;
  font-weight: 700;
  margin-top: 10px;
}
.item-count{
  position:absolute;
  right: 10px;
  bottom: 10px;
  color: 	#A1A1A1;
}
</style>
