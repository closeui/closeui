<template>
  <div class="cl-picker-column" :class="classNames">
    <div class="cl-picker-column-wrapper" :class="{ dragging: isDragging }" ref="wrapper" :style="{ height: visibleContentHeight + 'px' }">
      <div class="cl-picker-column__item"
        v-for="(item, index) in currentValues"
        :key="index"
        :class="{ 'cl-picker-column__item--selected': item === currentValue }"
        :style="{ height: itemHeight + 'px', lineHeight: itemHeight + 'px'}">
        {{ typeof item === 'object' && item[valueKey] ? item[valueKey] : item }}
      </div>
    </div>
  </div>
</template>
<script>
import translateUtil from '../utils/transition'
import draggable from './draggable'
const DEFAULT_ITEM_HEIGHT = 44
export default {
  name: 'cl-picker-column',
  props: {
    visibleColumnCount: {
      type: Number,
      default: 5
    },
    values: {
      type: Array,
      default () {
        return []
      }
    },
    className: {
      type: String,
      default: ''
    },
    itemHeight: {
      type: Number,
      default: DEFAULT_ITEM_HEIGHT
    },
    value: {},
    valueKey: String
  },
  data () {
    return {
      currentValue: this.value,
      currentValues: this.values,
      isDragging: false
    }
  },
  beforeCreate () {},
  created () {},
  mounted () {
    this.initEvents()
    this.doOnValueChange()
  },
  computed: {
    /**
     * picker 可见备选元素总高度
     * @return {[type]} [description]
     */
    visibleContentHeight () {
      return this.itemHeight * this.visibleColumnCount
    },
    /**
     * 当前选中值在 values 中的索引
     * @return {[type]} [description]
     */
    valueIndex () {
      return this.currentValues.indexOf(this.currentValue)
    },
    /**
     * 计算 picker 的拖动范围
     * @type {Object}
     */
    dragRange () {
      const values = this.currentValues
      const visibleColumnCount = this.visibleColumnCount
      const itemHeight = this.itemHeight
      return [-itemHeight * (values.length - Math.ceil(visibleColumnCount / 2)), itemHeight * Math.floor(visibleColumnCount / 2)]
    },
    classNames () {
      return this.className.split(' ')
    }
  },
  watch: {
    values (val) {
      this.currentValues = val
    },
    currentValues (val) {
      if (this.valueIndex === -1) {
        this.currentValue = (val || [])[0]
      }
    },
    value (val) {
      this.currentValue = val
    },
    currentValue (val) {
      this.doOnValueChange()
      this.$emit('input', val)
      this.$emit('columnChange', this)
    }
  },
  methods: {
    value2Translate (value) {
      const values = this.currentValues
      const valueIndex = values.indexOf(value)
      const offset = Math.floor(this.visibleColumnCount / 2)
      const itemHeight = this.itemHeight
      if (valueIndex !== -1) {
        return (valueIndex - offset) * (-itemHeight)
      }
    },
    translate2Value (translate) {
      const itemHeight = this.itemHeight
      translate = Math.round(translate / itemHeight) * itemHeight
      const index = -(translate - Math.floor(this.visibleColumnCount / 2) * itemHeight) / itemHeight
      return this.currentValues[index]
    },
    initEvents () {
      const el = this.$refs.wrapper
      let dragState = {}
      let velocityTranslate
      let prevTranslate
      // let pickerItems
      draggable(el, {
        start: (event) => {
          dragState = {
            range: this.dragRange,
            start: new Date(),
            startLeft: event.pageX,
            startTop: event.pageY,
            startTranslateTop: translateUtil.getElementTranslate(el).top
          }
          // pickerItems = el.querySelectorAll('.cl-picker-item')
        },
        drag: (event) => {
          this.isDragging = true
          dragState.left = event.pageX
          dragState.top = event.pageY
          const deltaY = dragState.top - dragState.startTop
          const translate = dragState.startTranslateTop + deltaY
          translateUtil.translateElement(el, null, translate)
          velocityTranslate = translate - prevTranslate || translate
          prevTranslate = translate
        },
        end: () => {
          if (this.isDragging) {
            this.isDragging = false
            const momentumRatio = 7
            const currentTranslate = translateUtil.getElementTranslate(el).top
            const duration = new Date() - dragState.start
            let momentumTranslate
            if (duration < 300) {
              momentumTranslate = currentTranslate + velocityTranslate * momentumRatio
            }
            const dragRange = dragState.range
            this.$nextTick(() => {
              let translate
              let itemHeight = this.itemHeight
              if (momentumTranslate) {
                translate = Math.round(momentumTranslate / itemHeight) * itemHeight
              } else {
                translate = Math.round(currentTranslate / itemHeight) * itemHeight
              }
              translate = Math.max(Math.min(translate, dragRange[1]), dragRange[0])
              translateUtil.translateElement(el, null, translate)
              this.currentValue = this.translate2Value(translate)
            })
          }
          dragState = {}
        }
      })
    },
    doOnValueChange () {
      const value = this.currentValue
      const wrapper = this.$refs.wrapper
      translateUtil.translateElement(wrapper, null, this.value2Translate(value))
    }
  },
  components: {}
}
</script>
<style>
</style>
