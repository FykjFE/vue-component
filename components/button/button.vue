<template>
  <button
      :disabled="type==='disabled'"
      :class="['uc-btn',btnSize,btnType]"
  >
    <slot></slot>
  </button>
</template>
<script lang="ts">
import {defineComponent} from 'vue';
import {getSize} from "../_utils/getSize";
import {getType} from "../_utils/getType";

export default defineComponent({
  name: 'UcButton',
  props: {
    type: {
      type: String,
      default: 'default'
    },
    size: {
      type: String,
      default: 'default'
    },
  },
  computed: {
    btnSize() {
      return `uc-btn-${getSize(this.size)}`
    },
    btnType() {
      return `uc-btn-${getType(this.type)}`
    }
  }
})
</script>
