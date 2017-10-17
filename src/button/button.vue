<template lang="html">
  <button 
  :type="nativeType"
  class="cl-button"
  :class="['cl-button--' + type, 'cl-button--' + size, {'is-disabled': disabled, 'is-plain': plain}]"
  @click="handleClick"
  :disabled="disabled">
    <span class="cl-button-icon" v-if="icon || $slots.icon">
      <slot name="icon">
        <i class="cl-icon" :class="'ion-' + icon" v-if="icon"></i>
      </slot>
    </span>
    <span class="cl-button-icon" v-if="loading">
      <i class="cl-icon__loading icon-loader ion-load-d"></i>
    </span>
    <label class="cl-button-text"><slot></slot></label>
  </button>
</template>

<script>
/**
 * cl-button
 * @param {string} [type=default] - 显示类型，接受 default, primary, danger
 * @param {boolean} [disabled=false] - 禁用
 * @param {boolean} [plain=false] - 幽灵按钮
 * @param {string} [size=normal] - 尺寸，normal, small, large
 * @param {string} [native-type] - 原生 type 属性
 * @param {string} [icon] - 图标, more, back, 或者自定义图标（传入不带前缀的图标类名， 最后拼接成.cl-xxx)
 * @param {slot} - 显示文本
 * @param {slot} [icon] 显示图标
 *
 * @example
 * <cl-button size="large" icon="back" type="primary">button</cl-button>
 */
export default {
  name: 'cl-button',
  props: {
    icon: String,
    disabled: Boolean,
    nativeType: String,
    plain: Boolean,
    loading: {
      type: Boolean,
      default: false
    },
    circle: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: 'default',
      validator (value) {
        return [
          'default',
          'danger',
          'primary',
          'warning'
        ].indexOf(value) > -1
      }
    },
    size: {
      type: String,
      default: 'normal'
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
.cl-button {
  appearance: none;
  border-radius: .4rem;
  border: 0;
  color: inherit;
  display: block;
  font-size: 1.8rem;
  padding: $btn-padding-base;
  line-height: 1.5;
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

.cl-button-icon {
  display: inline-block;
}
.cl-button.is-plain {
  &::after {
    background-color: rgb(229, 229, 229);
  }
}
.cl-button--default {
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
.cl-button--primary {
  color: $button-primary-color;
  background-color: $button-primary-background-color;
  &.is-plain {
    border: .1rem solid $button-primary-background-color;
    background-color: transparent;
    color: $button-primary-background-color;
  }
}
.cl-button--danger {
  color: $button-danger-color;
  background-color: $button-danger-background-color;
  &.is-plain {
    border: .1rem solid $button-danger-background-color;
    background-color: transparent;
    color: $button-danger-background-color;
  }
}
.cl-button--warning {
  color: $button-warning-color;
  background-color: $button-warning-background-color;
  &.is-plain {
    border: .1rem solid $button-warning-background-color;
    background-color: transparent;
    color: $button-warning-background-color;
  }
}
.cl-button--large {
  display: block;
  width: 100%;
}
.cl-button--nomal {
  display: inline-block;
  padding: 0 1.2rem;
}
.cl-button--small {
  display: inline-block;
  font-size: 1.4rem;
  padding: 0 1.2rem;
  height: 3.3rem;
}

.cl-icon__loading {
  display: inline-block;
  line-height: 1;
  animation: loadingCircle 1s linear infinite;
}

@keyframes loadingCircle {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(1turn);
  }
}

</style>
