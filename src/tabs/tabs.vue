<template>
  <div class="cl-tabs" :class="[`cl-tabs--${type}`]">
    <div class="cl-tabs__nav-wrap" v-if="type === 'line' && tabs.length > 4">
      <div class="cl-tabs__swipe" ref="swipe">
        <div class="cl-tabs__nav cl-tabs__nav--line">
          <div class="cl-tabs__nav-bar" :style="navBarStyle"></div>
          <div class="cl-tab"
            v-for="(tab, index) in tabs"
            :key="index"
            :class="{'cl-tab--active': index === curActive}"
            ref="tabkey"
            @click="handleTabClick(index, tab)">
            {{ tab.title }}
          </div>
        </div>
      </div>
    </div>
    
    <div class="cl-tabs__nav"
      v-else
      :class="[`cl-tabs__nav--${this.type}`]">
      <div class="cl-tabs__nav-bar" :style="navBarStyle" v-if="type === 'line'"></div>
      <div class="cl-tab"
        v-for="(tab, index) in tabs"
        :key="index"
        :class="{'cl-tab--active': index === curActive}"
        ref="tabkey"
        @click="handleTabClick(index, tab)">
        {{ tab.title }}
      </div>
    </div>
    
    <div class="cl-tabs__content">
      <slot></slot>
    </div>
  </div>
</template>
<script>
import swipe from './swipe'
import translateUtil from '../utils/transition'
export default {
  name: 'cl-tabs',
  props: {
    active: {
      type: [Number, String],
      default: 0
    },
    type: {
      type: String,
      default: 'line'
    },
    duration: {
      type: Number,
      default: 0.3
    }
  },
  data () {
    return {
      tabs: [],
      isReady: false,
      curActive: +this.active,
      isSwiping: false
    }
  },
  beforeCreate () {},
  created () {},
  mounted () {
    this.$nextTick(() => {
      this.isReady = true
      this.initEvents()
      if (this.tabs.length > 4) {
        this.doOnValueChange()
      }
    })
  },
  computed: {
    navBarStyle () {
      if (!this.isReady || this.type !== 'line' || !this.$refs.tabkey) return
      const tabKey = this.curActive
      const elem = this.$refs.tabkey[tabKey]
      const offsetWidth = `${elem.offsetWidth || 0}px`
      const offsetLeft = `${elem.offsetLeft || 0}px`
      return {
        width: offsetWidth,
        transform: `translate3d(${offsetLeft}, 0, 0)`,
        transitionDuration: `${this.duration}s`
      }
    },
    swipeWidth () {
      return this.$refs.swipe && this.$refs.swipe.getBoundingClientRect().width
    },
    maxTranslate () {
      if (!this.$refs.tabkey) return
      const lastTab = this.$refs.tabkey[this.tabs.length - 1]
      const lastTabWidth = lastTab.offsetWidth
      const lastTabOffsetLeft = lastTab.offsetLeft
      return (lastTabOffsetLeft + lastTabWidth) - this.swipeWidth
    }
  },
  watch: {
    active (val) {
      this.curActive = +val
    },
    curActive () {
      if (this.tabs.length > 4) {
        this.doOnValueChange()
      }
    }
  },
  methods: {
    handleTabClick (index, el) {
      if (el.disabled) {
        this.$emit('disabled', index)
        return
      }
      this.$emit('click', index)
      this.curActive = index
    },
    value2Translate (value) {
      if (!this.$refs.tabkey) return 0
      const tab = this.$refs.tabkey[value]
      const maxTranslate = this.maxTranslate
      const tabWidth = tab.offsetWidth
      const tabOffsetLeft = tab.offsetLeft
      let translate = tabOffsetLeft + (tabWidth * 2.7) - this.swipeWidth
      if (translate < 0) {
        translate = 0
      }
      return -1 * (translate > maxTranslate ? maxTranslate : translate)
    },
    initEvents () {
      const el = this.$refs.swipe
      if (!el) return
      let swipeState = {}
      swipe(el, {
        start: event => {
          swipeState = {
            start: new Date(),
            startLeft: event.pageX,
            startTranslateLeft: translateUtil.getElementTranslate(el).left
          }
        },
        drag: event => {
          this.isSwiping = true
          swipeState.left = event.pageX
          const deltaX = swipeState.left - swipeState.startLeft
          const translate = swipeState.startTranslateLeft + deltaX
          if (translate > 0 || (translate * -1) > this.maxTranslate) return
          translateUtil.translateElement(el, translate, null)
        },
        end: () => {
          this.isSwiping = false
        }
      })
    },
    doOnValueChange () {
      const value = +this.curActive
      const swipe = this.$refs.swipe
      translateUtil.translateElement(swipe, this.value2Translate(value), null)
    }
  },
  components: {}
}
</script>
<style>
</style>
