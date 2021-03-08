<!-- 用户界面 -->
<template>
  <div id="user">
    <nav-bar class="nav-bar">
      <div slot="center">我的</div>
      <div slot="right" @click="exit">退出</div>
    </nav-bar>
    <div class="userifo">
      <div class="user-img"><img src="~@/assets/img/user/user.svg" alt="用户图片"></div>
      <span>用户名：{{this.userName}}</span>
    </div>
   
    <div class="itemifo">
      <span>已购商品信息</span>
    </div>  
      <message-box 
  :value='payLength' 
  @message='messageisShow' 
  v-show="this.messageShow"
  ref="isShow"/>
    <goods-list/>
</div>
</template>

<script>
import GoodsList from './components/GoodsList';
import NavBar from 'components/common/navbar/NavBar';

import {mapGetters} from 'vuex'
import {messages} from 'common/mixin';
export default {
name:'Profile',
  data () {
    return {
  userName:'假数据名'
    }
  },
mixins:[messages],
components:{
  GoodsList,
  NavBar
},
methods:{
  exit(){
    this.$toast.show('本功能还未完成!');
  }
},
computed:{
  ...mapGetters(['paylist','payLength'])
},
    activated(){
      this.$refs.isShow.isShow(this.payLength,'空空如也~');
    },
    updated(){
       this.$refs.isShow.isShow(this.payLength,'空空如也~');
    }
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
  font-weight: 700;
}
.itemifo{
  padding: 5px;
  font-size: 14px;
  border-bottom: 1px solid #000;
}
</style>
