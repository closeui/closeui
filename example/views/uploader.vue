<template>
  <div class="page-uploader">
    <div class="page-title">Uploader 上传</div>
    <div class="page-body">
      <div class="container">
        <cl-uploader class="uploader" :after-read="uploadFile">
          <cl-icon name="upload" class="uploader-icon"></cl-icon>
        </cl-uploader>
        <br>
        <cl-uploader class="uploader" :after-read="uploadFile">
          <cl-button type="primary" size="small">上传图片</cl-button>
        </cl-uploader>
        <br>
        <br>
        <img class="uploader-img" v-for="(img, index) in images" v-if="images.length > 0" :key="index" :src="img" alt="">
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: '',
  data () {
    return {
      images: []
    }
  },
  beforeCreate () {},
  created () {},
  mounted () {},
  computed: {},
  methods: {
    uploadFile (file) {
      console.log(file)
      this.images.push(file.content)
    }
  },
  components: {}
}
</script>
<style lang="scss" scoped>
.container {
  padding: 15px;
  .uploader {
    &-icon {
      font-size: 26px;
      color: #6c6464;
    }
    &-img {
      width: 100%;
    }
  }
}
</style>
