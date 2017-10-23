<template>
  <div class="page-radio">
    <div class="page-title">Radio</div>
    <div class="page-body">
      <section class="section-one">
        <p>单选框</p>
        <cl-radio v-model="radio1" name="1">单选框 1</cl-radio>
        <cl-radio v-model="radio1" name="2">单选框 2</cl-radio>
      </section>
      
      <section class="section-one">
        <p>禁止单选框</p>
        <cl-radio v-model="radio2" name="2" disabled>单选框禁止</cl-radio>
      </section>
      
      <section class="section-one">
        <p>单选框组</p>
        <cl-radio-group v-model="radio3">
          <cl-radio name="1">单选框1</cl-radio>
          <cl-radio name="2">单选框2</cl-radio>
        </cl-radio-group>
      </section>
      
      <section class="section-two">
        <p>单选框组与 cell 一起使用</p>
        <cl-radio-group v-model="radio4">
          <cl-cell-group>
            <cl-cell><cl-radio name="1">单选框1</cl-radio></cl-cell>
            <cl-cell><cl-radio name="2">单选框2</cl-radio></cl-cell>
          </cl-cell-group>
        </cl-radio-group>
      </section>
      <cl-cell>选项「{{radio4}}」</cl-cell>
      <section class="section-two">
        <p>单选框组与 cell 一起使用 (右对齐)</p>  
        <cl-radio-group v-model="radio4">
          <cl-cell-group>
            <cl-cell><cl-radio name="1" align="right">单选框1</cl-radio></cl-cell>
            <cl-cell><cl-radio name="2" align="right">单选框2</cl-radio></cl-cell>
          </cl-cell-group>
        </cl-radio-group>
      </section>
    </div>
  </div>
</template>
<script>
export default {
  name: '',
  data () {
    return {
      radio1: '1',
      radio2: '1',
      radio3: '1',
      radio4: '1'
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
.section-one {
  padding-left: 15px;
  .cl-radio {
    margin-top: 10px;
  }
}
.section-two {
  padding-bottom: 20px;
}
</style>
