<template>
  <div :class="`${prefix}-row`"
    :style="style">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'cl-col',
  props: {
    prefix: {
      type: String,
      default: 'cl'
    },
    gutter: {
      type: [Number, String],
      default: 0
    }
  },
  data () {
    return {

    }
  },
  beforeCreate () {},
  created () {},
  mounted () {},
  computed: {
    style () {
      const margin = `-${Number(this.gutter) / 2}px`
      return this.gutter ? { marginLeft: margin, marginRight: margin } : {}
    }
  },
  methods: {},
  components: {}
}
</script>
<style>
</style>
