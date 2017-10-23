<template>
  <div class="page-switch">
    <div class="page-title">Switch 开关</div>
    <div class="switch-box">
      <cl-switch v-model='value1' @change="handleChange">
        <label v-text="value1"></label>
      </cl-switch>
    </div>
    
    <div class="switch-box">
      <cl-switch v-model="value4" @change="handleChange">
        <label v-text="value4"></label>
      </cl-switch>
    </div>
    
    <cl-cell :title="`选项${value2}`">
      <cl-switch v-model="value2" @change="handleChange"></cl-switch>
    </cl-cell>
    <cl-cell :title="`选项${value3}`">
      <cl-switch v-model="value3" @change="handleChange"></cl-switch>
    </cl-cell>
  </div>
</template>
<script>
export default {
  name: 'page-switch',
  data () {
    return {
      value1: false,
      value2: false,
      value3: true,
      value4: true
    }
  },
  beforeCreate () {},
  created () {},
  mounted () {},
  computed: {},
  methods: {
    handleChange (event) {
      console.log(event)
    }
  },
  componets: {}
}
</script>
<style lang="scss">
.switch-box {
  padding-left: 10px;
  padding-bottom: 15px;
}
</style>
