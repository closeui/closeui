<template lang="html">
  <div class="bz-tab-container"
  @touchstart="startDrag"
  @mousedown="startDrag"
  @touchmove="onDrag"
  @mousemove="endDrag"
  @touchend="endDrag">
    <div class="bz-tab-container-wrap" ref="wrap">
      <slot></slot>
    </div>
  </div>
</template>

<script>
/**
 * bz-tab-container
 * 搭配tab-container-item 使用
 * @param {number|string} [value] - 当前激活的tabId
 * @example
 * <bz-tab-container v-model="selectd">
 *  <bz-tab-container-item id="2">内容</bz-tab-container-item>
 * </bz-tab-container>
 */
import { once } from '../utils/dom'
export default {
  name: 'bz-tab-container',
  props: {
    value: {},
    swipeable: Boolean
  },
  data: function () {
    return {
      start: {x: 0, y: 0},
      swipeing: false,
      activeItems: [],
      pageWidth: 0,
      currentActive: this.value
    }
  },
  watch: {
    value (val) {
      this.currentActive = val
    },
    currentActive (val, oldValue) {
      this.$emit('input', val)
      if (!this.swipeable) {
        return
      }
      const lastIndex = arrayFindIndex(this.$children, item => item.id === oldValue)
      this.swipeLeaveTransition(lastIndex)
    }
  },
  computed: {},
  mounted () {
    if (!this.swipeable) {
      return
    }
    this.wrap = this.$refs.wrap
    this.pageWidth = this.wrap.clientWidth
    this.limitWidth = this.pageWidth / 4
  },
  methods: {
    swipeLeaveTransition (lastIndex = 0) {
      if (typeof this.index !== 'number') {
        this.index = arrayFindIndex(this.$children, item => item.id === this.currentActive)
        this.swipeMove(-lastIndex * this.pageWidth)
      }
      setTimeout(() => {
        
      })
    }
  },
  components: {}
}
</script>

<style lang="css">
</style>
