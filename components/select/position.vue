<script>
import {defineComponent,cloneVNode,h} from "vue";
export default defineComponent({
  name: "VcPosition",
  render(){
    return h('div',this.$props,this.$slots)
  }
})
</script>

<style scoped>

</style>
