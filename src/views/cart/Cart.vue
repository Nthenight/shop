<!--购物车页面 -->
<template>
  <div>
   <nav-bar class="nav-bar">
     <div slot="center">购物车
     <span>（{{cartLength}}）</span>
     </div>
  </nav-bar>
</div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import {mapGetters} from 'vuex'; 
export default {
name:'Cart',
  data () {
    return {
    }
  },
computed:{
  ...mapGetters(['cartLength'])
},
components:{
  NavBar,
},
}
</script>

<style scoped>
.nav-bar{
  color: #fff;
  background: var(--color-tint);
}
</style>
