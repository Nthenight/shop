<!--购物车页面 -->
<template>
  <div class="cart">
   <nav-bar class="nav-bar">
     <div slot="center">购物车
     <span>（{{cartLength}}）</span>
     </div>
  </nav-bar>
    <div class="show" v-show="messageShow">
    <span>{{infomation}}</span>
  </div>
  <!-- <message-box :array='cartLength'/> -->
  <cart-list/>
  <cart-bottom-bar></cart-bottom-bar>
</div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import CartList from './components/CartList'
import CartBottomBar from './components/CartBottomBar'

// import MessageBox from 'components/content/messageBox/MessageBox';

import {mapGetters} from 'vuex'; 
// import {messageBox} from 'common/mixin';
export default {
name:'Cart',
  data () {
    return {
    messageShow:false,
    infomation:''
    }
  },
// mixins:[messageBox],
computed:{
  ...mapGetters(['cartLength'])
},
components:{
  NavBar,
  CartList,
  CartBottomBar,
  // MessageBox
},
methods:{
  isShow(number,message='请输入提示信息!') {
        if(number==0){
          this.messageShow=true;
          this.infomation=message;
        }
        else this.messageShow = false
      },
},
    activated(){
      this.isShow(this.cartLength,'请购买商品~')
    },
    updated(){
      this.isShow(this.cartLength,'请购买商品~')
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
.show{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  font-size: 16px;
  color: 	#A3A3A3;
}
</style>
