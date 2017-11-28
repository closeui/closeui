<template>
  <div class="page-spinner">
    <div class="page-title">Loading 加载</div>
    <div class="page-body">
      <cl-cell title="snake">
        <cl-loading color="#26a2ff" type="snake"></cl-loading>
      </cl-cell>
      <cl-cell title="double-bounce">
        <cl-loading color="#26a2ff" type="double-bounce"></cl-loading>
      </cl-cell>
      <cl-cell title="triple-bounce">
        <cl-loading color="#26a2ff" type="triple-bounce"></cl-loading>
      </cl-cell>
      <cl-cell title="fading-circle">
        <cl-loading color="#26a2ff" type="fading-circle"></cl-loading>
      </cl-cell>
    </div>  
  </div>
</template>
<script>
export default {
  name: 'page-loading',
  data () {
    return {

    }
  }
}
</script>
<style>
</style>