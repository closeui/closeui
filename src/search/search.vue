<template>
  <div class="cl-search">
    <div class="cl-searchbar">
      <div class="cl-searchbar-inner">
        <i class="bzui bzui-search"></i>
        <input type="search" ref="input" @click="visible = true" v-model="currentValue" :placeholder="placeholder" class="cl-searchbar-core">
      </div>
      <a @click="visible = false, currentValue = ''" v-show="visible" v-text="cancelText" class="cl-searchbar-cancel"></a>
    </div>
    <div class="cl-search-list" v-show="show || currentValue">
      <div class="cl-search-list-wrap">
        <slot>
          <x-cell v-for="(item, index) in result" :key="index" :title="item"></x-cell>
        </slot>
      </div>
    </div>
  </div>
</template>
<script>
import XCell from '../cell'
/**
 * cl-search
 * @param {string} value - 绑定值
 * @param {string} [cancel-text=取消] - 取消按钮文字
 * @param {string} [placeholder] - 搜索框占位内容
 * @param {boolean} [autofocus=false] - 自动focus
 * @param {boolean} [show=false] - 始终显示列表
 * @param {string[]} [result] - 结果列表
 * @param {slot} 结果列表
 * <cl-search :value="value" :result="result"></cl-search>
 * <cl-search :value="value">
 *    <cl-cell v-for="item in result" :title="item"></cl-cell>
 * </cl-search>
 */
export default {
  name: 'cl-search',
  props: {
    value: String,
    autofocus: Boolean,
    show: Boolean,
    cancelText: {
      default: '取消'
    },
    placeholder: {
      default: '搜索'
    },
    result: Array
  },
  data () {
    return {
      visible: false,
      currentValue: this.value
    }
  },
  watch: {
    currentValue (val) {
      this.$emit('input', val)
    },
    value (val) {
      this.currentValue = val
    }
  },
  mounted () {
    this.autofocus && this.$refs.input.focus()
  },
  components: {
    XCell
  }
}
</script>
<style lang="scss">
@import "../style/base.scss";
.cl-search {
  width: 100%;
  height: 100vh;
}
.cl-searchbar {
  position: relative;
  align-items: center;
  background-color: $color-grey;
  box-sizing: border-box;
  display: flex;
  padding: 8px 10px;
  z-index: 1;
}
.cl-searchbar-inner {
  align-items: center;
  background-color: $color-white;
  border-radius: 2px;
  display: flex;
  flex: 1;
  height: 28px;
  padding: 4px 6px;
  .bzui-search {
    font-size: 12px;
    color: $color-grey;
  }
}
.cl-searchbar-core {
  appearance:none;
  border: 0;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  outline: 0;
}
.cl-searchbar-cancel {
  color: $color-blue;
  margin-left: 10px;
  text-decoration: none;
}
.cl-search-list {
  overflow: auto;
  padding-top: 44px;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}
</style>
