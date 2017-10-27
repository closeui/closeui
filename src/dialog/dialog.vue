<template>
  <transition name="cl-dialog-bounce">
    <div class="cl-dialog" v-show="value">
      <div class="cl-dialog__header" v-if="title">{{title}}</div>
      <div class="cl-dialog__content cl-hairline">
        <slot>
          <div class="cl-dialog__message" v-if="message" v-html="message" :class="{'cl-dialog__message--withtitle': title}"></div>
        </slot>
      </div>
      <div class="cl-dialog__footer" :class="{'is-twobtn': showCancelButton && showConfirmButton}">
        <cl-button
          size="large"
          class="cl-dialog__cancel"
          v-show="showCancelButton"
          @click="handleAction('cancel')">
          {{ cancelButtonText }}
        </cl-button>
        <cl-button
          size="large"
          :class="['cl-dialog__confirm', { 'cl-hairline--left': showCancelButton && showConfirmButton }]"
          v-show="showConfirmButton"
          @click="handleAction('confirm')">
          {{ confirmButtonText }}
        </cl-button>
      </div>
    </div>
  </transition>
</template>
<script>
import ClButton from '../button'
import Popup from '../mixins/popup'
export default {
  name: 'cl-dialog',
  mixins: [Popup],
  props: {
    title: {
      type: String,
      default: ''
    },
    message: {
      type: String,
      default: ''
    },
    showConfirmButton: {
      type: Boolean,
      default: true
    },
    showCancelButton: {
      type: Boolean,
      default: false
    },
    confirmButtonText: {
      type: String,
      default: '确认'
    },
    cancelButtonText: {
      type: String,
      default: '取消'
    },
    callback: {
      type: Function
    },
    overlay: {
      default: true
    },
    closeOnClickOverlay: {
      default: false
    },
    lockOnScroll: {
      default: true
    }
  },
  data () {
    return {

    }
  },
  beforeCreate () {},
  created () {},
  mounted () {},
  computed: {},
  methods: {
    handleAction (action) {
      this.$emit('input', false)
      this.$emit(action)
      this.callback && this.callback(action)
    }
  },
  components: {
    ClButton
  }
}
</script>
<style>
</style>
