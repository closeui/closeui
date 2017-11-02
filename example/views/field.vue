<template>
  <div class="page-field">
    <div class="page-title">Field</div>
    <div class="page-body">
      <div class="field-box">
        <cl-field label="用户名" placeholder="请输入用户名" clearable></cl-field>
        <cl-field label="邮箱" placeholder="请输入邮箱" type="email" error></cl-field>
        <cl-field label="禁用" placeholder="输入框已经禁用" type="text" disabled></cl-field>
      </div>
      
      <div class="field-box">
        <cl-field placeholder="留言" type="text" v-model="remark"></cl-field>
        <cl-field placeholder="文本域" type="textarea" rows="4"></cl-field>
      </div>
      
      <div class="field-box">
        <cl-field label="验证码" placeholder="输入验证码">
          <div class="cl-field-ft">获取验证码</div>
        </cl-field>
      </div>
      
      <div class="field-box">
        <cl-field label="高度自适应" placeholder="自适应" v-model="autoText" type="textarea" rows="1" autosize></cl-field>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: '',
  data () {
    return {
      remark: '',
      autoText: ''
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
<style lang="scss" scoped>
.field-box {
  margin-bottom: 10px;
}
</style>
