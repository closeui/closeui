<template>
  <div :class="['cl-tabbar-item', { 'cl-tabbar-item--active': active }]" @click="onClick">
    <div :class="['cl-tabbar-item__icon', { 'cl-tabbar-item__icon-dot': dot }]">
      <slot name="icon">
        <cl-icon v-if="icon" :name="icon"></cl-icon>
      </slot>
      <div v-if="info" class="cl-tabbar-item__info">{{ info }}</div>
    </div>
    <div class="cl-tabbar-item__text">
      <slot></slot>
    </div>
  </div>
</template>
<script>
import ClIcon from '../icon'
export default {
  name: 'cl-tabbar-item',
  props: {
    icon: String,
    dot: Boolean,
    info: String
  },
  data () {
    return {
      active: false
    }
  },
  beforeCreate () {
    this.$parent.items.push(this)
  },
  destroyed () {
    this.$parent.items.splice(this.$parent.items.indexOf(this), 1)
  },
  created () {},
  mounted () {},
  computed: {},
  methods: {
    onClick () {
      this.$parent.onChange(this.$parent.items.indexOf(this))
    }
  },
  components: {
    ClIcon
  }
}
</script>
<style>
</style>
