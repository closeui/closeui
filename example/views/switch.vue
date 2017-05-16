<template>
  <div id="page-switch">
    <h2>switch</h2>
    <bz-switch v-model='value1' @change="handleChange">
      <label v-text="value1"></label>
    </bz-switch>
    <bz-switch v-model="value4" @change="handleChange">
      <label v-text="value4"></label>
    </bz-switch>
    <bz-cell :title="`选项${value2}`">
      <bz-switch v-model="value2" @change="handleChange"></bz-switch>
    </bz-cell>
    <bz-cell :title="`选项${value3}`">
      <bz-switch v-model="value3" @change="handleChange"></bz-switch>
    </bz-cell>
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
<style>
</style>
