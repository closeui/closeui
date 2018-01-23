<template>
  <div class="page-infinitescroll">
    <div class="page-title">InfiniteScroll 无限加载</div>
    <div class="page-body">
      <ul
        class="scroll-ul"
        v-infinitescroll-lower="loadMore"
        infinitescroll-disabled="disabled"
        infinitescroll-offset="400">
        <li class="scroll-list" v-for="item in list" :key="item">{{item}}</li>
      </ul>
    </div>
  </div>
</template>
<script>
import { Infinitescroll } from 'src/index'
export default {
  name: '',
  data () {
    return {
      list: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      disabled: false
    }
  },
  directives: {
    InfinitescrollLower: Infinitescroll('lower')
  },
  beforeCreate () {},
  created () {},
  mounted () {},
  computed: {},
  methods: {
    loadMore () {
      this.disabled = true
      setTimeout(() => {
        for (let i = 0; i < 5; i++) {
          this.list.push(this.list.length)
        }
        this.disabled = false
      }, 2000)
    }
  },
  components: {}
}
</script>
<style lang="scss" scoped>
.scroll-list {
  padding: 15px 0;
  border-bottom: 1px solid #e5e5e5;
  text-align: center;
}
</style>
