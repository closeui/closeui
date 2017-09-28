<template lang="html">
  <div class="page-cell">
    <bz-cell title="标题文字"></bz-cell>
    <bz-cell title="标题文字" value="说明文字"></bz-cell>
    <bz-cell title="标题文字" icon="more" value="带 icon"></bz-cell>
    <bz-cell title="标题文字" icon="more">
      <span>icon 图片</span>
      <img src="https://placeholdit.imgix.net/~text?txtsize=9&txt=100%C3%97100&w=100&h=100" width="24" height="24" slot="icon" alt="" />
    </bz-cell>
    <bz-cell title="标题文字" is-link value="链接"></bz-cell>
    <bz-cell title="标题文字">
      <bz-button size="small" type="primary" icon="back">按钮</bz-button>
    </bz-cell>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
    }
  },
  computed: {},
  methods: {},
  components: {}
}
</script>

<style lang="scss">
</style>
