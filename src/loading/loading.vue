<template>
  <span><component :is="spinner"></component></span>
</template>
<script>
/**
 * cl-loading
 * @param {(string|number)} [type=snake] - 显示类型，传入类型名或类型id, 'snake', 'double-bounce', 'triple-bounce', 'fading-circle'
 * @param {number} size - 尺寸
 * @param {string} color - 颜色
 *
 * @example
 * <cl-loading type="snake"></cl-loading>
 *
 * <cl-loading :size="30" color="#999"></cl-loading>
 */
const SPINNERS = [
  'snake',
  'double-bounce',
  'triple-bounce',
  'fading-circle'
]
const parseSpinner = function (index) {
  if ({}.toString.call(index) === '[object Number]') {
    if (SPINNERS.length <= index) {
      console.warn(`'${index}' spinner not found, use the default spinner`)
      index = 0
    }
    return SPINNERS[index]
  }
  if (SPINNERS.indexOf(index) === -1) {
    console.warn(`'${index}' spinner not found, use the default spinner`)
    index = SPINNERS[0]
  }
  return index
}
import SpinnerSnake from './spinner/snake'
import SpinnerDoubleBounce from './spinner/double-bounce'
import SpinnerTripleBounce from './spinner/triple-bounce'
import SpinnerFadingCircle from './spinner/fading-circle'
export default {
  name: 'cl-loading',
  props: {
    type: {
      default: 0
    },
    size: {
      type: Number,
      default: 28
    },
    color: {
      type: String,
      default: '#ccc'
    }
  },
  data () {
    return {

    }
  },
  computed: {
    spinner () {
      return `spinner-${parseSpinner(this.type)}`
    }
  },
  components: {
    SpinnerSnake,
    SpinnerDoubleBounce,
    SpinnerTripleBounce,
    SpinnerFadingCircle
  }
}
</script>
<style>
</style>
