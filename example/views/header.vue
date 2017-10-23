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
      
      <cl-header title="多个 按钮">
        <router-link to="/" slot="left">
          <cl-button icon="chevron-left">返回</cl-button>
        </router-link>
        <cl-button @click="handleClose">关闭</cl-button>
        <cl-button icon="more" slot="right"></cl-button>
      </cl-header>
      
      <cl-header title="左侧仅文字">
        <router-link to="/" slot="left">
          <cl-button>返回</cl-button>
        </router-link>
      </cl-header>
      
      <cl-header title="右侧仅文字">
        <router-link to="/" slot="right">
          <cl-button>分享</cl-button>
        </router-link>
      </cl-header>
      
      <cl-header title="仅图标">
        <router-link to="/" slot="left">
          <cl-button icon="chevron-left"></cl-button>
        </router-link>
        <cl-button slot="right" icon="more"></cl-button>
      </cl-header>
      
    </div>
  </div>
</template>

<script>
export default {
  name: 'header',
  data () {
    return {}
  },
  methods: {
    handleClose () {
      alert('close this page')
    }
  }
}
</script>

<style lang="scss" scoped>
.page-header {
  margin-top: 60px;
}
.cl-header {
  margin-bottom: 10px;
}
</style>
