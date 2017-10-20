<template>
  <div id="cl-checklist" @change="$emit('change', currentValue)" class="cl-checklist" :class="{ 'is-limit': max <= currentValue.length }">
    <label class="cl-checklist-title" v-text="title"></label>
    <cl-cell v-for="option in options" :key="option">
      <label class="cl-checklist-label" slot="title">
        <span :class="{'is-right': align === 'right'}" class="cl-checkbox">
          <input class="cl-checkbox-input" type="checkbox" v-model="currentValue" :disabled="option.disabled" :value="option.value || option" value="">
          <span class="cl-checkbox-core"></span>
        </span>
        <span class="cl-checkbox-label" v-text="option.label || option"></span>
      </label>
    </cl-cell>
  </div>
</template>
<script>
/**
 * cl-checklist
 * @desc 复选框列表，依赖 cell 组件
 * @param {(string[]|object[])} options - 选项数组，可以传入 [{label: 'label', value: 'value', disabled: true}] or ['ab', 'cd', 'ef']
 * @param {string[]} value - 选中值的数组
 * @param {string} title - 标题
 * @param {number} [max] - 最多可选的个数
 * @param {string} [align=left] - checkbox 对齐位置 'left', 'right'
 * @example
 * <cl-checklist :v-model="value" :options="['a', 'b', 'c']"></cl-checklist>
 */
import ClCell from '../cell/index'
export default {
  name: 'cl-checklist',
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
    ClCell
  }
}
</script>
<style lang="scss">
// @import "../style/base.scss";
// .cl-checklist {
//   .cl-cell {
//     padding: 0;
//   }
// }
// .cl-checklist-label {
//   display: block;
//   padding: 0 1rem;
// }
// .cl-checklist-title {
//   color: $checklist-title-color;
//   display: block;
//   font-size: 1.2rem;
//   margin: .8rem;
// }
// .cl-checklist.is-limit {
//   .cl-checkbox-core:not(:checked) {
//     background-color: $color-grey;
//     border-color: $color-grey;
//   }
// }
// .cl-checkbox {
//   &.is-right {
//     float: right;
//   }
// }
// .cl-checkbox-label {
//   vertical-align: middle;
//   margin-left: .6rem;
// }
// .cl-checkbox-input {
//   display: none;
//   &:checked {
//     + .cl-checkbox-core {
//       background-color: $color-blue;
//       border-color: $color-blue;
//       &::after {
//         border-color: $color-white;
//         transform: rotate(45deg) scale(1);
//       }
//     }
//   }
// }
// 
// .cl-checkbox-input[disabled] {
//   + .cl-checkbox-core {
//     background-color: $color-grey;
//     border-color: #ccc;
//   }
// }
// 
// .cl-checkbox-core {
//   display: inline-block;
//   border-radius: 100%;
//   border: 1px solid #ccc;
//   position: relative;
//   width: 2rem;
//   height: 2rem;
//   vertical-align: middle;
//   &::after {
//     border: 2px solid transparent;
//     border-left: 0;
//     border-top: 0;
//     content: " ";
//     position: absolute;
//     top: 3px;
//     left: 6px;
//     width: 4px;
//     height: 8px;
//     transform: rotate(45deg) scale(0);
//     transition: transform .2s;
//   }
// }
</style>
