<template>
  <i :class="['cl-icon', 'ion-' + name]" @click="$emit('click', $event)"></i>
</template>
<script>
export default {
  name: 'cl-icon',
  props: {
    name: {
      type: String,
      required: true
    }
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
