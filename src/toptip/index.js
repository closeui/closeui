import Vue from 'vue'
import ToptipComponent from './toptip'

let instance

const defaultOptions = {
  visible: true,
  type: 'error',
  duration: 3000,
  clear: () => {
    instance.visible = false
  }
}

const createInstance = () => {
  if (!instance) {
    const ToptipConstructor = Vue.extend(ToptipComponent)
    instance = new ToptipConstructor({
      el: document.createElement('div')
    })
    document.body.appendChild(instance.$el)
  }
}

const Toptip = (options = {}) => {
  createInstance()
  options = typeof options === 'string' ? { message: options } : options
  options = { ...defaultOptions, ...options }
  Object.assign(instance, options)
  clearTimeout(instance.timer)
  if (options.duration !== 0) {
    instance.timer = setTimeout(() => {
      instance.clear()
    }, options.duration)
  }
  return instance
}

const createMethod = type => (options = {}) => Toptip({
  type,
  message: typeof options === 'string' ? options : options.message,
  ...options
})

Toptip.success = createMethod('success')
Toptip.clear = () => {
  instance && instance.clear()
}

export default Toptip

export {
  ToptipComponent as Toptip
}
