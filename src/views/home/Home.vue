<!-- Home页面 -->
<template>
  <div>
  <nav-bar class="home-nav">
    <div slot="center">首页</div>
    </nav-bar>
  <home-swiper :banners='banners'/>
  <home-recommend :recommends='recommends'/>
    <!-- <home-swiper /> -->
  <!-- <home-recommend /> -->
</div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar.vue';
import HomeSwiper from 'views/home/homecomponents/HomeSwiper';
import HomeRecommend from 'views/home/homecomponents/HomeRecommend'
import {getHomeMultidata} from 'network/home';


  export default {
  name:'Home',
  components:{
  NavBar,
  HomeSwiper,
  HomeRecommend
  },
   data () {
     return {
        banners:[],
        recommends:[]
      }
    },
  created(){
      getHomeMultidata().then(res=>{
        console.log(res.homeslide);
        this.banners=res.homeslide;
      })
     } 
}
</script>

<style scoped>
  .home-nav{
    background: var(--color-tint);
    color: #fff;
  }
</style>
