<template>
  <div class="page-image-preview">
    <div class="page-title">ImagePreview 图片预览</div>
    <div class="page-body">
      <div class="preview-box">
        <cl-button @click="showImagePreview">预览图片</cl-button>
        <br>
        <cl-button @click="showImagePreview(2)">指定位置预览</cl-button>
      </div>
    </div>
  </div>
</template>
<script>
import { ImagePreview } from 'src'
export default {
  name: '',
  data () {
    return {
      images: [
        'http://ww1.sinaimg.cn/large/e0653793gy1fhzjnzdzjtj217m0t4aom.jpg',
        'http://ww1.sinaimg.cn/large/e0653793gy1fhzjnzi7ojj23vc2kwe6f.jpg',
        'http://ww1.sinaimg.cn/large/e0653793gy1fhzjnzlv4ij23v92kyncp.jpg',
        'http://ww1.sinaimg.cn/large/e0653793gy1fhzjo0yeuzj22kw3vc1i9.jpg',
        'http://ww1.sinaimg.cn/large/e0653793gy1fhzjo0yf9oj22kw3vc7wh.jpg',
        'http://ww1.sinaimg.cn/large/e0653793gy1fhzjo13tryj23vc2kw1kx.jpg'
      ],
      indicators: true
    }
  },
  beforeCreate () {},
  created () {},
  mounted () {},
  computed: {},
  methods: {
    showImagePreview (posi) {
      ImagePreview(this.images, typeof posi === 'number' ? posi : 0, this.indicators)
    }
  },
  components: {}
}
</script>
<style lang="scss" scoped>
.preview-box {
  padding: 15px;
}
</style>
