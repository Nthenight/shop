<!-- 已购商品列表信息 -->
<template>
<div class="goods-list">
     <scroll class="content" ref="scroll">
       <list-item v-for="item in paylist" 
       :key="item.id" 
       :product='item'/>
      </scroll>  
</div>

</template>

<script>
import ListItem from './ListItem'
import { mapGetters } from 'vuex'
import Scroll from 'components/common/scroll/Scroll'
export default {
name:'GoodsList',
  data () {
    return {
    }
  },
components:{
  Scroll,
  ListItem,
},
computed:{
    ...mapGetters(['paylist'])
},
activated(){
  this.$refs.scroll.refresh();
},
}
</script>

<style scoped>
.goods-list{
  height: 100vh;
}
.content{
  height: calc(100% - 345px);
  overflow: hidden;
}
</style>
