<template>
  <div>
    <Topnav />
    <div class="content">
      <aside v-if="menuVisible">
        <h2>组件列表</h2>
        <ol>
          <li><router-link to="/doc/swich"> Switch 组件</router-link></li>
          <li><router-link to="/doc/button"> Button 组件</router-link></li>
          <li><router-link to="/doc/dialog"> Dialog 组件</router-link></li>
          <li><router-link to="/doc/tabs"> Tabs 组件</router-link></li>
        </ol>
      </aside>
      <main>主内容</main>
    </div>
  </div>
</template>
<script lang='ts'>
import { inject, Ref } from "vue";
import Topnav from "../components/Topnav.vue";
export default {
  components: {
    Topnav,
  },
  setup() {
    const menuVisible = inject<Ref<boolean>>("menuVisible");
    console.log(menuVisible.value);
    return{menuVisible}
  },
};
</script>
