<template>
  <div class="bz-search">
    <div class="bz-searchbar">
      <div class="bz-searchbar-inner">
        <i class="bzui bzui-search"></i>
        <input type="search" ref="input" @click="visible = true" v-model="currentValue" :placeholder="placeholder" class="bz-searchbar-core">
      </div>
      <a @click="visible = false, currentValue = ''" v-show="visible" v-text="cancelText" class="bz-searchbar-cancel"></a>
    </div>
    <div class="bz-search-list" v-show="show || currentValue">
      <div class="bz-search-list-wrap">
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
 * bz-search
 * @param {string} value - 绑定值
 * @param {string} [cancel-text=取消] - 取消按钮文字
 * @param {string} [placeholder] - 搜索框占位内容
 * @param {boolean} [autofocus=false] - 自动focus
 * @param {boolean} [show=false] - 始终显示列表
 * @param {string[]} [result] - 结果列表
 * @param {slot} 结果列表
 * <bz-search :value="value" :result="result"></bz-search>
 * <bz-search :value="value">
 *    <bz-cell v-for="item in result" :title="item"></bz-cell>
 * </bz-search>
 */
export default {
  name: 'bz-search',
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
.bz-search {
  width: 100%;
  height: 100vh;
}
.bz-searchbar {
  position: relative;
  align-items: center;
  background-color: $color-grey;
  box-sizing: border-box;
  display: flex;
  padding: .8rem 1rem;
  z-index: 1;
}
.bz-searchbar-inner {
  align-items: center;
  background-color: $color-white;
  border-radius: .2rem;
  display: flex;
  flex: 1;
  height: 2.8rem;
  padding: .4rem .6rem;
  .bzui-search {
    font-size: 1.2rem;
    color: $color-grey;
  }
}
.bz-searchbar-core {
  appearance:none;
  border: 0;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  outline: 0;
}
.bz-searchbar-cancel {
  color: $color-blue;
  margin-left: 1rem;
  text-decoration: none;
}
.bz-search-list {
  overflow: auto;
  padding-top: 4.4rem;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}
</style>
