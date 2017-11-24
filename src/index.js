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
import TabbarItem from './tabbar-item'
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
import Tab from './tab'
import Tabs from './tabs'
import Popup from './popup'
import Badge from './badge'
import Lazyload from './lazyload'
import Picker from './picker'
import Swipe from './swipe'
import SwipeItem from './swipe-item'
import Tag from './tag'
import Uploader from './uploader'
import Panel from './panel'
import Area from './area'
import ImagePreview from './image-preview'
import Toptip from './toptip'

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
  TabbarItem,
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
  Tab,
  Tabs,
  Popup,
  Badge,
  Picker,
  Swipe,
  SwipeItem,
  Tag,
  Uploader,
  Panel,
  Area
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
  TabbarItem,
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
  Toast,
  Tab,
  Tabs,
  Popup,
  Badge,
  Lazyload,
  Picker,
  Swipe,
  SwipeItem,
  Tag,
  Uploader,
  Panel,
  Area,
  ImagePreview,
  Toptip
}

export default {
  install
}
