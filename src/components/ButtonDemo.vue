<template>
  <div>Button</div>
  <Button>2222</Button>
  <Button :theme="'button'">XXXX</Button>
  <Button :theme="'link'">XXXX</Button>
  <Button :theme="'text'">XXXX</Button>
</template>
<script lang="ts">
import { ref } from "vue";
import Button from "../lib/Button.vue";
export default {
  components: {
    Button,
  },
};
</script>
