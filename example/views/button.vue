<template>
  <div>
    <cl-button size="large">default</cl-button>
    <cl-button size="large" type="primary">primary</cl-button>
    <cl-button size="large" type="danger">danger</cl-button>
    <cl-button>default</cl-button>
    <cl-button type="primary">primary</cl-button>
    <cl-button type="danger">danger</cl-button>
    <cl-button disabled size="large">default</cl-button>
    <cl-button disabled size="large" type="primary">primary</cl-button>
    <cl-button disabled size="large" type="danger">danger</cl-button>
    <cl-button plain size="large">default</cl-button>
    <cl-button plain size="large" type="primary">primary</cl-button>
    <cl-button plain size="large" type="danger">danger</cl-button>
  </div>
</template>

<script>
export default {
  name: 'button',
  data () {
    return {}
  }
}
</script>

<style lang="scss">
</style>
