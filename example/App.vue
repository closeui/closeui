<template>
  <div id="app">
    <router-link class="page-back" v-if="visible" :to="'/'">
      <i class="cl-icon ion-chevron-left"></i>
    </router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  computed: {
    visible () {
      return ['/', '/header', '/search'].indexOf(this.$route.path) < 0
    }
  }
}
</script>

<style lang="scss">
@import './assets/scss/main';
</style>
