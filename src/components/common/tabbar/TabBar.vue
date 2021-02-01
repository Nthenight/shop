<!-- tabbar组件 -->
<template> 
<div id="tabbar">
     <slot></slot>
 </div> 
</template>

<script>
export default {
  name:'TabBar',
  data () {
    return {
    }
  }
}
</script>

<style scoped>
  #tabbar{
   display: flex;
   position: fixed;
   left: 0;
   right: 0;
   bottom: 0;
   background:#f6f6f6;
   box-shadow: 0 -2px 1px rgba(0,0,0,0.1);
}

</style>
