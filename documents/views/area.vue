<template>
  <div class="page-area">
    <div class="page-title">Area 省市区选择</div>
    <div class="page-body">
      <div class="container">
        <div class="container-title">基础用法</div>
        <cl-area :area-list="areaList" @confirm="areaConfirm" @cancel="areaCancel"></cl-area>
      </div>
      <br>
      <div class="container">
        <div class="container-title">选中省市县</div>
        <cl-area :area-list="areaList" value="110101" @confirm="areaConfirm" @cancel="areaCancel"></cl-area>
      </div>
      <br>
      <div class="container">
        <div class="container-title">配置显示列</div>
        <cl-area :area-list="areaList" :columns-num="2" value="110101" @confirm="areaConfirm" @cancel="areaCancel"></cl-area>
      </div>
    </div>
  </div>
</template>
<script>
import AreaList from '../mock/area.json'
export default {
  name: '',
  data () {
    return {
      areaList: AreaList
    }
  },
  beforeCreate () {},
  created () {},
  mounted () {},
  computed: {},
  methods: {
    areaConfirm (value) {
      console.log(value)
    },
    areaCancel () {
      console.log('cancel')
    }
  },
  components: {}
}
</script>
<style>
</style>
