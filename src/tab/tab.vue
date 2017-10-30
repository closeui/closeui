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
