<template lang="html">
  <div class="">
    <div class="">
      <cl-cell class="page-part" title="当前选中" :value="selected"></cl-cell>
    </div>
    <cl-tab-container class="page-tabbar-container" v-model="selected">
      <cl-tab-container-item id="首页">
        <cl-cell v-for="n in 10" :key="n" :title="`餐厅${n}`"></cl-cell>
      </cl-tab-container-item>
      <cl-tab-container-item id="发现">
        <cl-cell v-for="n in 5" :key="n" :title="`发现${n}`"></cl-cell>
      </cl-tab-container-item>
      <cl-tab-container-item id="订单">
        <cl-cell v-for="n in 16" :key="n" :title="`订单${n}`"></cl-cell>
      </cl-tab-container-item>
    </cl-tab-container>
    <cl-tabbar v-model="selected" fixed>
      <cl-tab-item id="首页">
        <img slot="icon" src="http://placehold.it/100x100" alt="" />
        首页
      </cl-tab-item>
      <cl-tab-item id="发现">
        <img slot="icon" src="http://placehold.it/100x100" alt="" />
        发现
      </cl-tab-item>
      <cl-tab-item id="订单">
        <img slot="icon" src="http://placehold.it/100x100" alt="" />
        订单
      </cl-tab-item>
    </cl-tabbar>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      selected: '首页'
    }
  },
  computed: {},
  methods: {},
  components: {}
}
</script>

<style lang="scss">
</style>
