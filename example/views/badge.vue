<template>
  <div class="page-badge">
    <div class="page-title">Badge 徽章</div>
    <div class="page-body">
      <div class="container">
        <div class="box">
          <cl-badge type="primary" size="large">20</cl-badge>
          <cl-badge type="error" size="large">18</cl-badge>
          <cl-badge type="success" size="large">16</cl-badge>
          <cl-badge type="warning" size="large">12</cl-badge>
        </div>
        
        <div class="box">
          <cl-badge type="primary">20</cl-badge>
          <cl-badge type="error">18</cl-badge>
          <cl-badge type="success">16</cl-badge>
          <cl-badge type="warning">12</cl-badge>
        </div>
        
        <div class="box">
          <cl-badge type="primary" size="small">20</cl-badge>
          <cl-badge type="error" size="small">18</cl-badge>
          <cl-badge type="success" size="small">16</cl-badge>
          <cl-badge type="warning" size="small">12</cl-badge>
        </div>
      </div>
        
      <div class="box">
        <cl-cell title="徽章">
          <span>未读消息</span>
          <cl-badge type="error" size="small">10</cl-badge>
        </cl-cell>
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
.page-body {
  .container {
    padding: 15px;
  }
}
.box {
  margin-bottom: 15px;
}
</style>
