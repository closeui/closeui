<template>
  <div class="page-lazyload">
    <div class="page-title">Lazyload 图片懒加载</div>
    <div class="page-body">
      <img v-for="img in imageList" v-lazy="img" alt="">
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
<style>
</style>
