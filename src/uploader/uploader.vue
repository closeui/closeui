<template>
  <div class="cl-uploader">
    <slot></slot>
    <input type="file" @change="onValueChange" :disabled="disabled" ref="input" class="cl-uploader__input">
  </div>
</template>
<script>
export default {
  name: 'cl-uploader',
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    beforeRead: Function,
    afterRead: Function,
    resultType: {
      type: String,
      default: 'dataUrl',
      validator: value => value === 'dataUrl' || value === 'text'
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
  methods: {
    onValueChange (event) {
      if (this.disabled) {
        return
      }
      const file = event.target.files[0]
      if (!file || (this.beforeRead && !this.beforeRead(file))) {
        return
      }
      const reader = new FileReader()
      reader.onload = (e) => {
        this.afterRead && this.afterRead({
          file,
          content: e.target.result
        })
        this.$refs.input && (this.$refs.input.value = '')
      }
      if (this.resultType === 'dataUrl') {
        reader.readAsDataURL(file)
      } else if (this.resultType === 'text') {
        reader.readAsText(file)
      }
    }
  },
  components: {}
}
</script>
<style>
</style>
