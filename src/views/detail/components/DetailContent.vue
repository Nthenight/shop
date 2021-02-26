<!-- 内容组件 -->
<template>
<div class="content">
   <div class="item-content">
  <span>{{this.content.content}}</span>
</div>
</div>
 
</template>

<script>
export default {
name:'DetailContent',
  data () {
    return {
    }
  },
props:{
  content:{
    type:Object
  }
}
}
</script>

<style scoped>
.item-content{
  display: flex;
  margin-top: 5px;
  font-size: 14px;
}
.item-content span{
  flex: auto;
  padding: 10px;
  border-bottom: 1px solid #A9A9A9;
  background: #FFF0F5;
}
</style>
