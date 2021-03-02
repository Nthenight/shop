<!-- 勾选按钮 -->
<template>
  <div >
  <div class="check-button" :class="{check: isChecked}"></div>
</div>
</template>

<script>
export default {
name:'CheckButton',
  data () {
    return {
    }
  },
props:{
  isChecked:{
    type:Boolean,
    default: false
  }
},
}
</script>

<style scoped>
.check-button {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 2px solid #A1A1A1;
}
.check{
  background: #ff0000;
  border-color: var(--color-tint);
}
</style>
