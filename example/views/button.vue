<template>
  <div class="page-button">
    <div class="page-title">Button</div>
    <div class="buttons">
      <cl-button size="large">default</cl-button>
      <cl-button size="large" type="primary">primary</cl-button>
      <cl-button size="large" type="danger">danger</cl-button>
      <cl-button size="large" type="warning">warning</cl-button>
      <cl-button>default</cl-button>
      <cl-button type="primary">primary</cl-button>
      <cl-button type="danger">danger</cl-button>
      <cl-button type="danger" size="middle">danger</cl-button>
      <cl-button type="danger" size="small">danger</cl-button>
      <cl-button type="danger" icon="search">danger</cl-button>
      <cl-button type="primary" icon="search"></cl-button>
      <cl-button type="primary" loading></cl-button>
      <cl-button disabled size="large">default</cl-button>
      <cl-button disabled size="large" type="primary">primary</cl-button>
      <cl-button disabled size="large" type="danger">danger</cl-button>
      <cl-button plain size="large">default</cl-button>
      <cl-button plain size="large" type="primary">primary</cl-button>
      <cl-button plain size="large" type="danger">danger</cl-button>
    </div>
    
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
.buttons {
  padding: 10px;
  box-sizing: border-box;
}
.cl-button {
  margin: 10px 0;
}
</style>
