<template>
  <div class="page-tag">
    <div class="page-title">Tag 标记</div>
    <div class="page-body">
      <div class="container">
        <div class="container-title">基础用法</div>
        <cl-tag>标记</cl-tag>
        <cl-tag type="primary">标记</cl-tag>
        <cl-tag type="success">标记</cl-tag>
        <cl-tag type="danger">标记</cl-tag>
      </div>
      
      <div class="container">
        <div class="container-title">空心样式</div>
        <cl-tag>标记</cl-tag>
        <cl-tag plain type="primary">标记</cl-tag>
        <cl-tag plain type="success">标记</cl-tag>
        <cl-tag plain type="danger">标记</cl-tag>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: '',
  data () {
    return {

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
<style lang="scss" scoped>
.container {
  padding: 15px;
}
</style>
