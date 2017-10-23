<template>
  <div :class="`${prefix}-row`"
    :style="style">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'cl-row',
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
<style lang="scss">
.cl-row {
  &:after {
    content: '';
    display: table;
    clear: both;
  }
}
</style>
