// 防抖函数的封装
export function debounce(func,delay){
  let timer = null;
  return function (...arges) {
    if (timer) clearTimeout;
    timer = setTimeout(() => {
      func.apply(this, arges);
     },delay)
  }
}
