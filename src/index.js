import './style/index.scss'
import './style/icon/ionicons.css'
import Vue from 'vue'
import Header from './header'
import Button from './button'
import Cell from './cell'
import CellGroup from './cell-group'
import CellSwipe from './cell-swipe'
import Col from './col'
import Row from './row'
import TabItem from './tab-item'
import Tabbar from './tabbar'
import TabContainerItem from './tab-container-item'
import TabContainer from './tab-container'
import Navbar from './navbar'
import Loading from './loading'
import Search from './search'
import Switch from './switch'
import CheckList from './checklist'
import CheckBox from './checkbox'
import CheckboxGroup from './checkbox-group'
import Radio from './radio'
import RadioGroup from './radio-group'
import Field from './field'
import Icon from './icon'
import Actionsheet from './actionsheet'
import Dialog from './dialog'
import Toast from './toast'

const components = [
  Header,
  Button,
  Cell,
  CellGroup,
  CellSwipe,
  Col,
  Row,
  TabItem,
  Tabbar,
  TabContainerItem,
  TabContainer,
  Navbar,
  Loading,
  Search,
  Switch,
  CheckList,
  CheckBox,
  CheckboxGroup,
  Radio,
  RadioGroup,
  Field,
  Icon,
  Actionsheet,
  Dialog
]

const install = function () {
  if (install.installed) return
  components.map(component => {
    Vue.component(component.name, component)
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export {
  install,
  Header,
  Button,
  Cell,
  CellGroup,
  CellSwipe,
  Col,
  Row,
  TabItem,
  Tabbar,
  TabContainerItem,
  TabContainer,
  Navbar,
  Loading,
  Search,
  Switch,
  CheckList,
  CheckBox,
  CheckboxGroup,
  Radio,
  RadioGroup,
  Field,
  Icon,
  Actionsheet,
  Dialog,
  Toast
}

export default {
  install
}
