<template>
  <section class="page-demo">
    <div class="" v-for="item in navs">
      <cl-cell :to="item.path" is-link>
        <div class="" slot="title">
          <i :class="['indexicon', 'icon-' + item.name]"></i>
          <span>{{item.name}}</span>
        </div>
      </cl-cell>
    </div>
  </section>
</template>
<script>
import router from '../router'
export default {
  name: "",
  data: function data() {
    return {
      navs: []
    }
  },
  created () {
    this.navs = router.options.routes
  }
}
</script>
<style>
</style>