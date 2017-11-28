<template>
  <div class="page-panel">
    <div class="page-title">Panel 面板</div>
    <div class="page-body">
      <div class="container">
        <div class="container-title">基础用法</div>
        <cl-panel title="标题" desc="标题描述" status="状态">
          <div class="panel-content">Panel 内容</div>
        </cl-panel>
      </div>
      
      <div class="container">
        <div class="container-title">高级用法</div>
        <cl-panel title="标题" desc="标题描述" status="状态">
          <div class="panel-content">Panel 内容</div>
          <div class="panel-footer" slot="footer">
            <cl-button size="small" type="danger">cancel</cl-button>
            <cl-button size="small" type="primary">confirm</cl-button>
          </div>
        </cl-panel>
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
  .panel-footer {
    text-align: right;
  }
  .cl-button {
    margin-left: 5px;
  }
}
</style>
