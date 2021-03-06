<template>
  <div
    v-clickoutside:touchstart="swipeMove"
    class="cl-cell-swipe"
    @click="swipeMove()"
    @touchstart="startDrag"
    @touchmove="onDrag"
    @touchend="endDrag"
    @touchcancel="endDrag">
    <div class="cl-cell-swipe__wrapper" :style="wrapperStyle" @transitionend="swipe = false">
      <div class="cl-cell-swipe__left" v-if="leftWidth">
        <slot name="left"></slot>
      </div>
      <slot></slot>
      <div class="cl-cell-swipe__right" v-if="rightWidth">
        <slot name="right"></slot>
      </div>
    </div>
  </div>
</template>
<script>
import Clickoutside from '../utils/clickoutside'
export default {
  name: 'cl-cell-swipe',
  props: {
    leftWidth: {
      type: Number,
      default: 0
    },
    rightWidth: {
      type: Number,
      default: 0
    }
  },
  directives: {
    Clickoutside
  },
  data () {
    return {
      offset: 0
    }
  },
  beforeCreate () {},
  created () {},
  mounted () {},
  computed: {
    wrapperStyle () {
      return {
        transform: `translate3d(${this.offset}px, 0, 0)`
      }
    }
  },
  methods: {
    resetSwipeStatus () {
      this.swiping = false
      this.opened = true
    },
    swipeMove (offset = 0) {
      this.offset = offset
      offset && (this.swiping = true)
    },
    swipeLeaveTransition (direction) {
      const { offset, leftWidth, rightWidth } = this
      if (direction > 0 && -offset > rightWidth * 0.4 && rightWidth > 0) {
        this.swipeMove(-rightWidth)
        this.resetSwipeStatus()
      } else if (direction < 0 && offset > leftWidth * 0.4 && leftWidth > 0) {
        this.swipeMove(leftWidth)
        this.resetSwipeStatus()
      } else {
        this.swipeMove()
      }
    },
    startDrag (event) {
      this.startX = event.changedTouches[0].pageX
      this.startY = event.changedTouches[0].pageY
    },
    onDrag (event) {
      if (this.opened) {
        !this.swiping && this.swipeMove()
        this.opened = false
        return
      }
      const offsetTop = event.changedTouches[0].pageY - this.startY
      const offsetLeft = event.changedTouches[0].pageX - this.startX
      if ((offsetLeft < 0 && -offsetLeft > this.rightWidth) || (offsetLeft > 0 && offsetLeft > this.leftWidth) || (offsetLeft > 0 && !this.leftWidth) || (offsetLeft < 0 && !this.rightWidth)) {
        return
      }
      const y = Math.abs(offsetTop)
      const x = Math.abs(offsetLeft)
      const swiping = !(x < 5 || (x >= 5 && y >= x * 1.73))
      if (swiping) {
        event.preventDefault()
        this.swipeMove(offsetLeft)
      }
    },
    endDrag () {
      if (this.swiping) {
        this.swipeLeaveTransition(this.offset > 0 ? -1 : 1)
      }
    }
  },
  components: {}
}
</script>
<style>
</style>
