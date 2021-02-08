<!-- Home页面推荐菜单 -->
<template>
  <div class="recommend">
    <div v-for="item in recommends" :key="item._id">
       <a >
          <img :src="item.image" alt="">
          <div>{{item.title}}</div>
       </a>
    </div>
    <div >
       <a >
          <img alt="">
          <div></div>
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

</style>
