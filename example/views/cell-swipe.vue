<template lang="html">
  <div class="page-cellswipe">
    <div class="page-title">CellSwipe 滑动单元格</div>
    <div class="page-body">
      
      <div class="container">
        
        <cl-cell-swipe :right-width="65" :left-width="65">
          <span slot="left" @click="chooseClick">选择</span>
          <cl-cell-group>
            <cl-cell title="单元格" value="单元格内容"></cl-cell>
          </cl-cell-group>
          <span slot="right" @click="deleteClick">删除</span>
        </cl-cell-swipe>
        
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
    }
  },
  created () {
  },
  computed: {},
  methods: {
    chooseClick () {
      console.log('choose')
    },
    deleteClick () {
      console.log('delete')
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>
.container {
  margin-top: 15px;
}
</style>
