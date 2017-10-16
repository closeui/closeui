<template>
  <div :class="[`${prefix}-col`, {[`${prefix}-col-${span}`]: span, [`${prefix}-col-offset-${offset}`]: offset}]"
    :style="style">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'cl-col',
  props: {
    span: [Number, String],
    offset: [Number, String],
    prefix: {
      type: String,
      default: 'cl'
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
    gutter () {
      return (this.$parent && Number(this.$parent.gutter)) || 0
    },
    style () {
      const padding = `${this.gutter / 2}px`
      return this.gutter ? { paddingLeft: padding, paddingRight: padding } : {}
    }
  },
  methods: {},
  components: {}
}
</script>
<style>
</style>
