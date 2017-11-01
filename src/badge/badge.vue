<template>
  <span :class="['cl-badge', 'is-' + type, 'is-size-' + size]" :style="{ backgroundColor: color }">
    <slot></slot>
  </span>
</template>
<script>
export default {
  name: 'cl-badge',
  props: {
    color: String,
    type: {
      type: String,
      default: 'primary'
    },
    size: {
      type: String,
      default: 'normal'
    }
  },
  data () {
    return {

    }
  },
  beforeCreate () {},
  created () {},
  mounted () {},
  computed: {},
  methods: {},
  components: {}
}
</script>
<style>
</style>
