<template>
  <div class="demo-nav-group">
    <div class="demo-nav-group__title demo-nav-group__basetitle" :class="{'demo-nav-group__title--open': isOpen}" @click="handleNavTitle">
      {{group.groupName}}
    </div>
    <div class="demo-nav-group__list-wrapper" :class="{'demo-nav-group__list-wrapper--open': isOpen}">
      <ul class="demo-nav-group__list" :class="{'demo-nav-group__list--open': isOpen}">
        <template v-for="(navItem, index) in group.list">
          <li :key="index" class="demo-nav-group__title" v-if="!navItem.disabled">
            <router-link active-class="active" :to="navItem.path">
              <p>{{navItem.title}}</p>
            </router-link>
          </li>
        </template>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: '',
  props: {
    group: {
      type: Object,
      default: () => {
        return []
      }
    },
    base: String,
    navKey: [String, Number]
  },
  data () {
    return {
      isOpen: false
    }
  },
  beforeCreate () {},
  created () {},
  mounted () {
    this.isOpen = JSON.parse(sessionStorage.getItem('demo-nav-' + this.navKey))
  },
  computed: {},
  methods: {
    handleNavTitle () {
      this.isOpen = !this.isOpen
      sessionStorage.setItem('demo-nav-' + this.navKey, this.isOpen)
    }
  },
  components: {}
}
</script>
<style lang="scss">
.demo-nav-group {
  background-color: #ffffff;
  margin-bottom: 15px;
  border-radius: 2px;
  box-shadow: 0 1px 1px 0 rgba(0,0,0,0.10);
  .demo-nav-group__basetitle {
    padding-left: 20px;
  }
  .demo-nav-group__title {
    font-size: 16px;
    color: #333;
    line-height: 56px;
    position: relative;
    user-select: none;
    &.demo-nav-group__title--open {
      color: #999;
    }
    a {
      color: #333;
      display: block;
      user-select: none;
      padding-left: 20px;
      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
      &:active {
        background: #ececec;
      }
      
      > p {
        border-top: 1px solid #e5e5e5;
        -webkit-margin-before: 0em;
        -webkit-margin-after: 0em;
      }
    }
  }
  
  .demo-nav-group__list-wrapper {
    height: 0;
    overflow: hidden;
    &.demo-nav-group__list-wrapper--open {
      height: auto;
    }
  }
  
  .demo-nav-group__list {
    transform: translateY(-50%);
    transition: transform .2s ease-out;
    &.demo-nav-group__list--open {
      transform: translateY(0);
    }
  }
  
  li {
    list-style: none;
  }
  ul {
    padding: 0;
    margin: 0;
    overflow: hidden;
  }
}
</style>
