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
.groupcell-border {
  content: " ";
  position: absolute;
  left: 0;
  right: 0;
  height: 1px;
  border-top: 1px solid $grey-200;
  color: $grey-200;
  -webkit-transform-origin: 0 0;
  transform-origin: 0 0;
  -webkit-transform: scaleY(0.5);
  transform: scaleY(0.5);
  z-index: 2;
}
.cl-cell-group {
  background-color: $color-white;
  position: relative;
  &::before {
    top: 0;
    @extend .groupcell-border;
  }
  &::after {
    bottom: 0;
    @extend .groupcell-border;
  }
}
</style>
