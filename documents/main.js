import Vue from 'vue'
import App from './App'
import router from './router'
import { install as CloseUI } from 'src/index'
import { Lazyload } from 'src/index'
Vue.use(CloseUI)
Vue.use(Lazyload, {
  lazyComponent: true
})
/* eslint-disable no-new */
// new Vue({
//   router,
//   ...App
// }).$mount('#app')

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
