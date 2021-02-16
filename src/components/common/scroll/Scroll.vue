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
  // 有vue组件的时候要使用observeDOM才能实现滚动
  observeDOM:true,
  // 是否使用上拉加载功能
  pullUpLoad:this.pullUpLoad,
  
})
// 实时监听滚动位置
this.scroll.on('scroll',(poistion)=>{
  this.$emit('scrollvalue',poistion);
})
// 监听上拉加载
this.scroll.on('pullingUp',()=>{
  this.$emit('pullingUp')
})
},
methods:{
  // 定义滚动位置和完成滚动要多少时间函数
  scrollTo(x,y,time=1000){
    this.scroll.scrollTo(x,y,time);
  },
  finishPullUp(){
    this.scroll.finishPullUp();
  }
}
}
</script>

<style scoped>

</style>
