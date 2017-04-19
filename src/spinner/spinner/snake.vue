<template>
  <div id="snake" class="bz-spinner-snake" :style="{
    'border-top-color': spinnerColor,
    'border-left-color': spinnerColor,
    'border-bottom-color': spinnerColor,
    'height': spinnerSize,
    'width': spinnerSize
  }">
  </div>
</template>
<script>
import common from './common'
export default {
  name: 'snake',
  mixins: [common],
  data () {
    return {

    }
  }
}
</script>
<style lang="scss">
.bz-spinner-snake {
  animation: bz-spinner-rotate .8s infinite linear;
  border: .4rem solid transparent;
  border-radius: 50%;
}
@keyframes bz-spinner-rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
