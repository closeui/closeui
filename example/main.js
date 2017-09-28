import Vue from 'vue'
import App from './App'
import router from './router'
import { install as CloseUI } from 'src/index'

Vue.use(CloseUI)
/* eslint-disable no-new */
new Vue({
  router,
  ...App
}).$mount('#app')
