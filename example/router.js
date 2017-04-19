import Vue from 'vue'
import Router from 'vue-router'

import Demo from './views/demos'
import Header from './views/header'
import Button from './views/button'
import Cell from './views/cell'
import CellSwipe from './views/cell-swipe'
import Tabbar from './views/tabbar'
import Navbar from './views/navbar'
import TabContainer from './views/tab-container'
import Spinner from './views/spinner'
Vue.use(Router)

const router = new Router({
  mode: 'hash',
  routes: [
    { path: '/', component: Demo, name: 'demo' },
    { path: '/header', component: Header, name: 'header' },
    { path: '/button', component: Button, name: 'button' },
    { path: '/cell', component: Cell, name: 'cell' },
    { path: '/cellswipe', component: CellSwipe, name: 'cellswipe' },
    { path: '/tabbar', component: Tabbar, name: 'tabbar' },
    { path: '/navbar', component: Navbar, name: 'navbar' },
    { path: '/tab-container', component: TabContainer, name: 'tab-container' },
    { path: '/spinner', component: Spinner, name: 'spinner' },
    { path: '*', redirect: '/' }
  ]
})

router.beforeEach((to, from, next) => {
  window.scrollTo(0, 0) // scroll to top
  next()
})
export default router
