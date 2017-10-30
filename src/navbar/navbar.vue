<template lang="html">
  <div class="cl-navbar" :class="{'is-fixed': fixed}">
    <slot></slot>
  </div>
</template>

<script>
/**
 * cl-navbar
 * @desc 顶部 tab, 依赖 tab-item
 * @param {boolean} [fixed=false] - 固定底部
 * @param {*} selected - 返回 item component 传入的value
 *
 * <cl-navbar :selected="selected">
 *  <cl-tab-item value="首页">
 *    <span slot="label">首页</span>
 *  </cl-tab-item>
 * </cl-navbar>
 */
export default {
  name: 'cl-navbar',
  props: {
    fixed: Boolean,
    value: {}
  },
  data: function () {
    return {
    }
  },
  computed: {},
  methods: {},
  components: {}
}
</script>

<style lang="scss">
@import "../style/base.scss";
.cl-navbar {
  background-color: $color-white;
  display: flex;
  text-align: center;
  &.is-fixed {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: $z-index-normal;
  }
  
  .cl-tab-item {
    padding: 17px 0;
    font-size: 15px;
    &:last-child {
      border-right: 0;
    }
    &.is-selected {
      border-bottom: 3px solid $color-blue;
      color: $color-blue;
      margin-bottom: -3px;
    }
  }
}

</style>
