<template lang="html">
  <div :class="['cl-tabbar', 'cl-hairline--top-bottom', { 'cl-tabbar--fixed': fixed }]">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'cl-tabbar',
  props: {
    fixed: {
      type: Boolean,
      default: true
    },
    value: {}
  },
  data: function () {
    return {
      items: []
    }
  },
  computed: {},
  watch: {
    items () {
      this.setActiveItem()
    },
    value () {
      this.setActiveItem()
    }
  },
  methods: {
    setActiveItem () {
      this.items.forEach((item, index) => {
        item.active = index === this.value
      })
    },
    onChange (active) {
      this.$emit('input', active)
      this.$emit('change', active)
    }
  },
  components: {}
}
</script>

<style lang="scss">
</style>
