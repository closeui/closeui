import Infinitescroll from './directive.js'

const install = function (Vue) {
  Vue.directive('InfinitescrollLower', Infinitescroll('lower'))
  Vue.directive('InfinitescrollUpper', Infinitescroll('upper'))
}

Infinitescroll.install = install

export default Infinitescroll
