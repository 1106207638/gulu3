<template>
  <button class="gulu-button" :class="`gulu-theme-${theme}`"><slot /></button>
</template>
<script lang="ts">
export default {
  props: {
    theme: {
        type:String,
        default:'button'
    },
  },
};
</script>
