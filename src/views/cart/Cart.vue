<!--购物车页面 -->
<template>
  <div class="cart">
   <nav-bar class="nav-bar">
     <div slot="center">购物车
     <span>（{{cartLength}}）</span>
     </div>
  </nav-bar>
  
  <message-box 
  :value='cartLength' 
  @message='messageisShow' 
  v-show="this.messageShow"
  ref="isShow"/>
  <cart-list/>
  <cart-bottom-bar></cart-bottom-bar>
</div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import CartList from './components/CartList'
import CartBottomBar from './components/CartBottomBar'


import {mapGetters} from 'vuex'; 
import {messages} from 'common/mixin';
export default {
name:'Cart',
  data () {
    return {
    }
  },
mixins:[messages],
computed:{
  ...mapGetters(['cartLength'])
},
components:{
  NavBar,
  CartList,
  CartBottomBar,
},
    activated(){
      this.$refs.isShow.isShow(this.cartLength,'请购买商品~');
    },
    updated(){
       this.$refs.isShow.isShow(this.cartLength,'请购买商品~');
    }
}
</script>

<style scoped>
.cart{
  height: 100vh;
}
.nav-bar{
  color: #fff;
  background: var(--color-tint);
}
</style>
