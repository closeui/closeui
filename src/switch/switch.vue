<template>
  <label class="cl-switch">
    <input type="checkbox" v-model="currentValue" class="cl-switch-input" @change="$emit('change', currentValue)">
    <span class="cl-switch-core"></span>
    <div class="cl-switch-label"><slot></slot></div>
  </label>
</template>
<script>
/**
 * cl-switch
 * @desc 切换按钮
 * @param {boolean} [value] - 绑定值
 * @param {slot} - 显示内容
 * @example
 * <cl-switch v-model="value"></cl-switch>
 */
export default {
  name: 'cl-switch',
  props: {
    value: Boolean
  },
  data () {
    return {

    }
  },
  beforeCreate () {},
  created () {},
  mounted () {},
  computed: {
    currentValue: {
      get () {
        return this.value
      },
      set (val) {
        this.$emit('input', val)
      }
    }
  },
  methods: {},
  componets: {}
}
</script>
<style lang="scss">
@import '../style/base.scss';
.cl-switch {
  display: flex;
  align-items: center;
  position: relative;
  * {
    pointer-events: none;
  }
}
.cl-switch-label {
  margin-left: 10px;
  display: inline-block;
  &:empty {
    margin-left: 0;
  }
}
.cl-switch-core {
  display: inline-block;
  position: relative;
  width: 52px;
  height: 32px;
  border: 1px solid $color-grey;
  border-radius: 16px;
  box-sizing: border-box;
  background: $color-grey;
  &::after, &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    transition: transform .3s;
    border-radius: 15px;
  }
  &::after {
    width: 30px;
    height: 30px;
    background-color: $color-white;
    box-shadow: 0 1px 3px rgba(0,0,0,.4);
  }
  &::before {
    width: 50px;
    height: 30px;
    background-color: #fdfdfd;
  }
}
.cl-switch-input {
  display: none;
  &:checked {
    + .cl-switch-core {
      border-color: $color-blue;
      background-color: $color-blue;
      &::before {
        transform: scale(0);
      }
      &::after {
        transform: translateX(20px);
      }
    }
  }
}
</style>
