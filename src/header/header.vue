<template lang="html">
  <header class="bz-header" :class="{'is-fixed': fixed}">
    <div class="bz-header-button is-left">
      <slot name="left"></slot>
    </div>
    <h1 class="bz-header-title" v-text="title"></h1>
    <div class="bz-header-button is-right">
      <slot name="right"></slot>
    </div>
  </header>
</template>

<script>
export default {
  name: 'bz-header',
  props: {
    fixed: Boolean,
    title: String
  }
}
</script>

<style lang="scss">
@import "../style/base.scss";
.bz-header {
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
  .bz-button {
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
  
  .bz-header-button {
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
  
  .bz-header-title {
    font-size: inherit;
    font-weight: normal;
    flex: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  &.is-fixed {
    position: fixed 0 0 * 0;
    z-index: $z-index-normal
  }
}
</style>
