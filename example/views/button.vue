<template>
  <div>
    <bz-button size="large">default</bz-button>
    <bz-button size="large" type="primary">primary</bz-button>
    <bz-button size="large" type="danger">danger</bz-button>
    <bz-button>default</bz-button>
    <bz-button type="primary">primary</bz-button>
    <bz-button type="danger">danger</bz-button>
    <bz-button disabled size="large">default</bz-button>
    <bz-button disabled size="large" type="primary">primary</bz-button>
    <bz-button disabled size="large" type="danger">danger</bz-button>
    <bz-button plain size="large">default</bz-button>
    <bz-button plain size="large" type="primary">primary</bz-button>
    <bz-button plain size="large" type="danger">danger</bz-button>
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
