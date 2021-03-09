<!-- 搜索界面 -->
<template>
  <div id="Search">
  <nav-bar class="nav-bar">
    <div slot="center">搜索</div>
  </nav-bar>
    <nav-bar class="search">
      <div slot="center">
      <search-box @searchContent='searchContent'/>
      </div>
  </nav-bar>
  <scroll class="contents" ref="scroll" @scrollvalue='contentScroll' :probe-type='3'>
    <goods-list :goods='goodslistdata'/>
  </scroll>
    <back-top @click.native="backClick" v-show="this.scrollvalue"></back-top>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import SearchBox from 'components/common/searchBox/SearchBox'

import Scroll from 'components/common/scroll/Scroll';
import GoodsList from 'components/content/goods/GoodsList';
import {backTopMixin} from 'common/mixin';
import {getSearchContent} from 'network/search';
export default {
name:'Search',
  data () {
    return {
  goodslist:[],
  changedata:[]
    }
  },
computed:{
  goodslistdata(){
   return this.changedata;
  }
},
mixins:[backTopMixin],
components:{
  NavBar,
  SearchBox,
  Scroll,
  GoodsList,
},
methods:{
  // 获取搜索框的内容并发起请求
  searchContent(content){
    if(content==''){
      this.$toast.show('请输入内容')
    }
    else {  
     getSearchContent(content).then(res=>{
       if(res.length==0){
         this.$toast.show('未找到该商品，请重新输入');
         this.changedata=[];
       } else{
         this.goodslist.push(...res);
        const a=this.goodslist;
        this.changedata=a;
        this.goodslist=[];
       }
    })
    }
  },
  // 是否显示返回顶部按钮
    contentScroll(position){
      this.scrollvalue = position.y<-1000;
    },
}
}
</script>

<style scoped>
#Search{
  height: 100vh;
}
.contents{
  margin-top: 3px;
  height: calc(100% - 145px);
  overflow: hidden;
}
.nav-bar{
  background: var(--color-tint);
  color: #fff;
}
.search{
  height: 45px;
  padding: 1px 15px;
  background: #F0F0F0;
}
</style>
