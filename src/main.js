import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import toast from 'components/content/toast/index';
// import message from 'components/content/messageBox/index';


Vue.config.productionTip = false

Vue.use(toast)
// Vue.use(message)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
