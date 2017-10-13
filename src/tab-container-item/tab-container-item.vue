<template lang="html">
  <div class="cl-tab-container-item" v-show="$parent.swiping || id === $parent.currentActive">
    <slot></slot>
  </div>
</template>
<script>
/**
 * cl-tab-container-item
 * @param {number|string} [id] - 该项的 id
 * @example
 * <cl-tab-container v-model="selected">
 *  <cl-tab-container-item id='1'>
 *  内容
 *  </cl-tab-container-item>
 * </cl-tab-container>
 */
export default {
  name: 'cl-tab-container-item',
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
.cl-tab-container-item {
  flex-shrink: 0;
  width: 100%;
}
</style>
