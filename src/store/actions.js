import {
  ADD_TO_CART,
  ADD_COUNTER
} from './mutations-type'
export default {
  addCart(context, payload) {
    // 查找之前数组中是否有该商品
    let product = context.state.cartList.find(item => item.id === payload.id)
    if (product) {
      context.commit(ADD_COUNTER,product)
    } else {
      payload.count = 1;
      context.commit(ADD_TO_CART,payload)
    }
  }
}