<template>
  <div
    @click="handleRadioClick"
    class="cl-radio"
    :class="{'cl-radio--disabled': isDisabled}">
    <span class="cl-radio__input" :class="{'is-right': align === 'right'}">
      <input 
        type="radio"
        :value="name"
        v-model="currentValue"
        class="cl-radio__core"
        :disabled="isDisabled">
      <span class="cl-icon" :class="{'cl-radio--checked': currentValue === name, 'cl-radio--check': currentValue !== name}">      
      </span>
    </span>
    <span class="cl-radio__label" :class="{'is-right': align === 'right'}">
      <slot></slot>
    </span>
  </div>
</template>
<script>
import findParent from '../mixins/findParent'
export default {
  name: 'cl-radio',
  mixins: [findParent],
  props: {
    disabled: Boolean,
    value: {},
    align: String,
    name: [String, Number]
  },
  data () {
    return {

    }
  },
  beforeCreate () {},
  created () {},
  mounted () {},
  computed: {
    isGroup () {
      return !!this.findParentByComponentName('cl-radio-group')
    },
    currentValue: {
      get () {
        return this.isGroup && this.parentGroup ? this.parentGroup.value : this.value
      },
      set (val) {
        if (this.isGroup && this.parentGroup) {
          this.parentGroup.$emit('input', val)
        } else {
          this.$emit('input', val)
        }
      }
    },
    isDisabled () {
      return this.isGroup && this.parentGroup ? this.parentGroup.disabled || this.disabled : this.disabled
    }
  },
  methods: {
    handleRadioClick () {
      if (this.isDisabled) {
        return
      }
      this.currentValue = this.name
    }
  },
  components: {}
}
</script>
<style lang="scss">
@import "../style/base.scss";
.cl-radio {
  overflow: hidden;
  width: 100%;
  &.cl-radio--disabled {
    .cl-icon {
      color: $grey-200;
    }
    .cl-radio--check {
      background-color: $grey-300;
      border-color: $grey-300;
    }
  }
  .cl-radio__input {
    position: relative;
    height: 22px;
    float: left;
    &.is-right {
      float: right;
    }
  }
  .cl-radio__core {
    position: absolute;
    top: 0;
    left: 0;
    width: 22px;
    height: 22px;
    opacity: 0;
    margin: 0;
  }
  .cl-radio__label {
    line-height: 22px;
    display: block;
    margin-left: 37px;
    &.is-right {
      margin-left: 0px;
    }
  }
  .cl-icon {
    font-size: 22px;
    line-height: 1;
  }
  .cl-radio--checked {
    background-color: $blue-500;
    border-color: $blue-500;
    box-sizing: border-box;
    display: inline-block;
    position: relative;
    width: 20px;
    height: 20px;
    vertical-align: middle;
    border-radius: 100%;
    border-width: 1px;
    border-style: solid;
    border-image: initial;
    &::after {
      content: " ";
      top: 5px;
      left: 5px;
      position: absolute;
      width: 8px;
      height: 8px;
      background-color: rgb(255, 255, 255);
      transform: scale(1);
      border-radius: 100%;
      transition: transform 0.2s, -webkit-transform 0.2s;
    }
  }
  .cl-radio--check {
    color: $grey-500;
    box-sizing: border-box;
    display: inline-block;
    background-color: rgb(255, 255, 255);
    position: relative;
    width: 20px;
    height: 20px;
    vertical-align: middle;
    border-radius: 100%;
    border-width: 1px;
    border-style: solid;
    border-color: rgb(204, 204, 204);
    border-image: initial;
    &::after {
      content: " ";
      top: 5px;
      left: 5px;
      position: absolute;
      width: 8px;
      height: 8px;
      transform: scale(0);
      border-radius: 100%;
      transition: transform 0.2s, -webkit-transform 0.2s;
    }
  }
}
</style>
