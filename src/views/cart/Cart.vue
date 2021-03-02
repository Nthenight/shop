<!--购物车页面 -->
<template>
  <div class="cart">
   <nav-bar class="nav-bar">
     <div slot="center">购物车
     <span>（{{cartLength}}）</span>
     </div>
  </nav-bar>
  <cart-list/>
  <cart-bottom-bar></cart-bottom-bar>
</div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import CartList from './components/CartList'
import CartBottomBar from './components/CartBottomBar'

import {mapGetters} from 'vuex'; 
export default {
name:'Cart',
  data () {
    return {
    }
  },
computed:{
  ...mapGetters(['cartLength'])
},
components:{
  NavBar,
  CartList,
  CartBottomBar,
},
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
