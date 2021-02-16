<!-- 滚动返回按钮 -->
<template>
  <div class="back-top">
   <div>Top</div>
   <div></div>⬆</div>
</div>
</template>

<script>
export default {
name:'BackTop',
  data () {
    return {
    }
  }
}
</script>

<style scoped>
.back-top{
  position:fixed;
  bottom: 60px;
  right: 10px;
  width: 45px;
  height: 45px;
  border: 1px solid #000;
  border-radius: 50%;
  color: #fff;
  box-shadow: 1px 3px 5px rgba(1,1,1,.3);
  background: var(--color-tint);
  text-align: center;
}
</style>
