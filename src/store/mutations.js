import {
  ADD_TO_CART,
  ADD_COUNTER
} from './mutations-type'
export default {
  [ADD_COUNTER](state, payload) {
    payload.count++;
  },
  [ADD_TO_CART](state, payload) {
    payload.check = true;
    state.cartList.push(payload);
  },
  payCount(state, payload) {
    payload.count++;
  },
  pay(state, payload) {
    payload.check = true;
    state.payList.push(payload);
  },
  delet(state, payload) {
    state.cartList.splice(state.cartList.indexOf(payload),1)
  },
  returned(state, payload) {
    state.payList.splice(state.payList.indexOf(payload),1)
  }
}