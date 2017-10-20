<template>
  <div class="cl-checkbox" 
    :class="[`cl-checkbox--${shape}`, {'cl-checkbox--disabled': isDisabled, 'cl-checkbox--checked': isChecked}]">
    <span class="cl-checkbox__input" :class="{'is-right': align === 'right'}">
      <input type="checkbox" v-model="currentValue" class="cl-checkbox__core" :name="name" :disabled="isDisabled">
      <i class="cl-icon cl-icon-success ion-checkmark-round"></i>
    </span>
    <span class="cl-checkbox__label" @click="onClickLabel">
      <slot></slot>
    </span>
  </div>
</template>
<script>
import findParent from '../mixins/findParent'
export default {
  name: 'cl-checkbox',
  mixins: [findParent],
  props: {
    value: {},
    disabled: Boolean,
    align: String,
    name: [String, Number],
    shape: {
      type: String,
      default: 'round'
    }
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
      return !!this.findParentByComponentName('cl-checkbox-group')
    },
    currentValue: {
      get () {
        return this.isGroup && this.parentGroup ? this.parentGroup.value.indexOf(this.name) !== -1 : this.value
      },
      set (val) {
        if (this.isGroup && this.parentGroup) {
          const parentValue = this.parentGroup.value.slice()
          if (val) {
            if (parentValue.indexOf(this.name) === -1) {
              parentValue.push(this.name)
              this.parentGroup.$emit('input', parentValue)
            }
          } else {
            const index = parentValue.indexOf(this.name)
            if (index !== -1) {
              parentValue.splice(index, 1)
              this.parentGroup.$emit('input', parentValue)
            }
          }
        } else {
          this.$emit('input', val)
        }
      }
    },
    isChecked () {
      const currentValue = this.currentValue
      if ({}.toString.call(currentValue) === '[object Boolean]') {
        return currentValue
      } else if (currentValue !== null && currentValue !== undefined) {
        return currentValue === this.name
      }
    },
    isDisabled () {
      return this.isGroup && this.parentGroup ? this.parentGroup.disabled : this.disabled
    }
  },
  watch: {
    value (val) {
      this.$emit('change', val)
    }
  },
  methods: {
    onClickLabel () {
      if (this.isDisabled) return
      this.currentValue = !this.currentValue
    }
  },
  components: {}
}
</script>
<style lang="scss">
@import "../style/base.scss";
.cl-checkbox {
  overflow: hidden;
  .cl-icon-success {
    color: #fff;
    width: $checkbox-size;
    height: $checkbox-size;
    display: block;
    font-size: 14px;
    line-height: 1;
    text-align: center;
    pointer-events: none;
    border: 1px solid $border-color;
    &::before {
      margin: 0 auto;
      line-height: $checkbox-size;
      transition: all .2s cubic-bezier(.12,.4,.29,1.46) .1s;
      // transform: scale(0);
    }
  }
  &.cl-checkbox--round {
    .cl-icon-success {
      border-radius: 50%;
    }
  }
  &.cl-checkbox--square {
    .cl-icon-success {
      border-radius: 3px;
    }
  }
  &.cl-checkbox--disabled {
    .cl-icon-success {
      border-color: $grey-500;
      background-color: transparent;
    }
    .cl-checkbox__core:checked + .cl-icon-success {
      border-color: $grey-500;
      background-color: $grey-500;
    }
  }
}
.cl-checkbox__input {
  position: relative;
  height: $checkbox-size + 2px;
  margin-right: 15px;
  float: left;
  &.is-right {
    float: right;
  }
}
.cl-checkbox__core {
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  margin: 0;
  width: $checkbox-size + 2px;
  height: $checkbox-size + 2px;
  + .cl-icon-success {
    &::before {
      content: '';
    }
  }
  &:checked + .cl-icon-success {
    border-color: $blue-500;
    background-color: $blue-500;
    &::before {
      content: "\F121";
    }
  }
}

.cl-checkbox__label {
  display: block;
  line-height: $checkbox-size + 2px;
}
</style>
