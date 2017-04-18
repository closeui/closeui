<template lang="html">
  <div class="">
    <bz-navbar class="page-part" v-model="selected">
      <bz-tab-item id="1">选项一</bz-tab-item>
      <bz-tab-item id="2">选项二</bz-tab-item>
      <bz-tab-item id="3">选项三</bz-tab-item>
    </bz-navbar>
    <div class="page-selected">
      <bz-cell class="page-part" title="当前选中" :value="selected"></bz-cell>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      selected: '1'
    }
  },
  computed: {},
  methods: {},
  components: {}
}
</script>

<style lang="scss">
.page-selected {
  margin-top: 1rem;
}
</style>
