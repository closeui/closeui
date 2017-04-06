<template lang="html">
  <div class="">
    <div class="">
      <bz-cell class="page-part" title="当前选中" :value="selected"></bz-cell>
    </div>
    <bz-tab-container class="page-tabbar-container" v-model="selected">
      <bz-tab-container-item id="首页">
        <bz-cell v-for="n in 10" :key="n" :title="`餐厅${n}`"></bz-cell>
      </bz-tab-container-item>
      <bz-tab-container-item id="发现">
        <bz-cell v-for="n in 10" :key="n" :title="`发现${n}`"></bz-cell>
      </bz-tab-container-item>
      <bz-tab-container-item id="订单">
        <bz-cell v-for="n in 10" :key="n" :title="`订单${n}`"></bz-cell>
      </bz-tab-container-item>
    </bz-tab-container>
    <bz-tabbar v-model="selected" fixed>
      <bz-tab-item id="首页">
        <img slot="icon" src="http://placehold.it/100x100" alt="" />
        首页
      </bz-tab-item>
      <bz-tab-item id="发现">
        <img slot="icon" src="http://placehold.it/100x100" alt="" />
        发现
      </bz-tab-item>
      <bz-tab-item id="订单">
        <img slot="icon" src="http://placehold.it/100x100" alt="" />
        订单
      </bz-tab-item>
    </bz-tabbar>
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
