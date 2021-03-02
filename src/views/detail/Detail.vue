<!-- 详情页 -->
<template>
  <div id="detail">
  <detail-nav-bar class="nav-bar" @titleClick='titleClick' ref="nav"/>
  <scroll class="contents" ref="scroll" @scrollvalue='contentScroll' :probe-type='3'>
    <div class="item-img"><img :src="this.res.img" alt="图片"></div>
    <detail-content :content='res'></detail-content>
   <detail-param ref="param":paramdata='param'></detail-param>
    <detail-comment ref="comment" :comment='comment'></detail-comment>
  </scroll>
  <back-top @click.native="backClick" v-show="this.scrollvalue"/>  
  <detail-bottom-bar @addClick='addToCart' @buyClick='buyClick'/>
</div>
</template>

<script>
import DetailNavBar from './components/DetailNavBar';
import DetailContent from './components/DetailContent'
import DetailParam from './components/DetailParam'
import DetailComment from './components/DetailComment'
import DetailBottomBar from './components/DetailBottomBar'

import {getDetailData,getDetailParam} from 'network/detail';
import Scroll from 'components/common/scroll/Scroll';
import {backTopMixin} from 'common/mixin';
import { mapActions } from 'vuex';



export default {
name:'Detail',
  data () {
    return {
  // 定义商品id
     itemid:null,
    //  自定义一个对象接收商品的详情信息
     param:{
       type:Object
     },
    //  商品的全部信息
     res:{},
     comment:[],
    //  存放标题切换跳转
     navchange:[],
     navindex:null
    }
  },
components:{
  DetailNavBar,
  DetailContent,
  DetailParam,
  DetailComment,
  DetailBottomBar,

  Scroll,
},
methods:{
  ...mapActions(['addCart','pay']),
  // 将商品添加到购物车
  addToCart(){
    const product={};
    product.id=this.itemid;
    product.img=this.res.img;
    product.price=this.res.price.toFixed(2);
    product.content=this.res.content;
    
    this.addCart(product).then(res=>{
      this.$toast.show(res,1500)
    })
  },
  // 购买按钮事件
  buyClick(){
    const product={};
    product.id=this.itemid;
    product.img=this.res.img;
    product.price=this.res.price.toFixed(2);
    product.content=this.res.content;
    this.pay(product);
    this.$toast.show('购买成功!')
  },
  // 点击标题跳转到对应的区域
  titleClick(index){
    this.$refs.scroll.scrollTo(0,-this.navchange[index],200)
  },
  contentScroll(position){
    const positionY=-position.y;
    for(let i=0;i<=this.navchange.length;i++){
      if(this.navindex !==i &&((positionY>this.navchange[i] && positionY<=this.navchange[i+1]) || (positionY>=this.navchange[i]))){
        this.navindex=i;
        this.$refs.nav.indexClick=this.navindex;
      }
    }
    this.scrollvalue = position.y<-1000;
  }
},
mixins:[backTopMixin],
created(){
  // 获取从路由传递过来的id
  this.itemid=this.$route.params.id
  // 获取对应id的数据
  getDetailData(this.itemid).then(res=>{
   this.res=new getDetailParam(res);
    this.param=this.res.param;
    this.comment=this.res.comment;
  })
},
updated(){
  this.navchange.push(0);
  this.navchange.push(this.$refs.param.$el.offsetTop-44);
  this.navchange.push(this.$refs.comment.$el.offsetTop-44);
},
}
</script>

<style scoped>
#detail{
  position: relative;
  height: 100vh;
  z-index: 9;
  background: #fff;
}
.contents{
  height: calc(100% - 88px);
  overflow: hidden;
}
.nav-bar{
  border-bottom: 1px solid 	#A9A9A9;
}
.item-img{
display: flex;
height: 300px;
}
img{
  flex: auto;
}

</style>
