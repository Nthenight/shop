<!-- 搜索框 -->
<template>
  <div class="search">
  <div class="item-content">
    <input type="text" v-model="message" placeholder="请输入内容">
  </div>
  <span class="item-button" @click="searchClick">
    <img src="~@/assets/img/search/search.svg" alt='搜索图片'></span>
</div>
</template>

<script>
export default {
name:'SearchBox',
  data () {
    return {
  message:''
    }
  },
methods:{
  searchClick(){
    this.$emit('searchContent',this.message)
  }
},
}
</script>

<style scoped>
.search{
  display: flex;
  border: 1px solid #EE1289;
  border-radius:25px ;
}
.item-content{
  flex: auto;
}
.item-content input{
  padding-left: 10px ;
  font-size: 14px;
  line-height: 20px;
  border: 1px solid 	#D9D9D9;
  border-radius: 20px 0 0 20px;
}
input:focus{
  outline: none;
}
.item-button{
  flex: auto;
  width: 25px;
  height: 25px;
  margin: auto 0;
  line-height: 25px;
  border-radius: 0 25px 25px 0;
  border: 1px solid	#D9D9D9;
  background: #fff;
}
.item-button img{
  width: 100%;
  height: 100%;
}
</style>
