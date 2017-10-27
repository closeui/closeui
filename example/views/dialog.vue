<template>
  <div class="page-actionsheet">
    <div class="page-title">Dialog-弹出框</div>
    <div class="page-body">
      <div class="block">
        <cl-button type="default" @click="onClickAlert">Alert</cl-button>
      </div>
      
      <div class="block">
        <cl-button type="default" @click="onClickAlert2">无标题 Alert</cl-button>
      </div>
      
      <div class="block">
        <cl-button type="default" @click="onClickConfirm">消息确认 Confirm</cl-button>
      </div>
      
    </div>
  </div>
</template>
<script>
import { Dialog } from 'src/index'
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
