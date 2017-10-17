<template>
  <div>
    <cl-header fixed title="固定在顶部"></cl-header>
    <div class="page-header">
      <div class="page-title">Header</div>
      <cl-header title="如果标题过长会隐藏后面的内容标题标题">
        <router-link to="/" slot="left">
          <cl-button icon="chevron-left">返回</cl-button>
        </router-link>
        <cl-button icon="more" slot="right"></cl-button>
      </cl-header>
    </div>
  </div>
</template>

<script>
export default {
  name: 'header',
  data () {
    return {}
  }
}
</script>

<style lang="scss">
.page-header {
  margin-top: 60px;
}
</style>
