import './style/base.scss'
import './style/font/iconfont.css'
import Vue from 'vue'
import Header from './header'
import Button from './button'
import Cell from './cell'
import CellSwipe from './cell-swipe'
import TabItem from './tab-item'
import Tabbar from './tabbar'

const components = {
  Header,
  Button,
  Cell,
  CellSwipe,
  TabItem,
  Tabbar
}

const install = function () {
  Object.keys(components).forEach((key) => {
    Vue.component(components[key].name, components[key])
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install
}

export {
  install
}
