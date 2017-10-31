<template lang="html">
  <div class="page-tabbar">
    <div class="page-title">Tabbar 标签栏</div>
    <div class="page-body">
      <cl-tabbar v-model="active" class="tabbar1">
        <cl-tabbar-item icon="navicon-round">标签</cl-tabbar-item>
        <cl-tabbar-item icon="printer" dot>标签</cl-tabbar-item>
        <cl-tabbar-item icon="cube" info="5">标签</cl-tabbar-item>
        <cl-tabbar-item icon="ios-folder">标签</cl-tabbar-item>
      </cl-tabbar>
      
      <cl-tabbar v-model="active2" class="tabbar2">
        <cl-tabbar-item>
          <span>自定义</span>
          <img slot="icon" :src="active2 === 0 ? icon.active : icon.normal" alt="">
        </cl-tabbar-item>
        <cl-tabbar-item icon="printer" dot>标签</cl-tabbar-item>
        <cl-tabbar-item icon="cube" info="5">标签</cl-tabbar-item>
        <cl-tabbar-item icon="ios-folder">标签</cl-tabbar-item>
      </cl-tabbar>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      active: 0,
      active2: 0,
      icon: {
        normal: 'https://ws1.sinaimg.cn/large/e0653793gy1fl1fi53vabj205k05kmx0.jpg',
        active: 'https://ws1.sinaimg.cn/large/e0653793gy1fl1fi541joj205k05kt8k.jpg'
      }
    }
  },
  computed: {},
  methods: {},
  components: {}
}
</script>

<style lang="scss" scoped>
.tabbar1 {
  bottom: 100px;
}
</style>
