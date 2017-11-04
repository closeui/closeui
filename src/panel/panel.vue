<template>
  <div class="cl-panel cl-hairline--top-bottom">
    <div class="cl-panel__header cl-hairline--bottom">
      <slot name="header">
        <div class="cl-panel__title">{{ title }}</div>
        <span class="cl-panel__desc" v-if="desc">{{ desc }}</span>
        <span class="cl-panel__status" v-if="status">{{ status }}</span>
      </slot>
    </div>
    <div class="cl-panel__content">
      <slot></slot>
    </div>
    <div class="cl-panel__footer cl-hairline--top" v-if="$slots.footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'cl-panel',
  props: {
    desc: String,
    title: String,
    status: String
  },
  data () {
    return {

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
