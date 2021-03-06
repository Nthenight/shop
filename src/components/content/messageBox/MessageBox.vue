<!-- 居中显示提示信息 -->
<template>
      <div class="show">
    <span>{{infomation}}</span>
  </div>
</template>

<script>
export default {
name:'MessageBox',
  data () {
    return {
    messageShow:false,
    infomation:''
    }
  },
methods:{
  isShow(value,message='请输入提示信息!') {
        if(value==0){
          this.messageShow=true;
          this.infomation=message;
          this.$emit('message',this.messageShow);
        }
        else {
           this.messageShow = false;
           this.$emit('message',this.messageShow);
          } 
      },
},
}
</script>

<style scoped>
.show{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  font-size: 16px;
  color: 	#A3A3A3;
}
</style>
