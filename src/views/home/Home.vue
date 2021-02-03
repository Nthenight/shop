<!-- Home页面 -->
<template>
  <div>
  <nav-bar class="home-nav"><div slot="center">首页</div></nav-bar>
  <swiper></swiper>
</div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar.vue';
import swiper from 'views/home/homeswiper/swiper';
// import {getHomeMultidata} from 'network/home';

export default {
name:'Home',
components:{
NavBar,
swiper
},
  data () {
    return {
       result:null,
    }
  },
// created(){
//     getHomeMultidata().then(res=>{
//        console.log(res)
//        this.result=res;
//      })
//     }
}
</script>

<style scoped>
  .home-nav{
    background: var(--color-tint);
    color: #fff;
  }
</style>
