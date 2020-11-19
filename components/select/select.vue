<template>
  <input ref="iptRef" @click="isShow=!isShow" type="text"/>
</template>

<script>
import {defineComponent, ref, onMounted, createVNode, render,h} from 'vue'
import VcPosition from "./position";
export default defineComponent({
  name: "UcSelect",
  setup(props, ctx) {
    const isShow = ref(false)
    const iptRef = ref(null)
    const modalRef = ref(null)
    onMounted(() => {
      const instance = document.createElement('div');
      instance.className = 'vc-position';
      document.body.appendChild(instance);
      const vm = createVNode(
          VcPosition,
          null,
          ctx.slots.default()
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
