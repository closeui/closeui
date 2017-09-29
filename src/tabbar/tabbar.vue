<template lang="html">
  <div class="cl-tabbar" :class="{'is-fixed': fixed}">
    <slot></slot>
  </div>
</template>

<script>
/**
 * cl-tabbar
 * @desc 底部tab, 依赖 tab-item
 * @param {boolean} [fixed=false] - 固定底部
 * @param {*} value - 返回 item component 传入的 id
 *
 * <cl-tabbar v-model="selected">
 *  <cl-tab-item id="订单">
 *    <img src="http://placehold.it/100x100" slot="icon" alt=""/>
 *    <span slot="label">订单</span>
 *  </cl-tab-item>
 * </cl-tabbar>
 * <cl-tabbar v-model="selected" fixed>
 *  <cl-tab-item id="['传入数组','也可以']">
 *    <img src="http://placehold.it/100x100" slot="icon" alt=""/>
 *    <span slot="label">订单</span>
 *  </cl-tab-item>
 * </cl-tabbar>
 */
export default {
  name: 'cl-tabbar',
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
.cl-tabbar {
  background-image: linear-gradient(180deg, $color-grey, $color-grey 50%, transparent 50%);
  background-size: 100% .1rem;
  background-repeat: no-repeat;
  background-position: top left;
  position: relative;
  background-color: $tabbar-background-color;
  display: flex;
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  text-align: center;
  &.is-fixed {
    position: fixed;
    right: 0;
    bottom: 0;
    left: 0;
  }
  > .cl-tab-item.is-selected {
    background-color: $tabbar-tab-item-selected-background-color;
    color: $tabbar-tab-item-selected-color;
  }
}
</style>
