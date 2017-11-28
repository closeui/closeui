<template>
  <div class="page-tab">
    <div class="page-title">Navbar 导航栏</div>
    <div class="page-body">
      <div class="tab-title">基础用法，默认激活第一个</div>
      <cl-tabs>
        <cl-tab title="选型一">
          <div class="tab-content">
            内容一
          </div>
        </cl-tab>
        <cl-tab title="选型二">
          <div class="tab-content">
            内容二
          </div>
        </cl-tab>
        <cl-tab title="选型三">
          <div class="tab-content">
            内容三
          </div>
        </cl-tab>
        <cl-tab title="选型四">
          <div class="tab-content">
            内容四
          </div>
        </cl-tab>
      </cl-tabs>
      
      <div class="tab-title">基础用法，设置激活 id</div>
      <cl-tabs :active="active">
        <cl-tab title="选型一">
          <div class="tab-content">
            内容一
          </div>
        </cl-tab>
        <cl-tab title="选型二">
          <div class="tab-content">
            内容二
          </div>
        </cl-tab>
        <cl-tab title="选型三">
          <div class="tab-content">
            内容三
          </div>
        </cl-tab>
        <cl-tab title="选型四">
          <div class="tab-content">
            内容四
          </div>
        </cl-tab>
      </cl-tabs>
      
      <div class="tab-title">设置切换 tab 动画时间</div>
      <cl-tabs :duration="0.6">
        <cl-tab title="选型一">
          <div class="tab-content">
            内容一
          </div>
        </cl-tab>
        <cl-tab title="选型二">
          <div class="tab-content">
            内容二
          </div>
        </cl-tab>
        <cl-tab title="选型三">
          <div class="tab-content">
            内容三
          </div>
        </cl-tab>
      </cl-tabs>
      
      <div class="tab-title">横向滚动tab</div>
      <cl-tabs>
        <cl-tab title="选型一">
          <div class="tab-content">
            内容一
          </div>
        </cl-tab>
        <cl-tab title="选型二">
          <div class="tab-content">
            内容二
          </div>
        </cl-tab>
        <cl-tab title="选型三">
          <div class="tab-content">
            内容三
          </div>
        </cl-tab>
        <cl-tab title="选型四">
          <div class="tab-content">
            内容四
          </div>
        </cl-tab>
        <cl-tab title="选型五">
          <div class="tab-content">
            内容五
          </div>
        </cl-tab>
        <cl-tab title="选型六">
          <div class="tab-content">
            内容六
          </div>
        </cl-tab>
        <cl-tab title="选型七">
          <div class="tab-content">
            内容七
          </div>
        </cl-tab>
      </cl-tabs>
      
      <div class="tab-title">禁用 tab</div>
      <cl-tabs>
        <cl-tab title="选型一">
          <div class="tab-content">
            内容一
          </div>
        </cl-tab>
        <cl-tab title="选型二" disabled>
          <div class="tab-content">
            内容二
          </div>
        </cl-tab>
        <cl-tab title="选型三">
          <div class="tab-content">
            内容三
          </div>
        </cl-tab>
      </cl-tabs>
      
      <div class="tab-title">card样式</div>
      <cl-tabs type="card">
        <cl-tab title="选项一">
          <div class="tab-content">
            内容一
          </div>
        </cl-tab>
        <cl-tab title="选项二">
          <div class="tab-content">
            内容二
          </div>
        </cl-tab>
        <cl-tab title="选项三">
          <div class="tab-content">
            内容三
          </div>
        </cl-tab>
      </cl-tabs>
    </div>
  </div>
</template>
<script>
export default {
  name: '',
  data () {
    return {
      active: 2
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
.tab-content {
  font-size: 20px;
  padding: 10px;
}
.tab-title {
  font-size: 14px;
  padding: 10px;
}
</style>
