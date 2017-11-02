<template>
  <div class="page-lazyload">
    <div class="page-title">Lazyload 图片懒加载</div>
    <div class="page-body">
      <div class="container">
        <div class="img-title">基础用法</div>
        <img v-for="img in imageList" v-lazy="img" alt="">
      </div>
      
      <div class="container">
        <div class="img-title">背景加载</div>
        <img v-for="img in backgroundImageList" v-lazy:background-image="img" alt="">
      </div>
      
      <div class="container">
        <div class="img-title">懒加载模块</div>
        <lazy-component>
          <img v-for="img in componentImageList" v-lazy="img" alt="">
        </lazy-component>
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
      ],
      backgroundImageList: [
        'http://ww2.sinaimg.cn/large/e0653793gw1fa8phyfa7zj21hc13gtwn.jpg',
        'http://ww2.sinaimg.cn/large/e0653793gw1f46sgtxu19j20oq0ghadp.jpg'
      ],
      componentImageList: [
        'http://ww3.sinaimg.cn/large/e0653793gw1faa1htjqnsj21kw11z49w.jpg',
        'http://ww3.sinaimg.cn/large/e0653793gw1faa1hrcjcqj21kw11z143.jpg'
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
.page-body {
  .container {
    padding: 15px;
  }
  
  img, div[lazy] {
    width: 100%;
    height: 250px;
    margin: 10px 0 0;
    background-color: #fff;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
    background-size: 315px 250px;
    background-position: 15px;
    background-repeat: no-repeat;
    box-sizing: border-box;
  }
}
</style>
