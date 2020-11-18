<template>
  <button
    :disabled="type==='disabled'"
    :class="['uc-btn',btnSize,btnType]"
  >
    <slot />
  </button>
</template>
<script lang="ts">
import {defineComponent,computed} from 'vue';
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
  setup(props, ctx) {
    const btnSize = computed(() => {
      return `uc-btn-${getSize(props.size)}`
    })
    const btnType = computed(() => {
      return `uc-btn-${getType(props.type)}`
    })

    return {
      btnSize,
      btnType
    }
  },
})
</script>
