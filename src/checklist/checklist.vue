<template>
  <div id="bz-checklist" @change="$emit('change', currentValue)" class="bz-checklist" :class="{ 'is-limit': max <= currentValue.length }">
    <label class="bz-checklist-title" v-text="title"></label>
    <x-cell v-for="option in options">
      <label class="bz-checklist-label" slot="title">
        <span :class="{'is-right': align === 'right'}" class="bz-checkbox">
          <input class="bz-checkbox-input" type="checkbox" v-model="currentValue" :disabled="option.disabled" :value="option.value || option" value="">
          <span class="bz-checkbox-core"></span>
        </span>
        <span class="bz-checkbox-label" v-text="option.label || option"></span>
      </label>
    </x-cell>
  </div>
</template>
<script>
/**
 * bz-checklist
 * @desc 复选框列表，依赖 cell 组件
 * @param {(string[]|object[])} options - 选项数组，可以传入 [{label: 'label', value: 'value', disabled: true}] or ['ab', 'cd', 'ef']
 * @param {string[]} value - 选中值的数组
 * @param {string} title - 标题
 * @param {number} [max] - 最多可选的个数
 * @param {string} [align=left] - checkbox 对齐位置 'left', 'right'
 * @example
 * <bz-checklist :v-model="value" :options="['a', 'b', 'c']"></bz-checklist>
 */
import XCell from '../cell/index'
export default {
  name: 'bz-checklist',
  props: {
    max: Number,
    title: String,
    align: String,
    options: {
      type: Array,
      required: true
    },
    value: Array
  },
  data () {
    return {
      currentValue: this.value
    }
  },
  beforeCreate () {},
  created () {},
  mounted () {},
  computed: {
    limit () {
      return this.max < this.currentValue.length
    }
  },
  watch: {
    value (val) {
      this.currentValue = val
    },
    currentValue (val) {
      if (this.limit) val.pop()
      this.$emit('input', val)
    }
  },
  methods: {},
  components: {
    XCell
  }
}
</script>
<style lang="scss">
@import "../style/base.scss";
.bz-checklist {
  .bz-cell {
    padding: 0;
  }
}
.bz-checklist-label {
  display: block;
  padding: 0 1rem;
}
.bz-checklist-title {
  color: $checklist-title-color;
  display: block;
  font-size: 1.2rem;
  margin: .8rem;
}
.bz-checklist.is-limit {
  .bz-checkbox-core:not(:checked) {
    background-color: $color-grey;
    border-color: $color-grey;
  }
}
.bz-checkbox {
  &.is-right {
    float: right;
  }
}
.bz-checkbox-label {
  vertical-align: middle;
  margin-left: .6rem;
}
.bz-checkbox-input {
  display: none;
  &:checked {
    + .bz-checkbox-core {
      background-color: $color-blue;
      border-color: $color-blue;
      &::after {
        border-color: $color-white;
        transform: rotate(45deg) scale(1);
      }
    }
  }
}

.bz-checkbox-input[disabled] {
  + .bz-checkbox-core {
    background-color: $color-grey;
    border-color: #ccc;
  }
}

.bz-checkbox-core {
  display: inline-block;
  order-radius: 100%;
  border: 1px solid #ccc;
  position: relative;
  width: 2rem;
  height: 2rem;
  vertical-align: middle;
  &::after {
    border: 2px solid transparent;
    border-left: 0;
    border-top: 0;
    content: " ";
    position: absolute;
    top: .3rem;
    left: .6rem;
    width: .4rem;
    height: .8rem;
    transform: rotate(45deg) scale(0);
    transition: transform .2s;
  }
}
</style>
