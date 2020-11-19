<template>
  <div>
    {{ label }}
  </div>
</template>

<script>
import {defineComponent} from "vue";

export default defineComponent({
  name: "VcOption",
  props: {
    label: {type: String, default: ''}
  }
})
</script>

<style scoped>

</style>
