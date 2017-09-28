<template>
  <div id="double-bounce" class="bz-spinner-double-bounce" :style="{
    width: spinnerSize,
    height: spinnerSize
    }">
    <div class="bz-spinner-double-bounce-bounce1" :style="{ backgroundColor: spinnerColor }"></div>
    <div class="bz-spinner-double-bounce-bounce2" :style="{ backgroundColor: spinnerColor }"></div>
  </div>
</template>
<script>
import common from './common'
export default {
  name: 'double-bounce',
  mixins: [common],
  data () {
    return {

    }
  }
}
</script>
<style lang="scss">
.bz-spinner-double-bounce {
  position: relative;
  .bz-spinner-double-bounce-bounce1, .bz-spinner-double-bounce-bounce2 {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    opacity: .6;
    position: absolute;
    top: 0;
    left: 0;
    animation: bz-spinner-double-bounce 2.0s infinite ease-in-out;
  }
  .bz-spinner-double-bounce-bounce2 {
    animation-delay: -1.0s;
  }
}

@keyframes bz-spinner-double-bounce {
  0%, 100% {
    transform: scale(0.0);
  }
   50% {
     transform: scale(1.0);
   }
}
</style>
