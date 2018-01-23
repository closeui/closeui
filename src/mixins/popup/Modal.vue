<template>
  <div class="cl-modal"
    :class="className"
    :style="style"
    @touchmove.prevent.stop
    @click="$emit('click', $event)">
  </div>
</template>
<script>
export default {
  name: 'cl-modal',
  props: {
    zIndex: Number,
    className: String,
    customStyle: Object
  },
  data () {
    return {

    }
  },
  beforeCreate () {},
  created () {},
  mounted () {},
  computed: {
    style () {
      return {
        zIndex: this.zIndex,
        ...this.customStyle
      }
    }
  },
  methods: {},
  components: {}
}
</script>
<style>
</style>
