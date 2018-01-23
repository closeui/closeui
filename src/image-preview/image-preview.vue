<template>
  <div 
    class="cl-image-preview"
    v-show="value"
    @touchstart="onTouchStart"
    @touchmove="onTouchMove"
    @touchend="onTouchEnd"
    @touchcancel="onTouchEnd">
    <cl-swipe :initialSwipe="startPosition" :showIndicators="showIndicators">
      <cl-swipe-item v-for="(item, index) in images" :key="index">
        <img :src="item" alt="" class="cl-image-preview__image">
      </cl-swipe-item>
    </cl-swipe>
  </div>
</template>
<script>
import Popup from '../mixins/popup'
import ClSwipe from '../swipe'
import ClSwipeItem from '../swipe-item'
export default {
  name: 'cl-image-preview',
  mixins: [Popup],
  props: {
    overlay: {
      default: true
    },
    lockOnScroll: {
      default: true
    },
    closeOnClickOverlay: {
      default: true
    }
  },
  data () {
    return {
      images: [],
      startPosition: 0,
      showIndicators: false
    }
  },
  beforeCreate () {},
  created () {},
  mounted () {},
  computed: {},
  methods: {
    onTouchStart (event) {
      this.touchStartTime = new Date()
      this.touchStartX = event.touches[0].clientX
      this.touchStartY = event.touches[0].clientY
      this.deltaX = 0
      this.deltaY = 0
    },
    onTouchMove (event) {
      event.preventDefault()
      this.deltaX = event.touches[0].clientX - this.touchStartX
      this.deltaY = event.touches[0].clientY - this.touchStartY
    },
    onTouchEnd (event) {
      event.preventDefault()
      const deltaTime = new Date() - this.touchStartTime
      // console.log(`time--${deltaTime}`)
      // console.log(`x--${this.deltaX}`)
      // console.log(`y--${this.deltaY}`)
      if (deltaTime < 100 && Math.abs(this.deltaX) < 20) {
        this.value = false
      }
    }
  },
  components: {
    ClSwipe,
    ClSwipeItem
  }
}
</script>
<style>
</style>
