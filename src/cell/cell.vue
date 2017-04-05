<template lang="html">
  <a :href="href" class="bz-cell">
    <span class="bz-cell-mask" v-if="isLink"></span>
    <div class="bz-cell-left">
      <slot name="left"></slot>
    </div>
    <div class="bz-cell-wrapper">
      <div class="bz-cell-title">
        <slot name="icon">
          <i v-if="icon" class="bzui" :class="'bzui-' + icon"></i>
        </slot>
        <slot name="title">
          <span class="bz-cell-text" v-text="title"></span>
          <span class="bz-cell-label" v-if="label" v-text="label"></span>
        </slot>
      </div>
      <div class="bz-cell-value" :class="{'is-link' : isLink}">
        <slot>
          <span v-text="value"></span>
        </slot>
      </div>
    </div>
    <div class="bz-cell-right">
      <slot name="right"></slot>
    </div>
    <i class="bz-cell-allow-right" v-if="isLink"></i>
  </a>
</template>

<script>
/**
 * bz-cell
 * @param
 */
export default {
  name: 'bz-cell',
  props: {
    to: [String, Object],
    icon: String,
    title: String,
    label: String,
    isLink: Boolean,
    value: {}
  },
  data: function () {
    return {
    }
  },
  computed: {
    href () {
      if (this.to && !this.added && this.$router) {
        const resolved = this.$router.match(this.to)
        if (!resolved.matched.length) {
          return this.to
        }
        this.$nextTick(() => {
          this.added = true
          this.$el.addEventListener('click', this.handleClick)
        })
        return resolved.path
      }
      return this.to
    }
  },
  ready: function () {},
  attached: function () {},
  methods: {
    handleClick ($event) {
      $event.preventDefault()
      this.$router.push(this.href)
    }
  },
  components: {}
}
</script>

<style lang="scss">
@import "../style/base.scss";
.bz-cell {
  background-color: $color-white;
  box-sizing: border-box;
  color: inherit;
  min-height: 4.8rem;
  display: block;
  overflow: hidden;
  position: relative;
  text-decoration: none;
  &:first-child {
    .bz-cell-wrapper {
      background-origin: border-box;
    }
  }
  &:last-child {
    background-image: linear-gradient(0deg, $color-grey, $color-grey 50%, transparent 50%);
    background-size: 100% .1rem;
    background-repeat: no-repeat;
    background-position: bottom;
  }
  img {
    vertical-align: middle;
  }
}
.bz-cell-wrapper {
  background-image: linear-gradient(180deg, $color-grey, $color-grey 50%, transparent 50%);
  background-size: 120% .1rem;
  background-repeat: no-repeat;
  background-position: top left;
  background-origin: content-box;
  align-items: center;
  box-sizing: border-box;
  display: flex;
  font-size: 1.6rem;
  line-height: 1;
  min-height: inherit;
  overflow: hidden;
  padding: 0 1rem;
  width: 100%;
}
.bz-cell-mask {
  &::after {
    background-color: #000;
    content: '';
    opacity: 0;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
  &:active::after {
    opacity: .1;
  }
}

.bz-cell-text {
  vertical-align: middle;
}
.bz-cell-label {
  color: #888;
  display: block;
  font-size: 1.2rem;
  margin-top: .6rem;
}
.bz-cell-title {
  flex: 1;
}
.bz-cell-value {
  color: $cell-value-color;
  display: flex;
  align-items: center;
  &.is-link {
    margin-right: 2.4rem;
  }
}
.bz-cell-left {
  position: absolute;
  height: 100%;
  left: 0;
  transform: translate3d(-100%, 0, 0);
}
.bz-cell-right {
  position: absolute;
  height: 100%;
  right: 0;
  top: 0;
  transform: translate3d(100%, 0, 0);
}
.bz-cell-allow-right::after {
  border: .2rem solid $border-color;
  border-bottom-width: 0;
  border-left-width: 0;
  content: '';
  position: absolute;
  top: 50%;
  right: 2rem;
  width: 5px;
  height: 5px;
  transform: translateY(-50%) rotate(45deg);
}
</style>
