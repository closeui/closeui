<template>
  <div>
    <div class="nav">
      <cl-button size="small" @click.native.prevent="active = 'tab-container1'">tab 1</cl-button>
      <cl-button size="small" @click.native.prevent="active = 'tab-container2'">tab 2</cl-button>
      <cl-button size="small" @click.native.prevent="active = 'tab-container3'">tab 3</cl-button>
    </div>
    
    <div class="page-tab-container">
      <cl-tab-container class="page-tabbar-tab-container" v-model="active" swipeable>
        <cl-tab-container-item id="tab-container1">
          <cl-cell v-for="n in 10" :key="n" :title="`tab container1- ${n}`"></cl-cell>
        </cl-tab-container-item>
        <cl-tab-container-item id="tab-container2">
          <cl-cell v-for="n in 5" :key="n" :title="`tab container2- ${n}`"></cl-cell>
        </cl-tab-container-item>
        <cl-tab-container-item id="tab-container3">
          <cl-cell v-for="n in 8" :key="n" :title="`tab container3- ${n}`"></cl-cell>
        </cl-tab-container-item>
      </cl-tab-container>
    </div>
  </div>
</template>
<script>
export default {
  name: "",
  data: function data() {
    return {
      active: 'tab-container1'
    }
  }
}
</script>
<style>
</style>