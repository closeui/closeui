<template>
  <div class="demo-nav">
    <h1 class="clui-title">Close UI Demo</h1>
    <h2 class="clui-desc">移动端Vue 组件库</h2>
    <div class="component-navs">
      <div class="component-nav-item" v-for="(item, index) in data" :key="index">
        <demo-nav v-for="(group, index) in item.groups" :group="group" :base="base" :nav-key="index" :key="index"></demo-nav>
      </div>
    </div>
  </div>
</template>
<script>
import doc from '../config/doc'
import DemoNav from '../components/demonav'
export default {
  name: '',
  data () {
    return {
      data: doc.nav,
      base: '/'
    }
  },
  beforeCreate () {},
  created () {},
  mounted () {},
  computed: {},
  methods: {},
  components: {
    DemoNav
  }
}
</script>
<style lang="scss">
.demo-nav {
  width: 100%;
  box-sizing: border-box;
  padding: 40px 15px 20px;
  position: relative;
  z-index: 1;
  
  .clui-title, .clui-desc {
    text-align: center;
    font-weight: normal;
    user-select: none;
  }
  
  .clui-title {
    &::before {
      content: '';
      width: 42px;
      height: 42px;
      background-image: url('https://ws1.sinaimg.cn/large/e0653793gy1fkm6sum7vgj205k05kmx0.jpg');
      background-size: 42px 42px;
      position: absolute;
      left: 40px;
    }
  }
  
  .clui-desc {
    font-size: 14px;
    color: #666;
    margin-bottom: 50px;
  }
}

</style>
