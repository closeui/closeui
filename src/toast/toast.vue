<template>
  <transition name="cl-toast-fade">
    <div class="cl-toast-wrapper" v-show="visible">
      <div :class="['cl-toast', 'cl-toast--' + displayStyle]">
        <!-- text only -->
        <div class="cl-toast__text" v-if="displayStyle === 'text'">{{ message }}</div>
        <div class="cl-toast__text" v-if="displayStyle === 'html'" v-html="message"></div>
        
        <!-- with icon -->
        <template v-if="displayStyle === 'default'">
          <cl-loading v-if="type === 'loading'" color="white"></cl-loading>
          <cl-icon v-else class="cl-toast__icon" :name="type"></cl-icon>
          <div v-if="message" class="cl-toast__text">{{ message }}</div>
        </template>
      </div>
      <div class="cl-toast__overlay" v-if="forbidClick"></div>
    </div>
  </transition>
</template>
<script>
import ClIcon from '../icon'
import ClLoading from '../loading'

const TOAST_TYPES = ['text', 'html', 'loading', 'success', 'fail']
const DEFAULT_STYLE_LIST = ['success', 'fail', 'loading']
export default {
  name: 'cl-toast',
  props: {
    type: {
      type: String,
      default: 'text',
      validator: value => TOAST_TYPES.indexOf(value) > -1
    },
    message: {
      type: String,
      default: ''
    },
    forbidClick: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      visible: false
    }
  },
  beforeCreate () {},
  created () {},
  mounted () {},
  computed: {
    displayStyle () {
      return DEFAULT_STYLE_LIST.indexOf(this.type) !== -1 ? 'default' : this.type
    }
  },
  methods: {},
  components: {
    ClIcon,
    ClLoading
  }
}
</script>
<style>
</style>
