<template lang="html">
  <header class="cl-header" :class="{'is-fixed': fixed}">
    <div class="cl-header-button is-left">
      <slot name="left"></slot>
    </div>
    <h1 class="cl-header-title" v-text="title"></h1>
    <div class="cl-header-button is-right">
      <slot name="right"></slot>
    </div>
  </header>
</template>

<script>
/**
 * cl-header
 * @desc 顶部导航
 * @param {boolean} [fixed=false] - 固定顶部
 * @param {string} [title] - 标题
 * @param {slot} [left] - 显示在左侧区域
 * @param {slot} [right] - 显示在右侧区域
 * @example
 * <cl-header title="这里是标题" fixed>
 *  <cl-button slot="left" icon="back">返回</cl-button>
 *  <cl-button slot="right" icon="more">返回</cl-button>
 * </cl-header>
 */
export default {
  name: 'cl-header',
  props: {
    fixed: Boolean,
    title: String
  }
}
</script>

<style lang="scss">
@import "../style/base.scss";
.cl-header {
  align-items: center;
  background-color: $color-blue;
  box-sizing: border-box;
  color: $color-white;
  display: flex;
  font-size: 14px;
  height: $header-height;
  line-height: 1;
  padding: 0 10px;
  position: relative;
  text-align: center;
  white-space: nowrap;
  .cl-button {
    background-color: transparent;
    border: 0;
    box-shadow: none;
    color: inherit;
    display: inline-block;
    padding: 0;
    font-size: inherit;
    &::after {
      content: none;
    }
  }
  
  .cl-header-button {
    flex: .5;
    
    > a {
      color: inherit;
    }
    
    &.is-left {
      text-align: left;
    }
    &.is-right {
      text-align: right;
    }
  }
  
  .cl-header-title {
    font-size: inherit;
    font-weight: normal;
    flex: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  &.is-fixed {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: $z-index-normal
  }
}
</style>
