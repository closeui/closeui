<template lang="html">
  <button 
  :type="nativeType"
  class="bz-button"
  :class="['bz-button--' + type, 'bz-button--' + size, {'is-disabled': disabled, 'is-plain': plain}]"
  @click="handleClick"
  :disabled="disabled">
    <span class="bz-button-icon" v-if="icon || $slots.icon">
      <slot name="icon">
        <i class="bzui" :class="'bzui-' + icon" v-if="icon"></i>
      </slot>
    </span>
    <label class="bz-button-text"><slot></slot></label>
  </button>
</template>

<script>
/**
 * bz-button
 * @param {string} [type=default] - 显示类型，接受 default, primary, danger
 * @param {boolean} [disabled=false] - 禁用
 * @param {boolean} [plain=false] - 幽灵按钮
 * @param {string} [size=normal] - 尺寸，normal, small, large
 * @param {string} [native-type] - 原生 type 属性
 * @param {string} [icon] - 图标, more, back, 或者自定义图标（传入不带前缀的图标类名， 最后拼接成.bz-xxx)
 * @param {slot} - 显示文本
 * @param {slot} [icon] 显示图标
 *
 * @example
 * <bz-button size="large" icon="back" type="primary">button</bz-button>
 */
export default {
  name: 'bz-button',
  props: {
    icon: String,
    disabled: Boolean,
    nativeType: String,
    plain: Boolean,
    type: {
      type: String,
      default: 'default',
      validator (value) {
        return [
          'default',
          'danger',
          'primary'
        ].indexOf(value) > -1
      }
    },
    size: {
      type: String,
      default: 'normal',
      validator (value) {
        return [
          'small',
          'normal',
          'large'
        ].indexOf(value) > -1
      }
    }
  },
  data: function () {
    return {
    }
  },
  computed: {},
  methods: {
    handleClick (evt) {
      this.$emit('click', evt)
    }
  },
  components: {}
}
</script>

<style lang="scss">
@import "../style/base.scss";
.bz-button {
  appearance: none;
  border-radius: .4rem;
  border: 0;
  color: inherit;
  display: block;
  font-size: 1.8rem;
  height: 4.1rem;
  outline: 0;
  overflow: hidden;
  position: relative;
  text-align: center;
  &::after {
    background-color: #000;
    content: '';
    opacity: 0;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
  
  &:not(.is-disabled):active:after {
    opacity: .4;
  }
  
  &.is-disabled {
    opacity: .6;
  } 
}

.bz-button-icon {
  vertical-align: middle;
  display: inline-block;
}
.bz-button--default {
  color: $button-default-color;
  background-color: $button-default-background-color;
  box-shadow: $button-default-box-shadow;
  &.is-plain {
    border: .1rem solid $button-default-plain-color;
    background-color: transparent;
    box-shadow: none;
    color: $button-default-plain-color;
  }
}
.bz-button--primary {
  color: $button-primary-color;
  background-color: $button-primary-background-color;
  &.is-plain {
    border: .1rem solid $button-primary-background-color;
    background-color: transparent;
    color: $button-primary-background-color;
  }
}
.bz-button--danger {
  color: $button-danger-color;
  background-color: $button-danger-background-color;
  &.is-plain {
    border: .1rem solid $button-danger-background-color;
    background-color: transparent;
    color: $button-danger-background-color;
  }
}

.bz-button--large {
  display: block;
  width: 100%;
}
.bz-button--nomal {
  display: inline-block;
  padding: 0 1.2rem;
}
.bz-button--small {
  display: inline-block;
  font-size: 1.4rem;
  padding: 0 1.2rem;
  height: 3.3rem;
}

</style>
