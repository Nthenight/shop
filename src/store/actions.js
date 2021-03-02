import {
  ADD_TO_CART,
  ADD_COUNTER
} from './mutations-type'
export default {
  addCart(context, payload) {
    return new Promise((resolve,reject)=>{
          // 查找之前数组中是否有该商品
    let product = context.state.cartList.find(item => item.id === payload.id)
    if (product) {
      context.commit(ADD_COUNTER, product);
      resolve('商品数量+1')
    } else {
      payload.count = 1;
      context.commit(ADD_TO_CART, payload);
      resolve('添加新商品')
    }
    })
  },
  pay(context, payload) {
          // 查找之前数组中是否有该商品
    let product = context.state.payList.find(item => item.id === payload.id)
    if (product) {
      context.commit('payCount', product);
    } else {
      payload.count = 1;
      context.commit('pay', payload);
    }
  },
  // 将cartList中的数据转到payList中
  buy(context, payload) {
    let cartProduct = context.state.cartList.find(item => item.id === payload.id);
    let product = context.state.payList.find(item => item.id === payload.id);
    if (cartProduct) {
      context.commit('delet',cartProduct)
    }
    if (product) {
      context.commit('payCount', product);
    } else context.commit('pay', payload);
  },
  delet(context, payload) {
    let payID = context.state.payList.find(item => item.id === payload)
    if (payID) {
      context.commit('returned', payload);
    }
  }
}