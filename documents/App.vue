<template>
  <transition name="fade" mode="out-in" @after-leave="afterLeave">
    <router-view></router-view>
  </transition>
</template>

<script>
export default {
  methods: {
    afterLeave () {
      window.scrollTo(0, 0)
    }
  },
  computed: {
    visible () {
      return ['/', '/header', '/search'].indexOf(this.$route.path) < 0
    }
  }
}
</script>

<style lang="scss">
@import './assets/style/main';
</style>
