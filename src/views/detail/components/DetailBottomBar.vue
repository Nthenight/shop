<!--底部导航组件 -->
<template>
  <div class="bottom-bar">
  <div class="item">
    <div class="car" @click="addClick"><span >加入购物车</span></div>
    <div class="buy" @click="buyClick"><span >购买</span></div>
  </div>
</div>
</template>

<script>
export default {
name:'DetailBottomBar',
  data () {
    return {
    }
  },
methods:{
  buyClick(){
    console.log('购买');
    // this.$emit('')
  },
  addClick(){
    this.$emit('addClick')
  },
},
}
</script>

<style scoped>
.bottom-bar{
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background:#fff;
  height: 44px;
}
.item{
  display: flex;
  height: 100%;
  line-height: 44px;
  text-align: center;
  font-size: 16px;
}
.car{
  flex: auto;
  background: #ffff00;
}
.buy{
  flex: auto;
  color: #fff;
  background: #ff0000;
}
</style>
