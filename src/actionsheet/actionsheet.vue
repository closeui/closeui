<template>
  <transition name="cl-actionsheet-float">
    <div :class="['cl-actionsheet', {'cl-actionsheet--withtitle': title}]" v-show="value">
      <div class="cl-actionsheet__header cl-hairline--top-bottom" v-if="title">
        <div v-text="title"></div>
        <cl-icon name="ios-close-outline"  @click.stop="$emit('input', false)"></cl-icon>
      </div>
      <ul v-if="!title" class="cl-actionsheet__list">
        <li
          v-for="(item, index) in actions"
          :key="index"
          :class="['cl-actionsheet__item', 'cl-hairline--top', item.className, {'cl-actionsheet__item--loading': item.loading}]"
          @click.stop="onClickItem(item)">
          <template v-if="!item.loading">
            <span class="cl-actionsheet__name">{{item.name}}</span>
            <span class="cl-actionsheet__subname" v-if="item.subname">{{item.subname}}</span>
          </template>
        </li>
      </ul>
      <div class="cl-actionsheet__item cl-actionsheet__cancel cl-hairline--top" @click.stop="$emit('input', false)" v-if="cancelText">{{cancelText}}</div>
      <div class="cl-actionsheet__content">
        <slot></slot>
      </div>
    </div>
  </transition>
</template>
<script>
import Popup from '../mixins/popup'
export default {
  name: 'cl-actionsheet',
  mixins: [Popup],
  props: {
    actions: {
      type: Array,
      default: () => []
    },
    value: Boolean,
    title: String,
    cancelText: String,
    overlay: {
      type: Boolean,
      default: true
    },
    closeOnClickOverlay: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {

    }
  },
  beforeCreate () {},
  created () {},
  mounted () {
    this.value && this.open()
  },
  computed: {},
  methods: {
    onClickItem (item) {
      if (typeof item.callback === 'function') {
        item.callback(item)
      }
    }
  },
  components: {}
}
</script>
<style>
</style>
