<template lang="html">
  <div class="">
    cell-swipe
    <cl-cell-swipe v-for="n in 10" :key="n" :right="rightButtons" :title="`${n}swipe row`">
      
    </cl-cell-swipe>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
    }
  },
  created () {
    this.rightButtons = [
      {
        content: 'Mark as Unread',
        style: { background: 'lightgray', color: '#fff' }
      }, {
        content: 'Delete',
        style: { background: 'red', color: '#fff' },
        handler: () => alert('delete')
      }
    ]
  },
  computed: {},
  methods: {
    leftButtonHandler (evt) {
      console.log('left button')
    }
  },
  components: {}
}
</script>

<style lang="css">
</style>
