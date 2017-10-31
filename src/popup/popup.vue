<template>
  <transition :name="currentTransition">
    <div v-show="value" class="cl-popup" :class="[position ? 'cl-popup--' + position : '']">
      <slot></slot>
    </div>
  </transition>
</template>
<script>
import Popup from '../mixins/popup'
export default {
  name: 'cl-popup',
  mixins: [Popup],
  props: {
    transition: String,
    overlay: {
      default: true
    },
    lockOnScroll: {
      default: false
    },
    closeOnClickOverlay: {
      default: true
    },
    position: {
      type: String,
      default: ''
    }
  },
  data () {
    const transition = this.transition || (this.position === '' ? 'popup-fade' : `popup-slide-${this.position}`)
    return {
      currentValue: false,
      currentTransition: transition
    }
  },
  beforeCreate () {},
  created () {},
  mounted () {
    if (this.value) {
      this.open()
    }
  },
  computed: {},
  methods: {},
  components: {}
}
</script>
<style>
</style>
