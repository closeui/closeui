<template>
  <div class="page-checkbox">
    <div class="page-title">Checkbox</div>
    
    <div class="checkbox-body">
      <p>圆形复选框</p>
      <cl-checkbox v-model="checkbox1" label="shanghai">上海</cl-checkbox>
    </div>
    
    <div class="checkbox-body">
      <p>方形复选框</p>
      <cl-checkbox v-model="checkbox2" label="shenzhen" shape="square">深圳</cl-checkbox>
    </div>
    
    <div class="checkbox-body">
      <p>禁止复选框</p>
      <cl-checkbox v-model="checkbox1" label="beijing" disabled>北京</cl-checkbox>
    </div>
    
    <div class="checkbox-body">
      {{result}}
      <p>checkbox 组</p>
      <cl-checkbox-group v-model="result" class="check-group">
        <cl-checkbox v-for="(item, index) in list" :key="index" :name="item">复选框{{item}}</cl-checkbox>
      </cl-checkbox-group>
      
    </div>
    
    <div class="checkbox-group">
      <p>与 cell 组件一起</p>
      <cl-checkbox-group v-model="result">
        <cl-cell-group>
          <cl-cell v-for="(item, index) in list" :key="index">
            <cl-checkbox :name="item">复选框{{item}}</cl-checkbox>
          </cl-cell>
        </cl-cell-group>
      </cl-checkbox-group>
    </div>
    
    <div class="checkbox-group">
      <p>与 cell 组件一起 右对齐</p>
      <cl-checkbox-group v-model="result">
        <cl-cell-group>
          <cl-cell v-for="(item, index) in list" :key="index">
            <cl-checkbox :name="item" align="right">复选框{{item}}</cl-checkbox>
          </cl-cell>
        </cl-cell-group>
      </cl-checkbox-group>
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
  padding-top: 15px;
  padding-left: 15px;
  p {
    line-height: 2;
    -webkit-margin-before: 0em;
    -webkit-margin-after: 0em;
    font-size: 16px;
  }
  .check-group {
    margin-bottom: 20px;
    .cl-checkbox {
      padding: 3px 0;
    }
  }
}

.checkbox-group {
  p {
    line-height: 2;
    padding-left: 15px;
    -webkit-margin-before: 0em;
    -webkit-margin-after: 0em;
    font-size: 16px;
  }
}
</style>
