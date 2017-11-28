<template>
  <div id="page-search" class="page-search">
    <cl-search autofocus v-model="value" :result="filterResult"></cl-search>
  </div>
</template>
<script>
export default {
  name: 'page-search',
  data () {
    return {
      value: '',
      defaultResult: [
        'Apple',
        'Banana',
        'Orange',
        'Durian',
        'Lemon',
        'Peach',
        'Cherry',
        'Berry',
        'Core',
        'Fig',
        'Haw',
        'Melon',
        'Plum',
        'Pear',
        'Peanut',
        'Other'
      ]
    }
  },
  beforeCreate () {},
  created () {},
  mounted () {},
  computed: {
    filterResult () {
      return this.defaultResult.filter(value => new RegExp(this.value, 'i').test(value))
    }
  },
  methods: {},
  componets: {}
}
</script>
<style lang="scss" scoped>
.page-search {
  height: 100%;
}
</style>
