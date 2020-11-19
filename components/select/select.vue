<template>
  <input ref="iptRef" @click="isShow=!isShow" type="text"/>
  <options v-if="isShow">
    <slot></slot>
  </options>
</template>

<script>
import {defineComponent, ref, onMounted, createVNode, render} from 'vue'
import options from "./options";

export default defineComponent({
  name: "UcSelect",
  setup(props, ctx) {
    const isShow = ref(false)
    const iptRef = ref(null)
    const modalRef = ref(null)
    onMounted(() => {
      const instance = document.createElement('div');
      instance.className = 'uc-position';
      document.body.appendChild(instance);
      const vm = createVNode(
          options,
          null,
      )
      render(vm, instance)
      const {top, left} = iptRef.value.getBoundingClientRect()
      console.log(top, left)
    })
    return {
      isShow,
      iptRef,
      modalRef
    }
  }
})
</script>

<style scoped>

</style>
