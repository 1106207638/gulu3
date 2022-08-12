<template>
  <div><Switch v-model:value="SwitchChange" /></div>
</template>
<script lang="ts">
import { ref } from "vue";
import Switch from "../lib/Switch.vue";
export default {
  components: {
    Switch,
  },
  setup() {
    const SwitchChange = ref(true);
    return { SwitchChange };
  },
};
</script>
