<template>
  <div 
    class="cl-image-preview"
    v-show="value"
    @touchstart="onTouchStart"
    @touchmove="onTouchMove"
    @touchend="onTouchEnd"
    @touchcancel="onTouchEnd">
    <cl-swipe :initialSwipe="startPosition">
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
      startPosition: 0
    }
  },
  beforeCreate () {},
  created () {},
  mounted () {},
  computed: {},
  methods: {
    
  },
  components: {
    ClSwipe,
    ClSwipeItem
  }
}
</script>
<style>
</style>
