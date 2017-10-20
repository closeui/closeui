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
<style lang="scss">
@import "../style/base.scss";
.cl-checkbox-group {
  .cl-cell-wrapper {
    display: flex;
    .cl-cell-title {
      flex: none;
    }
    .cl-cell-value {
      flex: 1;
      .cl-checkbox {
        width: 100%;
      }
    }
  }
}
</style>
