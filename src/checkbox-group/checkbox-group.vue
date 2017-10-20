<template>
  <div class="cl-checkbox-group">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'cl-checkbox-group',
  props: {
    value: {},
    disabled: Boolean
  },
  data () {
    return {}
  },
  beforeCreate () {},
  created () {},
  mounted () {},
  computed: {},
  watch: {
    value (val) {
      this.$emit('change', val)
    }
  },
  methods: {},
  components: {}
}
</script>
<style>
</style>
