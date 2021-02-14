<!-- Home页面推荐菜单 -->
<template>
  <div class="recommend">
    <div class="recommend-item" v-for="item in recommends" :key="item._id">
       <a :href="item.link">
          <img :src="item.img" alt="">
          <div>{{item.title}}</div>
       </a>
    </div>
</div>
</template>

<script>
export default {
name:'HomeRecommend',
props:{
  recommends:{
    type:Array,
    default(){
      return []
    }
  }
},
  data () {
    return {
    }
  }
}
</script>

<style scoped>
.recommend{
  display: flex;
  width: 100%;
  margin: 10px 0;
  box-shadow:0px 10px rgba(1,1,1,.1);
}
.recommend-item{
  flex: auto;
  text-align: center;
  font-size: 14px;
}
img{
  width: 65px;
  height: 65px;
  margin-bottom: 10px;
}
</style>
