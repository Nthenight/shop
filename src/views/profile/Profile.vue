<!-- 用户界面 -->
<template>
  <div id="user">
    <nav-bar class="nav-bar">
      <div slot="center">我的</div>
      <div slot="right">退出</div>
    </nav-bar>
    <div class="userifo">
      <div class="user-img"><img src="~@/assets/img/user/user.svg" alt="用户图片"></div>
      <span>用户名：</span>
    </div>
   
    <div class="itemifo"><span>已购商品信息</span>
    </div>  
    <goods-list/>
</div>
</template>

<script>
import GoodsList from './components/GoodsList';
import NavBar from 'components/common/navbar/NavBar';

import {mapGetters} from 'vuex'
export default {
name:'Profile',
  data () {
    return {
    }
  },
components:{
  GoodsList,
  NavBar
},
computed:{
  ...mapGetters(['paylist'])
},
}
</script>

<style scoped>
.nav-bar{
  background: var(--color-tint);
  color: #fff;
}
.userifo{
  display: flex;
  margin-top: 10px;
  padding: 5px;
  border-bottom: 1px solid #000;
}
.user-img{
  flex: auto;
  width: 25%;
  height: 25%;
  border-radius: 50%;
  border: 1px solid red;
}
.user-img img{
  width: 100%;
  height: 100%;
  border-radius: 50%;
}
.userifo span{
  flex: auto;
}
.itemifo{
  padding: 5px;
  font-size: 14px;
  border-bottom: 1px solid #000;
}
</style>
