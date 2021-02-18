<!-- betterscroll框架的封装 -->
<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
</div>
  
</template>

<script>
import BScroll from 'better-scroll';
export default {
name:'Scroll',
  data () {
    return {
  scroll:null
    }
  },
props:{
  probeType:{
    type:Number,
    defualt:0
  },
  pullUpLoad:{
    type:Boolean,
    defualt:false
  }
},
mounted(){
this.scroll=new BScroll(this.$refs.wrapper,{
  // 滚动方式
  probeType:this.probeType,
  // 是否点击
  click:true,
  // 是否鼠标使用滑轮滚动
  mouseWheel:true,
  // 有vue组件的时候要使用observeDOM才能实现滚动,检测dom元素的变化，它会触发refresh方法
  observeDOM:true,
  // 是否使用上拉加载功能
  pullUpLoad:this.pullUpLoad,
  // 刷新从异步加载过来图片在可滚动区域的大小（解决异步加载导致原来可滚动区域固定的问题，有防抖功能)
  observeImage:true,
  
});
// 实时监听滚动位置
if( this.probeType==2 || this.probeType==3 ){
  this.scroll.on('scroll',(poistion)=>{
  this.$emit('scrollvalue',poistion);
 })
}

// 监听上拉滚动到底部
if(this.pullUpLoad){
  this.scroll.on('pullingUp',()=>{
  this.$emit('pullingUp');
 })
}

},
methods:{
  // 定义滚动位置和完成滚动要多少时间函数
  scrollTo(x,y,time=1000){
    this.scroll && this.scroll.scrollTo(x,y,time);
  },
  // 定义下一次上拉加载事件
  finishPullUp(){
    this.scroll && this.scroll.finishPullUp();
  },
  refresh(){
    this.scroll && this.scroll.refresh();
  },
  getScrollY(){
    return this.scroll ? this.scroll.y:0;
  },
}
}
</script>

<style scoped>

</style>
