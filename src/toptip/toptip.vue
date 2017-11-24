<template>
  <transition name="cl-toptip-fade">
    <div :class="['cl-toptip-wrapper', 'cl-toptip__' + type]" v-show="visible">
      <div class="cl-toptip__text">{{ message }}</div>
    </div>
  </transition>
</template>
<script>
export default {
  name: 'cl-toptip',
  props: {
    type: {
      type: String,
      default: 'error'
    },
    message: {
      type: String,
      default: ''
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
  computed: {},
  methods: {},
  components: {}
}
</script>
<style>
</style>
