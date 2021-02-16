<!-- slideshow组件 -->
<template>
<!--   <div class="swiper-show">
  <div class="left">
    <slot name="left"></slot>
  </div>
  <div class="center">
    <slot name="center"></slot>
  </div>
  <div class="right">
    <slot name="right"></slot>
  </div>
</div> -->
</template>

<script>
export default {
name:'SwiperShow',
  data () {
    return {
    }
  }
}
</script>

<style scoped>
.swiper-show{
  display: flex;
}
.center{
  width: 50%;
}
.left,
.right{
  width:25%;
}
</style>
