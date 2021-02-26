<!-- 参数组件 -->
<template>
<div id="param"> 
  <div class="title">参数</div>
  <div class="item-param">
    <div v-for="(item,index) in paramdata" 
    :key="index"
    >
    <div class="param-content" 
    :index='index'
    :class="{first: index==='_id'}">
      <span :class="{first: index==='_id'}" :index="index">{{item}}</span>
      </div>
      </div>
  </div></div>
</template>

<script>
export default {
name:'DetailParam',
  data () {
    return {
    param:{}
    }
  },
props:{
  paramdata:{
    type:Object
  }
},
methods:{
  getParam(){
    this.param=this.paramdata.param;
  }
},
created(){
  this.getParam();
},
}
</script>

<style scoped>

.item-param{
  flex: auto;
}
.param-content{
  flex: auto;
  margin: 5px 0;
  border: 1px solid #A9A9A9;
  background: 	#FFFFE0;
}
.param-content span{
  flex: auto;
  font-size: 14px;
  font-weight: 800;
  padding-left: 10px;
}
.title{
  display: flex;
  font-size: 14px;
  margin-top: 10px;
}
.first{
  height: 0;
  color:transparent;
  border: 0 solid transparent;
}
</style>
