<template>
  <div class="cl-swipe-item" :style="style">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'cl-swipe-item',
  data () {
    return {
      offset: 0
    }
  },
  beforeCreate () {
    this.$parent.swipes.push(this)
  },
  created () {},
  destroyed () {
    this.$parent.swipes.splice(this.$parent.swipes.indexOf(this), 1)
  },
  mounted () {},
  computed: {
    style () {
      return {
        width: this.$parent.width + 'px',
        transform: `translate3d(${this.offset}px, 0, 0)`
      }
    }
  },
  methods: {},
  components: {}
}
</script>
<style>
</style>
