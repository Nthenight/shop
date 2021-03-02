<!-- 底部工具栏 -->
<template>
  <div class="bottom-bar" v-show="cartlist.length!=0">
  <div class="check-content">
    <check-button 
    class="button" 
    :is-checked='select'
    @click.native='selectAll'/>
    <span>全选</span>
    <div class="total-price">
      总价:<span>{{totalPrice}}</span>
    </div>
  </div>
  <div class="closing" @click="payTo" >
    <span>结算</span>({{closing}})
  </div>
</div>
</template>

<script>
import CheckButton from 'components/content/checkButton/CheckButton';
import {mapGetters} from 'vuex';
import {mapActions} from 'vuex'
export default {
name:'CartBottomBar',
  data () {
    return {
    }
  },
methods:{
  ...mapActions(['buy']),
  // 判断是否全选
  selectAll(){
    if(this.select){
      this.cartlist.forEach(item=>item.check=false)
    }else{
      this.cartlist.forEach(item=>item.check=true)
    }
  },
  payTo(){
    if(this.paying.length!=0){   
    const goods=this.paying
    for (let i of goods){
      this.buy(i)
     }} else this.$toast.show('请选择要购买的商品!');
  }
},
computed:{
  ...mapGetters(['cartlist','paylist']),
  // 计算商品总价
  totalPrice(){
    return '￥'+this.cartlist.filter(item => {
      return item.check
    }).reduce((prevValue,item)=>{
      return prevValue + item.price * item.count;
    },0).toFixed(2)
  },
  // 结算商品件数
  closing(){
    return this.cartlist.filter(item => item.check).length
  },
  // 判断是否全选
  select(){
    if(this.cartlist.length===0) return false
    return !this.cartlist.some(item=>!item.check)
  },
  // 挑选被选中的商品
  paying(){
    return this.cartlist.filter(item=>item.check)
  }
},
components:{
  CheckButton,
},
}
</script>

<style scoped>
.bottom-bar{
  position: relative;
  display: flex;
  bottom: 140px;
  height: 40px;
  line-height: 40px;
  font-size: 14px;
  background: #D3D3D3;
  box-shadow: 0px -2px 1px rgba(1,1,1,.3);
}
.check-content{
  display: flex;
  /* width: 25%; */
  height: 100%;
  margin-left: 10px;
}
.check-content span{
  margin-left: 3px;
}
.button{
  width: 20px;
  height: 20px;
  margin: auto 0;
}
.total-price{
  flex: auto;
  margin-left: 20px;
  
}
.total-price span{
  margin-left: 10px;
  color: #EE0000;
}
.closing{
  margin-left: auto;
  width: 25%; 
  font-style: 14px;
  text-align: center; 
  background: red;
  color: #fff;
}
.closing span{
  margin-right: 5px; 
}
</style>
