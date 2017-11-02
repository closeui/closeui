<template>
  <div class="page-swipe">
    <div class="page-title">Swipe 轮播</div>
    <div class="page-body">
      <div class="container">
        <div class="container-title">基础用法</div>
        <cl-swipe :autoplay="3000">
          <cl-swipe-item>1</cl-swipe-item>
          <cl-swipe-item>2</cl-swipe-item>
          <cl-swipe-item>3</cl-swipe-item>
          <cl-swipe-item>4</cl-swipe-item>
        </cl-swipe>
      </div>
      
      <div class="container">
        <div class="container-title">图片懒加载</div>
        <cl-swipe>
          <cl-swipe-item v-for="(img, index) in imageList" :key="index">
            <img v-lazy="img">
          </cl-swipe-item>
        </cl-swipe>
      </div>
      
    </div>
  </div>
</template>
<script>
export default {
  name: '',
  data () {
    return {
      imageList: [
        'http://ww3.sinaimg.cn/large/e0653793gw1faa1htjqnsj21kw11z49w.jpg',
        'http://ww3.sinaimg.cn/large/e0653793gw1faa1hrcjcqj21kw11z143.jpg',
        'http://ww1.sinaimg.cn/large/e0653793gy1fhzjns9igmj23t82jg0ya.jpg',
        'http://ww1.sinaimg.cn/large/e0653793gy1fhzjnx82jnj22io1w0dow.jpg'
      ]
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
<style lang="scss" scoped>
.container {
  .cl-swipe {
    cursor: pointer;
    
    &-item {
      color: #fff;
      min-height: 140px;
      font-size: 20px;
      text-align: center;
      line-height: 150px;
      
      &:nth-child(even) {
        background-color: #39a9ed;
      }
      
      &:nth-child(odd) {
        background-color: #66c6f2;
      }
    }
    
    img {
      width: 100%;
      height: 240px;
      display: block;
      box-sizing: border-box;
      background-color: #ffffff;
      pointer-events: none;
    }
  }
}
</style>
