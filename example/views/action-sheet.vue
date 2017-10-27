<template>
  <div class="page-actionsheet">
    <div class="page-title">ActionSheet-行动按钮</div>
    <div class="page-body">
      <div class="block">
        <cl-button type="default" @click="show1 = true">弹出actionsheet</cl-button>
        <cl-actionsheet v-model="show1" :actions="actions1"></cl-actionsheet>
      </div>
      
      <div class="block">
        <cl-button type="default" @click="show2 = true">弹出带取消按钮的actionsheet</cl-button>
        <cl-actionsheet v-model="show2" :actions="actions1" cancel-text="取消"></cl-actionsheet>
      </div>
      
      <div class="block">
        <cl-button type="default" @click="show3 = true">弹出带标题的actionsheet</cl-button>
        <cl-actionsheet class="actionsheet" v-model="show3" title="超级驾校服务费" :actions="actions1">
          <p class="actionsheet__content">这里是内容</p>
        </cl-actionsheet>
      </div>
      
    </div>
  </div>
</template>
<script>
export default {
  name: '',
  data () {
    return {
      show1: false,
      show2: false,
      show3: false,
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
.block {
  padding-top: 15px;
}

.actionsheet {
  &__content {
    text-align: center;
    font-size: 18px;
  }
}
</style>
