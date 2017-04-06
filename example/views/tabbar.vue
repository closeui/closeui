<template lang="html">
  <div class="">
    <bz-tabbar v-model="selected" fixed>
      <bz-tab-item id="首页">
        <img slot="icon" src="http://placehold.it/100x100" alt="" />
        首页
      </bz-tab-item>
      <bz-tab-item id="发现">
        <img slot="icon" src="http://placehold.it/100x100" alt="" />
        发现
      </bz-tab-item id="订单">
      <bz-tab-item>
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
