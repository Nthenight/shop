<!-- Home页面 -->
<template>
  <div id="home">
   <nav-bar class="home-nav">
    <div slot="center">首页</div>
    </nav-bar>
    <tab-control 
      class="tab-control" 
      :titles=titles
     @tabClick='tabClick'
     ref="tabcontrol1"
     v-show="isTabFixed"/>
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
      <home-swiper :banners="banners" @swiperimageLoad='imageLoad'/>
     <home-recommend :recommends='recommends'/>
     <tab-control 
     :titles=titles
     @tabClick='tabClick'
     ref="tabcontrol2"/>
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
       //定义商品数据对象
       goods:{
          'pop':{page:0,list:[]},
          'news':{page:0,list:[]},
          'sell':{page:0,list:[]}
        },
        // 用于获取点击tabcontrol组件对应的商品类型
        goodsindex:'pop',
        // 是否显示返回上方按钮
        scrollvalue:false,
        // 设置tabcontrol的offsettop
        taboffsetTop:0,
        // 定义tabcontorl是否吸顶
        isTabFixed:false,
        // 定义页面的y轴坐标
        saveY:0,
      }
    },
  computed:{
    // 商品对应商品类型的数据列表的计算属性
    goodslist(){
      return this.goods[this.goodsindex].list;
    }
  },
  methods:{
    /*事件相关的方法
    */
    //  获取tabcontrol组件传过来的值，来判断显示哪种商品类型
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
         this.$refs.tabcontrol1.currentIndex=index;
         this.$refs.tabcontrol2.currentIndex=index;
    },
    // 控制返回顶部的坐标
    backClick(){
      this.$refs.scroll.scrollTo(0,0)
    },
    // 控制是否显示返回顶部按钮
    contentscroll(position){
      // 判断上拉距离，实现返回顶部按钮的显示与否
     this.scrollvalue = position.y<-1000;
    //  判断上拉距离是否到了tabcontorl的offsettop距离
    this.isTabFixed=(-position.y)>this.taboffsetTop;
    },
    // 实现上拉加载事件
    loadMore(){  
      this.getGoodsdata(this.goodsindex)
    },
    // 实现轮播图加载完成后得到tabcontrol的offsettop值
    imageLoad(){
      this.taboffsetTop=this.$refs.tabcontrol2.$el.offsetTop;
    },
    /*
     网络相关的方法
     */
    // 获取home页面的数据
    getHomeMultidata(){
        getHomeMultidata().then(res=>{
        this.banners=res.homeslide;
        this.recommends=res.homerecommend;
      })
    },
    // 获取对应商品类型的数据
    getGoodsdata(type){
      // 给对应类型的商品页码加1
      const page = this.goods[type].page+1;
      getHomeGoodsdata(type,page).then(res=>{
        // 将每次请求的10条数据依次存储在list数组中
        this.goods[type].list.push(...res);
        // 实现页面的计数
        this.goods[type].page += 1;
        // 进行下一次上拉加载
        this.$refs.scroll.finishPullUp();
         
      })
    }
  },
  activated(){
    this.$refs.scroll.scrollTo(0,this.saveY,0);
    this.$refs.scroll.refresh();
  },
  deactivated(){
    this.saveY=this.$refs.scroll.getScrollY();
  },
  created(){
    // 请求home页面的相关数据
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
    background: var(--color-tint);
    color: #fff;
  }
  #home{
    position: relative;
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
 .tab-control{
   position: relative;
   z-index: 7;
 }
</style>
