<!-- Tabbar组件插槽 -->
<template>
   <div class='tabbar-item' @click="itemClick">
       <div v-show="!isActive"><slot name="img"></slot></div>
       <div v-show="isActive"><slot name="ativeImg"></slot></div>
       <div :style="activeStyle"><slot name="text"></slot></div>
      </div> 
</template>

<script>
export default {
  name:'TabBarItem',
  props:{
    path:String,
    activeColor:{
      type:String,
      default:'red'
    }
  },
  data () {
    return {
    }
  },
computed:{
 isActive(){
   return this.$route.path.indexOf(this.path) !== -1;
 },
 activeStyle(){
   return this.isActive ? {color:this.activeColor} : {}
 }
},
methods:{
  itemClick(){
    this.$router.replace(this.path)
  }
}
}
</script>

<style scoped> 
.tabbar-item{
  flex: 1;
  height: 49px;
  text-align: center;
  font-size: 12px;
  margin-top: 3px;
  margin-bottom: 2px;
}
.tabbar-item img{
  height: 24px;
  width: 24px;
}

</style>
