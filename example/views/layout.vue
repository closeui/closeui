<template>
  <div class="page-layout">
    <div class="page-title">Layout</div>
    <div class="page-subtitle">基本用法</div>
    <cl-row>
      <cl-col span="8">span: 8</cl-col>
      <cl-col span="8">span: 8</cl-col>
      <cl-col span="8">span: 8</cl-col>
    </cl-row>
    
    <cl-row>
      <cl-col span="4">span: 4</cl-col>
      <cl-col span="10" offset="4">offset: 4, span: 10</cl-col>
    </cl-row>
    
    <cl-row>
      <cl-col offset="12" span="12">offset: 12, span: 12</cl-col>
    </cl-row>
    
    <div class="page-subtitle">设置单元格间距</div>
    <cl-row gutter="20">
      <cl-col span="8">span: 8</cl-col>
      <cl-col span="8">span: 8</cl-col>
      <cl-col span="8">span: 8</cl-col>
    </cl-row>
    
  </div>
</template>
<script>
export default {
  name: '',
  data () {
    return {

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
<style lang="scss">
.page-layout {
  .cl-row {
    padding: 0 15px;
  }
  .cl-col {
    color: #fff;
    font-size: 13px;
    line-height: 30px;
    text-align: center;
    margin-bottom: 10px;
    background-clip: content-box;
    &:nth-child(odd) {
      background-color: #4F7DE2;
    }
    
    &:nth-child(even) {
      background-color: #6190E8;
    }
  }
}
</style>
