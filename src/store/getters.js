export default {
  cartLength(state) {
    return state.cartList.length;
  },
  cartlist(state) {
    return state.cartList;
  },
  paylist(state) {
    return state.payList;
  },
  payLength(state) {
    return state.payList.length;
  }
}