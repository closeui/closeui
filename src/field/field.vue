<template>
  <cl-cell
    class="cl-field"
    :required="required"
    :title="label"
    :class="[{'is-textarea': type === 'textarea', 'is-nolabel': !label, 'is-autosize': autosize, 'is-error': error}]">
    <textarea
      v-if="type === 'textarea'"
      v-model="currentValue"
      @change="$emit('change', currentValue)"
      ref="textarea"
      class="cl-field-core"
      :placeholder="placeholder"
      :rows="rows"
      :disabled="disabled"
      :readonly="readonly">
    </textarea>
    <input
      v-else
      ref="input"
      class="cl-field-core"
      @change="$emit('change', currentValue)"
      :placeholder="placeholder"
      :number="type === 'number'"
      :type="type"
      :value="currentValue"
      :disabled="disabled"
      :readonly="readonly"
      @input="handleInput"
      @focus="active = true"
      >
      <div class="cl-field-clear"
        @click="handleClear"
        v-if="clearable"
        v-show="currentValue && type !== 'textarea' && active">
        <i class="cl-icon ion-ios-close"></i>
      </div>
      <span class="cl-field-state" v-if="state" :class="['is-' + state]">
        <i class="cl-icon" :class="['cl-field-' + state]"></i>
      </span>
      <div class="cl-field-other">
        <slot></slot>
      </div>
  </cl-cell>
</template>
<script>
import ClCell from '../cell/index'
export default {
  name: 'cl-field',
  props: {
    type: {
      type: String,
      default: 'text'
    },
    rows: String,
    label: String,
    placeholder: String,
    error: Boolean,
    required: Boolean,
    autosize: Boolean,
    readonly: Boolean,
    disabled: Boolean,
    clearable: Boolean,
    state: {
      type: String,
      default: 'default'
    },
    value: {},
    attr: Object
  },
  data () {
    return {
      active: false,
      currentValue: this.value
    }
  },
  beforeCreate () {},
  created () {},
  mounted () {
    if (this.autosize && this.type === 'textarea') {
      const el = this.$refs.textarea
      el.style.height = el.scrollHeight + 'px'
      el.style.overflowY = 'hidden'
    }
  },
  computed: {},
  watch: {
    value (val) {
      this.currentValue = val
      if (this.autosize && this.type === 'textarea') {
        this.$nextTick(this.adjustSize)
      }
    },
    currentValue (val) {
      this.$emit('input', val)
    }
  },
  methods: {
    handleInput (e) {
      this.currentValue = e.target.value
    },
    handleClear () {
      if (this.disabled || this.readonly) {
        return
      } else {
        this.currentValue = ''
      }
    },
    adjustSize () {
      const el = this.$refs.textarea
      el.style.height = 'auto'
      el.style.height = el.scrollHeight + 'px'
    }
  },
  components: {
    ClCell
  }
}
</script>
<style lang="scss">
@import "../style/base.scss";
.cl-field {
  display: flex;
  &.is-textarea {
    align-items: inherit;
    .cl-cell-title {
      padding: .2rem 0;
    }
    .cl-cell-value {
      padding: .1rem 0;
    }
  }
  &.is-nolabel {
    .cl-cell-title {
      display: none;
    }
  }
  &.is-error {
    .cl-field-core {
      &,
      &::placeholder {
        color: $red-500;
      }
    }
  }
  .cl-cell-title {
    width: 105px;
    flex: none;
  }
  .cl-cell-value {
    flex: 1;
    color: inherit;
    display: flex;
  }
}

.cl-field-core {
  appearance: none;
  border-radius: 0;
  border: 0;
  flex: 1;
  outline: none;
  line-height: 1.6;
  font-size: inherit;
  width: 100%;
}

.cl-field-clear {
  opacity: .2;
}
</style>
