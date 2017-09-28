<template>
  <div id="triple-bounce">
    <div class="bz-spinner-triple-bounce">
      <div class="bz-spinner-triple-bounce-bounce1" :style="bounceStyle"></div>
      <div class="bz-spinner-triple-bounce-bounce2" :style="bounceStyle"></div>
      <div class="bz-spinner-triple-bounce-bounce3" :style="bounceStyle"></div>
    </div>
  </div>
</template>
<script>
import common from './common'
export default {
  name: 'triple-bounce',
  mixins: [common],
  data () {
    return {

    }
  },
  computed: {
    spinnerSize () {
      return ((this.size || this.$parent.size || 28) / 3) + 'px'
    },
    bounceStyle () {
      return {
        width: this.spinnerSize,
        height: this.spinnerSize,
        backgroundColor: this.spinnerColor
      }
    }
  }
}
</script>
<style lang="scss">
.bz-spinner-triple-bounce {
  .bz-spinner-triple-bounce-bounce1, .bz-spinner-triple-bounce-bounce2, .bz-spinner-triple-bounce-bounce3 {
    border-radius: 100%;
    display: inline-block;
    animation: bz-spinner-double-bounce 1.4s infinite ease-in-out both;
  }
  .bz-spinner-triple-bounce-bounce1 {
    animation-delay: -0.32s;
  }
  .bz-spinner-triple-bounce-bounce2 {
    animation-delay: -0.16s;
  }
}
@keyframes bz-spinner-triple-bounce {
  0%, 80%, 100% {
    transform: scale(0);
  }
  40% {
    transform: scale(1.0);
  }
}
</style>
