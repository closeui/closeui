<template>
  <div class="page-checkbox">
    <div class="page-title">Checkbox</div>
    
    <div class="checkbox-body">
      <cl-checkbox v-model="checkbox1" label="shanghai">上海</cl-checkbox>
      <cl-checkbox v-model="checkbox2" label="shenzhen" shape="square">深圳</cl-checkbox>
      <cl-checkbox v-model="checkbox1" label="beijing" disabled>北京</cl-checkbox>
    </div>
    
    <div class="checkbox-body">
      <cl-checkbox-group v-model="result" >
        <cl-checkbox v-for="(item, index) in list" :key="index" :name="item">复选框{{item}}</cl-checkbox>
      </cl-checkbox-group>
      {{result}}
    </div>
    
  </div>
</template>
<script>
export default {
  name: '',
  data () {
    return {
      checkbox1: true,
      checkbox2: false,
      list: ['a', 'b', 'c'],
      result: ['a', 'b']
    }
  },
  beforeCreate () {},
  created () {
  },
  mounted () {},
  computed: {},
  methods: {},
  components: {}
}
</script>
<style lang="scss">
.checkbox-body {
  padding: 15px;
}
</style>
