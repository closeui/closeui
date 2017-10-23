<template lang="html">
  <div class="">
    <cl-navbar class="page-part" v-model="selected">
      <cl-tab-item id="1">选项一</cl-tab-item>
      <cl-tab-item id="2">选项二</cl-tab-item>
      <cl-tab-item id="3">选项三</cl-tab-item>
    </cl-navbar>
    <div class="page-selected">
      <cl-cell class="page-part" title="当前选中" :value="selected"></cl-cell>
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
