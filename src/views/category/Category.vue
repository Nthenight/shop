<!-- 分类界面 -->
<template>
  <div id="category"><nav-bar class="nav-bar"><div slot="center">分类</div></nav-bar></div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
export default {
name:'Category',
  data () {
    return {
    }
  },
components:{
  NavBar
}
}
</script>

<style scoped>
.nav-bar{
  background: var(--color-tint);
  color: #fff;
}
</style>
