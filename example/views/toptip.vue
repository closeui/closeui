<template>
  <div class="page-toptip">
    <div class="page-title">TopTip 顶部通知</div>
    <div class="page-body">
      <div class="container">
        <cl-button @click="showTopTip">顶部通知</cl-button>
      </div>
    </div>
  </div>
</template>
<script>
import { Toptip } from 'src/index'
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
    showTopTip () {
      console.log('show')
      Toptip({
        type: 'success',
        message: 'test',
        duration: 3000
      })
    }
  },
  components: {}
}
</script>
<style lang="scss" scoped>
.container {
  padding: 15px;
}
</style>
