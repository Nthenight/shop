<!-- 详情页navBar组件 -->
<template>
  <div>
     <nav-bar>
     <div class="left" slot="left" @click="backPage">
       <div class="left-item">&lt</div>
     </div>
     <div class="center" slot="center" >
       <div class="center-item" 
       v-for="(item,index) in titles"
       :class="{active: index===indexClick}"
       @click="titleClick(index)">{{item}}</div>
     </div>
   </nav-bar>
</div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar';

export default {
name:'DetailNavBar',
  data () {
    return {
   titles:['商品','参数','评论'],
   indexClick:0
    }
  },
components:{
  NavBar,
  },
  methods:{
    // 标题内容样式切换
    titleClick(index){
      this.indexClick=index;
      this.$emit('titleClick',index)
    },
    // 返回上一页事件
    backPage(){
      this.$router.back();
    },
  },
}
</script>

<style scoped>
/* .left{
  width: 20px;
  border-bottom: 20px solid transparent;
  border-top: 20px solid transparent;
  border-right: 20px solid #8B8B7A;
} */
.left-item{
  font-size: 25px;
  color: #A9A9A9;
}
.center{
  display: flex;
  font-size: 12px;
}
.center-item{
  flex: auto;;
}
.active{
  color:var(--color-hight-text);
}
</style>
