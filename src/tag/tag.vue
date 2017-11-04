<template>
  <span :class="['cl-tag', 'cl-hairline--surround', { [`cl-tag--${type}`]: type, 'is-plain': plain, 'is-mark': mark }]">
    <slot></slot>
  </span>
</template>
<script>
const ALLOW_TYPE = ['danger', 'success', 'primary']
export default {
  name: 'cl-tag',
  props: {
    type: {
      type: String,
      validator: val => ~ALLOW_TYPE.indexOf(val)
    },
    mark: Boolean,
    plain: Boolean
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
