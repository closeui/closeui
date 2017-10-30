<template>
  <div class="page-actionsheet">
    <div class="page-title">Toast-弹出式提示</div>
    <div class="page-body">
      <div class="block">
        <cl-button type="default" @click="showToast">文字提示</cl-button>
      </div>
      
      <div class="block">
        <cl-button type="default" @click="showLoadingToast">加载提示</cl-button>
        <br>
        <cl-button type="default" @click="showLoadingToastWithMsg">加载提示文字</cl-button>
      </div>
      
      <div class="block">
        <cl-button type="default" @click="showSuccessToast">成功提示</cl-button>
        <br>
        <cl-button type="default" @click="showFailToast">失败提示</cl-button>
      </div>
      
    </div>
  </div>
</template>
<script>
import { Toast } from 'src/index'
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
  methods: {
    showToast () {
      Toast('提示文案，建议不超过十五字')
    },
    showLoadingToast () {
      Toast.loading()
    },
    showLoadingToastWithMsg () {
      const toast = Toast.loading({
        duration: 0,
        forbidClick: true,
        message: '倒计时 3 秒'
      })
      let second = 3
      const timer = setInterval(() => {
        second--
        if (second) {
          toast.message = `倒计时 ${second} 秒`
        } else {
          clearInterval(timer)
          Toast.clear()
        }
      }, 1000)
    },
    showSuccessToast () {
      Toast.success('成功文案')
    },
    showFailToast () {
      Toast.fail('失败文案')
    },
    onClickAlert () {
      Dialog.alert({
        title: '标题',
        message: '这里是内容'
      }).then(() => {
        console.log('close 1')
      })
    },
    onClickAlert2 () {
      Dialog.alert({
        message: '弹窗内容'
      }).then(() => {
        console.log('close 2')
      })
    },
    onClickConfirm () {
      Dialog.confirm({
        title: '标题',
        message: '这里是内容'
      }).then(() => {
        console.log('confirm')
      }).catch(() => {
        console.log('cancel')
      })
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
