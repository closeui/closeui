<template lang="html">
  <div class="page-cell">
    <div class="page-title">Cell</div>
    <cl-cell-group class="clui-cell-group">
      <cl-cell title="标题文字"></cl-cell>
      <cl-cell title="标题文字" value="说明文字"></cl-cell>
    </cl-cell-group>
    
    <cl-cell-group class="clui-cell-group">
      <cl-cell title="标题文字" icon="navicon-round" value="带 icon"></cl-cell>
      <cl-cell title="标题文字" icon="chevron-right">
        <span>icon 图片</span>
        <img src="https://placeholdit.imgix.net/~text?txtsize=9&txt=100%C3%97100&w=100&h=100" width="24" height="24" slot="icon" alt="" />
      </cl-cell>
    </cl-cell-group>
    
    <cl-cell-group class="clui-cell-group">
      <cl-cell title="标题文字" is-link value="链接"></cl-cell>
      <cl-cell title="标题文字" is-link>
        <span style="color: green;">这里是元素</span>
      </cl-cell>
      <cl-cell title="标题文字">
        <cl-button size="small" type="primary" icon="chevron-left">按钮</cl-button>
      </cl-cell>  
    </cl-cell-group>
    
    <cl-cell-group class="clui-cell-group">
      <cl-cell title="标题文字" label="描述信息" is-link></cl-cell>
      <cl-cell title="原生跳转" label="跳转到 https://github.com" to="https://github.com" is-link></cl-cell>
      <cl-cell title="路由跳转" label="跳转到 /#/header" :to="{name: 'header'}" is-link></cl-cell>
    </cl-cell-group>
    
  </div>
</template>

<script>
export default {
  data: function () {
    return {
    }
  },
  computed: {},
  methods: {},
  components: {}
}
</script>

<style lang="scss">
.clui-cell-group {
  margin-top: 20px;
}
</style>
