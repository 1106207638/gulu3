<template>
  <template v-if="visible">
    <div class="dialog-overlay" @click="onClickOverlay"></div>
    <div class="dialog-wrapper">
      <header>
        <!-- {{title}} -->
        <slot name="title" />
        <div @click="close" class="gulu-span-close">222</div>
      </header>
      <main>
        <slot name="content" />
      </main>
      <footer>
        <Button @click="ok">OK</Button><Button @click="cancle">取消</Button>
      </footer>
    </div>
  </template>
</template>

<script lang="ts">
import Button from "./Button.vue";
export default {
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
    closeOnClickOverlay: {
      type: Boolean,
      default: true,
    },
    ok: {
      type: Function,
    },
    cancle: {
      type: Function,
    },
    title: {
      type: String,
      default: "标题",
    },
  },
  components: {
    Button,
  },
  setup(props, context) {
    const close = () => {
      console.log(1221);
      context.emit("update:visible", false);
    };
    const onClickOverlay = () => {
      if (props.closeOnClickOverlay) {
        close();
      }
    };
    const ok = () => {
      if (props.ok?.() !== false) {
        close();
      }
    };
    const cancle = () => {
      context.emit("cancle");
    };
    return { close, onClickOverlay, ok, cancle };
  },
};
</script>
