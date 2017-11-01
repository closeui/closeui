<template>
  <div class="cl-picker">
    <div class="cl-picker__toolbar cl-hairline--top-bottom" v-show="showToolbar">
      <slot>
        <a href="javascript:;" class="cl-picker__cancel" @click="handlePickerCancel">取消</a>
        <a href="javascript:;" class="cl-picker__canfirm" @click="handlePickerConfirm">完成</a>
        <div v-if="title" class="cl-picker__title">{{ title }}</div>
      </slot>
    </div>
    <div class="cl-picker__columns" :class="['cl-picker__columns--' + columns.length]">
      <cl-picker-column
        v-for="(item, index) in columns"
        :key="index"
        v-model="values[index]"
        :values="item.values"
        :class-name="item.className"
        :itemHeight="itemHeight"
        :visible-item-count="visibleColumnCount"
        :value-key="valueKey"
        @columnChange="columnValueChange(index)">
        
      </cl-picker-column>
      <div class="cl-picker-center-highlight" :style="{ height: itemHeight + 'px', marginTop: -itemHeight / 2 + 'px' }"></div>
    </div>
  </div>
</template>
<script>
import ClPickerColumn from './picker-column'
const DEFAULT_ITEM_HEIGHT = 44
export default {
  name: 'cl-picker',
  props: {
    visibleColumnCount: {
      type: Number,
      default: 5
    },
    itemHeight: {
      type: Number,
      default: DEFAULT_ITEM_HEIGHT
    },
    columns: {
      type: Array,
      default () {
        return []
      }
    },
    showToolbar: {
      type: Boolean,
      default: false
    },
    title: String,
    valueKey: String
  },
  data () {
    return {

    }
  },
  beforeCreate () {},
  created () {},
  mounted () {},
  computed: {
    values () {
      const columns = this.columns || []
      const values = []
      columns.forEach(column => {
        values.push(column.value || column.values[column.defaultIndex || 0])
      })
      return values
    }
  },
  methods: {
    handlePickerCancel () {
      this.$emit('cancel', this.values)
    },
    handlePickerConfirm () {
      this.$emit('confirm', this.values)
    },
    columnValueChange (index) {
      this.$emit('change', this, this.values, index)
    },
    getColumn (index) {
      const children = this.$children.filter(child => child.$options.name === 'cl-picker-column')
      return children[index]
    },
    getColumnValue (index) {
      const column = this.getColumn(index)
      return column && column.values[column.valueIndex]
    },
    setColumnValue (index, value) {
      const column = this.getColumn(index)
      if (column) {
        column.currentValue = value
      }
    },
    getColumnValues (index) {
      const column = this.getColumn(index)
      return column && column.currentValues
    },
    setColumnValues (index, values) {
      const column = this.getColumn(index)
      if (column) {
        column.currentValues = values
      }
    },
    getValues () {
      return this.values
    },
    setValues (values) {
      values.forEach((value, index) => {
        this.setColumnValue(index, value)
      })
    }
  },
  components: {
    ClPickerColumn
  }
}
</script>
<style>
</style>
