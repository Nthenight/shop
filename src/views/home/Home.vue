<!-- Home页面 -->
<template>
  <div id="home">
   <nav-bar class="home-nav">
    <div slot="center">首页</div>
    </nav-bar>
    <!-- <swiper-show>
      <div slot="left">左边内容区</div>
      <div slot="center"><home-swiper :banners="banners"/></div>
      <div slot="right">右边内容区</div>
    </swiper-show>   -->
    <scroll class="content" 
    ref="scroll" 
    :probe-type="3"
    :pull-up-load="true"
    @scrollvalue='contentscroll'
    @pullingUp='loadMore'>
      <home-swiper :banners="banners"/>
     <home-recommend :recommends='recommends'/>
     <tab-control 
      class="tab-control" 
      :titles=titles
     @tabClick='tabClick'/>
     <goods-list :goods="goodslist"/>
    </scroll>
    <back-top @click.native="backClick" v-show="this.scrollvalue"/>  
</div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar.vue';
import TabControl from 'components/content/tabControl/TabControl';
import Scroll from 'components/common/scroll/Scroll';
import BackTop from 'components/content/backTop/BackTop'

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
    Scroll,
    BackTop,

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
        goodsindex:'pop',
        scrollvalue:false,
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
    backClick(){
      this.$refs.scroll.scrollTo(0,0)
    },
    contentscroll(position){
     this.scrollvalue = position.y<-1000
    },
    loadMore(){
      // 实现上拉加载事件
      this.getGoodsdata(this.goodsindex)
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
        // 进行下一次上拉加载
        this.$refs.scroll.finishPullUp();
         
      })
    }
  },
  created(){

    this.getHomeMultidata();
    //请求商品数据
    this.getGoodsdata('pop');
    this.getGoodsdata('news');
    this.getGoodsdata('sell');
     },
     updated(){
      //  等异步图片加载完成后，刷新可滑动高度
      this.$refs.scroll.scroll.refresh();
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
  }
  .tab-control{
    position: sticky;
    top: 40px;
  }
  #home{
    position: relative;
    padding-top: 44px;
    height: 100vh;
    
  }
  .content{
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
    overflow: hidden;
    /* height: calc(100% - 93px);  
    margin-top: 44px; */
   
  }
</style>
