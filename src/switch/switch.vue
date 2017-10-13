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
  margin-left: 1rem;
  display: inline-block;
  &:empty {
    margin-left: 0;
  }
}
.cl-switch-core {
  display: inline-block;
  position: relative;
  width: 5.2rem;
  height: 3.2rem;
  border: .1rem solid $color-grey;
  border-radius: 1.6rem;
  box-sizing: border-box;
  background: $color-grey;
  &::after, &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    transition: transform .3s;
    border-radius: 1.5rem;
  }
  &::after {
    width: 3rem;
    height: 3rem;
    background-color: $color-white;
    box-shadow: 0 .1rem .3rem rgba(0,0,0,.4);
  }
  &::before {
    width: 5rem;
    height: 3rem;
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
        transform: translateX(2rem);
      }
    }
  }
}
</style>
