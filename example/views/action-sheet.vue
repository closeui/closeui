<template>
  <div class="page-actionsheet">
    <div class="page-title">ActionSheet-行动按钮</div>
    <div class="page-body">
      <cl-button type="default" @click="show1 = true">弹出actionsheet</cl-button>
      <cl-actionsheet v-model="show1" :actions="actions1"></cl-actionsheet>
    </div>
  </div>
</template>
<script>
export default {
  name: '',
  data () {
    return {
      show1: false,
      actions1: [
        {
          name: '微信安全支付',
          className: 'actionsheet-wx',
          callback: this.handleActionClick
        },
        {
          name: '信用卡支付'
        },
        {
          name: '其他支付方式'
        }
      ]
    }
  },
  beforeCreate () {},
  created () {},
  mounted () {},
  computed: {},
  methods: {
    handleActionClick (item) {
      console.log(item)
    }
  },
  components: {}
}
</script>
<style lang="scss">
.page-body {
  box-sizing: border-box;
  padding: 10px 15px;
}
</style>
