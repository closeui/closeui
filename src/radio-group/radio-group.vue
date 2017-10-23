<template>
  <div class="cl-radio-group">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'cl-radio-group',
  props: {
    disabled: Boolean,
    value: {}
  },
  data () {
    return {

    }
  },
  beforeCreate () {},
  created () {},
  mounted () {},
  watch: {
    value (val) {
      this.$emit('change', val)
    }
  },
  computed: {
  },
  methods: {
  },
  components: {}
}
</script>
<style lang="scss">
@import "../style/base.scss";
.cl-radio-group {
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
