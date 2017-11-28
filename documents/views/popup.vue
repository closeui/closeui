<template>
  <div class="page-popup">
    <div class="page-title">Popup 弹出层</div>
    <div class="page-body">
      <div class="box">
        <div class="box-title">基础用法</div>
        <cl-button @click="show1 = true">弹出 Popup</cl-button>
        <cl-popup v-model="show1">内容</cl-popup>
      </div>
      
      <div class="box">
        <div class="box-title">弹出位置</div>
        <cl-button @click="show2 = true">底部弹出</cl-button>
        <cl-popup v-model="show2" position="bottom">底部弹出</cl-popup>
        <br>
        <cl-button @click="show3 = true">顶部弹出</cl-button>
        <cl-popup v-model="show3" position="top" :overlay="false">顶部弹出</cl-popup>
        <br>
        <cl-button @click="show4 = true">右侧弹出</cl-button>
        <cl-popup v-model="show4" position="right" :overlay="false">
          <cl-button @click="show4 = false">关闭弹层</cl-button>
        </cl-popup>
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
      show4: false
    }
  },
  beforeCreate () {},
  created () {},
  mounted () {},
  computed: {},
  watch: {
    show2 (val) {
      if (val) {
        setTimeout(() => {
          this.show2 = false
        }, 20000000)
      }
    },
    show3 (val) {
      if (val) {
        setTimeout(() => {
          this.show3 = false
        }, 2000)
      }
    }
  },
  methods: {},
  components: {}
}
</script>
<style lang="scss" scoped>
.page-body {
  padding: 15px;
}
.page-popup {
  .cl-popup {
    width: 60%;
    padding: 20px;
    border-radius: 5px;
    box-sizing: border-box;
  }
  .cl-popup--bottom {
    width: 100%;
    height: 200px;
  }
  .cl-popup--top {
    width: 100%;
    background-color: rgba(51, 51, 51, 1);
    color: #fff;
    border-radius: 0;
  }
  .cl-popup--right {
    width: 100%;
    height: 100%;
  }
}
</style>
