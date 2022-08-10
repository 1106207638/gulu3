<template>
  <div class="topname">
    <div class="logo" @click="toggleMenu">12321321</div>
    <ul class="menu">
      111
    </ul>
    <span class="toggleAside"></span>
  </div>
</template>
<script lang="ts">
import { inject, Ref } from "vue";

export default {
  setup() {
    const menuVisible = inject<Ref<boolean>>("menuVisible");
    console.log(menuVisible.value);
    const toggleMenu = () => {
      menuVisible.value = !menuVisible.value;
    };
    return { toggleMenu };
  },
};
</script>

<style lang="scss" scoped>
</style>