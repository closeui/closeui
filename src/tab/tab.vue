<template>
  <div class="cl-tab__pane" :class="classNames">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'cl-tab',
  props: {
    title: {
      type: String,
      required: true
    },
    disabled: Boolean
  },
  data () {
    const nextIndex = this.$parent.tabs.length
    this.$parent.tabs.push({
      title: this.title,
      disabled: this.disabled,
      index: nextIndex
    })
    return {
      key: nextIndex
    }
  },
  beforeCreate () {},
  created () {},
  mounted () {},
  computed: {
    classNames () {
      return { 'cl-tab__pane--select': this.key === this.$parent.curActive }
    }
  },
  methods: {},
  components: {}
}
</script>
<style>
</style>
