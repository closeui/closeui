import Vue from 'vue'
const isServer = Vue.prototype.$isServer

export default {
  debounce (func, wait, immediate) {
    let timeout
    let args
    let context
    let timestamp
    let result
    return function () {
      context = this
      args = arguments
      timestamp = new Date()
      const later = () => {
        const last = (new Date()) - timestamp
        if (last < wait) {
          timeout = setTimeout(later, wait - last)
        } else {
          timeout = null
          result = func.apply(context, args)
        }
      }
      if (!timeout) {
        timeout = setTimeout(later, wait)
      }
      return result
    }
  },
  // 找到最近的触发滚动事件的元素
  getScrollEventTarget (element) {
    let currentNode = element
    while (currentNode && currentNode.tagName !== 'HTML' && currentNode.tagName !== 'BODY' && currentNode.nodeType === 1) {
      const overflowY = this.getComputedStyle(currentNode).overflowY
      if (overflowY === 'scroll' || overflowY === 'auto') {
        return currentNode
      }
      currentNode = currentNode.parentNode
    }
    return window
  },
  // 判断元素是否被加入到页面节点内
  isAttached (element) {
    let currentNode = element.parentNode
    while (currentNode) {
      if (currentNode.tagName === 'HTML') {
        return true
      }
      if (currentNode.nodeType === 11) {
        return false
      }
      currentNode = currentNode.parentNode
    }
    return false
  },
  // 获取滚动高度
  getScrollTop (element) {
    return 'scrollTop' in element ? element.scrollTop : element.pageYOffset
  },
  // 设置滚动高度
  setScrollTop (element, value) {
    'scrollTop' in element ? element.scrollTop = value : element.scrollTo(element.scrollX, value)
  },
  // 获取元素距离顶部高度
  getElementTop (element) {
    return (element === window ? 0 : element.getBoundingClientRect().top) + this.getScrollTop(window)
  },
  getVisibleHeight (element) {
    return element === window ? element.innerHeight : element.getBoundingClientRect().height
  },
  getComputedStyle: !isServer && document.defaultView.getComputedStyle.bind(document.defaultView)
}
