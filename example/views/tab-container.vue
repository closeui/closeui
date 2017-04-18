<template>
  <div>
    <div class="nav">
      <bz-button size="small" @click.native.prevent="active = 'tab-container1'">tab 1</bz-button>
      <bz-button size="small" @click.native.prevent="active = 'tab-container2'">tab 2</bz-button>
      <bz-button size="small" @click.native.prevent="active = 'tab-container3'">tab 3</bz-button>
    </div>
    
    <div class="page-tab-container">
      <bz-tab-container class="page-tabbar-tab-container" v-model="active" swipeable>
        <bz-tab-container-item id="tab-container1">
          <bz-cell v-for="n in 10" :key="n" :title="`tab container1- ${n}`"></bz-cell>
        </bz-tab-container-item>
        <bz-tab-container-item id="tab-container2">
          <bz-cell v-for="n in 5" :key="n" :title="`tab container2- ${n}`"></bz-cell>
        </bz-tab-container-item>
        <bz-tab-container-item id="tab-container3">
          <bz-cell v-for="n in 8" :key="n" :title="`tab container3- ${n}`"></bz-cell>
        </bz-tab-container-item>
      </bz-tab-container>
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