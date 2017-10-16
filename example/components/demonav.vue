<template>
  <div class="demo-nav-group">
    <div class="demo-nav-group__title demo-nav-group__basetitle" :class="{'demo-nav-group__title--open': isOpen}">
      {{group.groupName}}
    </div>
  </div>
</template>
<script>
export default {
  name: '',
  props: {
    group: {
      type: Object,
      default: () => {
        return []
      }
    },
    base: String,
    navKey: [String, Number]
  },
  data () {
    return {
      isOpen: false
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
<style lang="scss">
.demo-nav-group {
  background-color: #ffffff;
  margin-bottom: 15px;
  border-radius: 2px;
  box-shadow: 0 1px 1px 0 rgba(0,0,0,0.10);
  .demo-nav-group__basetitle {
    padding-left: 20px;
  }
  .demo-nav-group__title {
    font-size: 16px;
    color: #333;
    line-height: 56px;
    position: relative;
    user-select: none;
  }
}
</style>
