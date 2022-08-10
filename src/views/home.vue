<template>
  <div>
    <Topnav />
    <div class="banner">
      <h1>花卷UI</h1>
      <h2>一个厉害的UI框架</h2>
      <p class="actions"><a>GitHub</a><router-link to="/doc">开始</router-link></p>
    </div>
  </div>
</template>
<script lang='ts'>
import Topnav from "../components/Topnav.vue";
export default {
  components: {
    Topnav,
  },
};
</script>
<style lang='scss' scoped>
.topnar {
  border: 1px solid red;
}
</style>