/**
 * 根据父组件名找对应的 parent
 */

export default {
  methods: {
    findParentByComponentName (name) {
      if (this.parentGroup) return
      let parent = this.$parent
      while (parent) {
        if (parent.$options.name === name) {
          this.parentGroup = parent
          break
        } else {
          parent = parent.$parent
        }
      }
      return this.parentGroup
    }
  }
}
