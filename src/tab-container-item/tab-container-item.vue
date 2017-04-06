<template lang="html">
  <div class="bz-tab-container-item" v-show="$parent.swiping || id === $parent.currentActive">
    <slot></slot>
  </div>
</template>
<script>
/**
 * bz-tab-container-item
 * @param {number|string} [id] - 该项的 id
 * @example
 * <bz-tab-container v-model="selected">
 *  <bz-tab-container-item id='1'>
 *  内容
 *  </bz-tab-container-item>
 * </bz-tab-container>
 */
export default {
  name: 'bz-tab-container-item',
  props: ['id'],
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
.bz-tab-container-item {
  flex-shrink: 0;
  width: 100%;
}
</style>
