<!-- 评论组件 -->
<template>
  <div id="comment">
  <div class="title"><h5>评论区</h5></div>
    <div class="comment-item" v-for="(item,index) in comment" :key="index">
      <div class="user-name"><span>用户名：{{item.userName}}</span></div>
      <div class="comment-content">{{item.comment}}</div>
      </div>
  </div>
</template>

<script>
export default {
name:'DetailComment',
  data () {
    return {
    }
  },
props:{
  comment:{
    type:Array
  }
},
}
</script>

<style scoped>
.title{
  margin: 10px 0;
  padding: 0 0 5px 5px;
  border-bottom: 1px solid #A9A9A9;
}
.comment-item{
  display: flex;
  margin: 5px 0;
  border: 1px solid #A9A9A9;
  height: 100px;
}
.user-name{
  text-align: center;
  flex: auto;
  white-space: nowrap;
  background:	#F0E68C;
}
.user-name span{
  position: relative;
  top: 50%;
  left: 0;
  font-size: 10px;
}
.comment-content{
  flex: auto;
  overflow: auto;
  font-size: 12px;
  padding: 5px 5px 5px 10px;
  background: #ffffcc;
}
</style>
