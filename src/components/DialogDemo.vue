<template>
  <div><h1>示例1</h1></div>
  <Button @click="toggle">切换</Button>
  <Dialog
    v-model:visible="x"
    :closeOnClickOverlay="false"
    :ok="f1"
    :cancle="f2"
  >
    <template v-slot:title> <div>dasfsdgfdg</div></template>
    <template v-slot:content>
      <p>内容1</p>
      <p>内容2</p>
    </template>
  </Dialog>
</template>
<script lang="ts">
import Dialog from "../lib/Dialog.vue";
import Button from "../lib/Button.vue";
import { ref } from "vue";
export default {
  components: { Dialog, Button },
  setup() {
    const x = ref(false);
    const toggle = () => {
      x.value = !x.value;
    };
    const f1 = () => {
      console.log(1);
      return true;
    };
    const f2 = () => {
      console.log(2);
    };
    return { x, toggle, f1, f2 };
  },
};
</script>
