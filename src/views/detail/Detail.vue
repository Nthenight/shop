<!-- 详情页 -->
<template>
  <div id="detail">
  <detail-nav-bar></detail-nav-bar>
</div>
</template>

<script>
import DetailNavBar from './components/DetailNavBar';

import {getDetailData} from 'network/detail';

export default {
name:'Detail',
  data () {
    return {
  // 定义商品id
     itemid:null,
     img:null,
    }
  },
components:{
  DetailNavBar,
},
created(){
  // 获取从路由传递过来的id
  this.itemid=this.$route.params.id;
  console.log(this.itemid)
  // 获取对应id的数据
  getDetailData(this.itemid).then(res=>{
    console.log(res);
    // this.img=res.toString.img;
    this.img=res;
     let a;
     a=this.img.toString();
    console.log(a)
  })
},
}
</script>

<style scoped>

</style>
