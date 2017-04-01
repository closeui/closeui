import Vue from 'vue'
import App from './App'
import router from './router'
import { install as Bzui } from 'src/index'

Vue.use(Bzui)
/* eslint-disable no-new */
new Vue({
  router,
  ...App
}).$mount('#app')
