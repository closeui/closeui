<template lang="html">
  <a class="cl-tab-item" @click="$parent.$emit('input', id)" :class="{'is-selected': $parent.value === id}">
    <div class="cl-tab-item-icon"><slot name="icon"></slot></div>
    <div class="cl-tab-item-label"><slot></slot></div>
  </a>
</template>

<script>
/**
 * cl-tab-item
 * @desc 搭配tabbar 或 navbar 使用
 * @param {*} id - 选中后的返回值，任意类型
 * @param {slot} [icon] - icon 图标
 * @param {slot} - 文字
 * @example
 * <cl-tab-item>
 *  <img slot="icon" src="http://placehold.it/100x100" alt=""/>
 *  订单
 * </cl-tab-item>
 */
export default {
  name: 'cl-tab-item',
  props: ['id'],
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
.cl-tab-item {
  display: block;
  padding: .7rem 0;
  flex: 1;
  text-decoration: none;
}
.cl-tab-item-icon {
  width: 2.4rem;
  height: 2.4rem;
  margin: 0 auto .5rem;
  &:empty {
    display: none;
  }
  & > * {
    display: block;
    width: 100%;
    height: 100%;
  }
}
.cl-tab-item-label {
  color: inherit;
  font-size: $tab-item-font-size;
  line-height: 1;
}
</style>
