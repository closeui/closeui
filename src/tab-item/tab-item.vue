<template lang="html">
  <a class="bz-tab-item" @click="$parent.$emit('input', id)" :class="{'is-selected': $parent.value === id}">
    <div class="bz-tab-item-icon"><slot name="icon"></slot></div>
    <div class="bz-tab-item-label"><slot></slot></div>
  </a>
</template>

<script>
/**
 * bz-tab-item
 * @desc 搭配tabbar 或 navbar 使用
 * @param {*} id - 选中后的返回值，任意类型
 * @param {slot} [icon] - icon 图标
 * @param {slot} - 文字
 * @example
 * <bz-tab-item>
 *  <img slot="icon" src="http://placehold.it/100x100" alt=""/>
 *  订单
 * </bz-tab-item>
 */
export default {
  name: 'bz-tab-item',
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
.bz-tab-item {
  display: block;
  padding: .7rem 0;
  flex: 1;
  text-decoration: none;
}
.bz-tab-item-icon {
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
.bz-tab-item-label {
  color: inherit;
  font-size: $tab-item-font-size;
  line-height: 1;
}
</style>
