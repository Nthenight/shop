<!-- Home页面 -->
<template>
  <div id="home">
   <nav-bar class="home-nav">
    <div slot="center">首页</div>
    </nav-bar>
    <swiper-show>
      <div slot="left">左边内容区</div>
      <div slot="center"><home-swiper :banners="banners"/></div>
      <div slot="right">右边内容区</div>
    </swiper-show>  
  <home-recommend :recommends='recommends'/>
  <tab-control 
  class="tab-control" 
  :titles=titles
  @tabClick='tabClick'/>
  <goods-list :goods="goodslist"/>
</div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar.vue';
import TabControl from 'components/content/tabControl/TabControl';

import HomeSwiper from 'views/home/homecomponents/HomeSwiper';
import HomeRecommend from 'views/home/homecomponents/HomeRecommend';
import SwiperShow from '../home/homecomponents/SwiperShow';
import GoodsList from 'components/content/goods/GoodsList';

import {getHomeMultidata,getHomeGoodsdata} from 'network/home';

  export default {
  name:'Home',
  components:{
    NavBar,
    TabControl,
    HomeSwiper,
    HomeRecommend,
    SwiperShow,
    GoodsList
  },
   data () {
     return {
        banners:[],
        recommends:[],
        titles:['流行','新款','精选'],
        goods:{
          'pop':{page:0,list:[]},
          'news':{page:0,list:[]},
          'sell':{page:0,list:[]}
        },
        goodsindex:'pop'
      }
    },
  computed:{
    goodslist(){
      return this.goods[this.goodsindex].list
    }
  },
  methods:{
    /*事件相关的方法
    */
       tabClick(index){   
         switch(index){
           case 0:
            this.goodsindex='pop'
            break
           case 1:
             this.goodsindex='news'
             break
             case 2:
               this.goodsindex='sell'
               break
         }
    },

    /*
     网络相关的方法
     */
    getHomeMultidata(){
        getHomeMultidata().then(res=>{
        this.banners=res.homeslide;
        this.recommends=res.homerecommend;
      })
    },
    getGoodsdata(type){
      const page = this.goods[type].page+1;
      getHomeGoodsdata(type,page).then(res=>{
        // 将每次请求的10条数据依次存储在list数组中
        const a=this.goods[type].list.push(...res);
        // 实现页面的计数
        this.goods[type].page += 1;
      })
    }
  },
  created(){

    this.getHomeMultidata();
    //请求商品数据
    this.getGoodsdata('pop');
    this.getGoodsdata('news');
    this.getGoodsdata('sell');
     } 
}
</script>

<style scoped>
  .home-nav{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background: var(--color-tint);
    color: #fff;
    z-index: 2;
  }
  .tab-control{
    position: sticky;
    top: 40px;
    z-index: 3;
  }
  #home{
    padding-top: 44px;
  }
</style>
