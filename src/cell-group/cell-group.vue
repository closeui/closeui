<template lang="html">
  <div class="cl-cell-group cl-hairline--top-bottom">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'cl-cell-group',
  data: function () {
    return {
    }
  },
  computed: {
  },
  ready: function () {},
  attached: function () {},
  methods: {
  },
  components: {}
}
</script>

<style lang="scss">
@import "../style/base.scss";
.cl-cell-group {
  background-color: $color-white;
}
</style>
