<template lang="html">
  <x-cell v-clickoutside:touchstart="swipeMove"
  @click.native="swipeMove()"
  @touchstart.native="startDrag"
  @touchmove.native="onDrag"
  @touchend.native="endDrag"
  class="cl-cell-swipe"
  :title="title"
  :icon="icon"
  :label="label"
  :to="to"
  :is-link="isLink"
  ref="cell"
  :value="value">
  <div class="cl-cell-swipe-buttongroup" slot="right" ref="right">
    <a class="cl-cell-swipe-button" v-for="btn in right" :style="btn.style" @click.stop="btn.handler && btn.handler(), swipeMove()" v-html="btn.content">  
    </a>
  </div>
  <div class="cl-cell-swipe-buttongroup" slot="left" ref="left">
    <a class="cl-cell-swipe-button" v-for="btn in left" :style="btn.style" @click.stop="btn.handler && btn.handler(), swipeMove()" v-html="btn.content">  
    </a>
  </div>
  <slot></slot>
  <span v-if="$slots.title" slot="title">
    <slot name="title"></slot>
  </span>
  <span v-if="$slots.icon" slot="icon">
    <slot name="icon"></slot>
  </span>
  </x-cell>
</template>

<script>
/**
 * cl-cell-swipe
 * @desc 类似ios 滑动cell 效果
 * <cl-cell-swipe
 *  :left=[{content: 'text', style: {color: 'white', backgroundColor: 'red'}, handler(e) => console.log(test)}]
 *  :right=[{content: 'allowed HTML'}]>
 *  swipe test
 * </cl-cell-swipe>
 */
import XCell from '../cell/index'
import { once } from '../utils/dom'
import Clickoutside from '../utils/clickoutside'
export default {
  name: 'cl-cell-swipe',
  props: {
    to: String,
    left: Array,
    right: Array,
    icon: String,
    title: String,
    label: String,
    isLink: Boolean,
    value: {}
  },
  data: function () {
    return {
      start: {x: 0, y: 0}
    }
  },
  computed: {},
  mounted () {
    this.wrap = this.$refs.cell.$el.querySelector('.cl-cell-wrapper')
    this.leftElm = this.$refs.left
    this.rightElm = this.$refs.right
    this.leftWrapElm = this.leftElm.parentNode
    this.rightWrapElm = this.rightElm.parentNode
    this.leftWidth = this.leftElm.getBoundingClientRect().width
    this.rightWidth = this.rightElm.getBoundingClientRect().width
    this.leftDefaultTransform = this.translate3d(-this.leftWidth - 1)
    this.rightDefaultTransform = this.translate3d(this.rightWidth)
    this.rightWrapElm.style.webkitTransform = this.rightDefaultTransform
    this.leftWrapElm.style.webkitTransform = this.leftDefaultTransform
  },
  methods: {
    resetSwipeStatus () {
      this.swiping = false
      this.opened = true
      this.offsetLeft = 0
    },
    translate3d (offset) {
      return `translate3d(${offset}px, 0, 0)`
    },
    swipeMove (offset = 0) {
      this.wrap.style.webkitTransform = this.translate3d(offset)
      this.rightWrapElm.style.webkitTransform = this.translate3d(this.rightWidth + offset)
      this.leftWrapElm.style.webkitTransform = this.translate3d(-this.leftWidth + offset)
      offset && (this.swiping = true)
    },
    swipeLeaveTransition (direction) {
      setTimeout(() => {
        this.swipeLeave = true
        // left
        if (direction > 0 && -this.offsetLeft > this.rightWidth * 0.4) {
          this.swipeMove(-this.rightWidth)
          this.resetSwipeStatus()
          return
        } else if (direction < 0 && this.offsetLeft > this.leftWidth * 0.4) {
          this.swipeMove(this.leftWidth)
          this.resetSwipeStatus()
          return
        }
        this.swipeMove(0)
        once(this.wrap, 'webkitTransitionEnd', _ => {
          this.wrap.style.webkitTransform = ''
          this.rightWrapElm.style.webkitTransform = this.rightDefaultTransform
          this.leftWrapElm.style.webkitTransform = this.leftDefaultTransform
          this.swipeLeave = false
          this.swiping = false
        })
      }, 0)
    },
    startDrag (evt) {
      evt = evt.changedTouches ? evt.changedTouches[0] : evt
      this.dragging = true
      this.start.x = evt.pageX
      this.start.y = evt.pageY
    },
    onDrag (evt) {
      if (this.opened) {
        !this.swiping && this.swipeMove(0)
        this.opened = false
        return
      }
      if (!this.dragging) {
        return
      }
      let swiping
      const e = evt.changedTouches ? evt.changedTouches[0] : evt
      const offsetTop = e.pageY - this.start.y
      const offsetLeft = this.offsetLeft = e.pageX - this.start.x
      if ((offsetLeft < 0 && -offsetLeft > this.rightWidth) || (offsetLeft > 0 && offsetLeft > this.leftWidth) || (offsetLeft > 0 && !this.leftWidth) || (offsetLeft < 0 && !this.rightWidth)) {
        return
      }
      const y = Math.abs(offsetTop)
      const x = Math.abs(offsetLeft)
      swiping = !(x < 5 || (x >= 5 && y >= x * 1.73))
      if (!swiping) {
        return
      }
      evt.preventDefault()
      this.swipeMove(offsetLeft)
    },
    endDrag () {
      if (!this.swiping) {
        return
      }
      this.swipeLeaveTransition(this.offsetLeft > 0 ? -1 : 1)
    }
  },
  directives: {
    Clickoutside
  },
  components: {
    XCell
  }
}
</script>

<style lang="scss">
@import "../style/base.scss";

.cl-cell-swipe-buttongroup {
  height: 100%;
}
.cl-cell-swipe-button {
  height: 100%;
  display: inline-block;
  padding: 0 10px;
  line-height: 48px;
}
.cl-cell-wrapper {
  position: relative;
}

.cl-cell-wrapper, .cl-cell-left, .cl-cell-right {
  transition: transform 150ms ease-in-out;
}
</style>
