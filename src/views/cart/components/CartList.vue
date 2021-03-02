<!-- 商品列表 -->
<template>
<div class="cart-list">
     <scroll class="content" ref="scroll">
       <list-item v-for="item in cartlist" 
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
name:'CartList',
  data () {
    return {
    }
  },
components:{
  Scroll,
  ListItem,
},
computed:{
  ...mapGetters(['cartlist'])
},
activated(){
  this.$refs.scroll.refresh();
},
}
</script>

<style scoped>
.cart-list{
  height: 100vh;
}
.content{
  height: calc(100% - 140px);
  overflow: hidden;
}
</style>
