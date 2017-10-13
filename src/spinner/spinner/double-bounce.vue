<template>
  <div id="double-bounce" class="cl-spinner-double-bounce" :style="{
    width: spinnerSize,
    height: spinnerSize
    }">
    <div class="cl-spinner-double-bounce-bounce1" :style="{ backgroundColor: spinnerColor }"></div>
    <div class="cl-spinner-double-bounce-bounce2" :style="{ backgroundColor: spinnerColor }"></div>
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
.cl-spinner-double-bounce {
  position: relative;
  .cl-spinner-double-bounce-bounce1, .cl-spinner-double-bounce-bounce2 {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    opacity: .6;
    position: absolute;
    top: 0;
    left: 0;
    animation: cl-spinner-double-bounce 2.0s infinite ease-in-out;
  }
  .cl-spinner-double-bounce-bounce2 {
    animation-delay: -1.0s;
  }
}

@keyframes cl-spinner-double-bounce {
  0%, 100% {
    transform: scale(0.0);
  }
   50% {
     transform: scale(1.0);
   }
}
</style>
