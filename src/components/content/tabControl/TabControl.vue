<!-- tabcontrol封装 -->
<template>
<div class="Tab-Control">
  <div class="tab-control-item" v-for="(item,index) in titles" 
  :key="item._id" 
  :class="{ active:index===currentIndex }"
  @click="itemActive(index)">
    <span>{{item}}</span>
    </div>
</div>
</template>

<script>
export default {
name:'TabControl',
  data () {
    return {
  currentIndex:0
    }
  },
methods:{
  itemActive(index){
    this.currentIndex=index;
    this.$emit('tabClick',index)
  }
},
props:{
  titles:{
    type:Array,
    default(){
      return []
    }
  }
}
}
</script>

<style scoped>
  .Tab-Control{
    display: flex;
    height: 40px;
    line-height: 40px; 
    text-align: center;
    font-size: 15px;
    background: #fff;
  }
  .tab-control-item{
    flex:1;
  }
  .tab-control-item span{
    padding: 5px;
  }
  .active{
    color:var(--color-tint); 
  }
  .active span{
    border-bottom: 2px solid var(--color-hight-text);
  }
</style>
