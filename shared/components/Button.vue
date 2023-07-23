<template>
  <button class="Button">
    <slot>Button</slot>
  </button>
</template>

<script>
export default {
  name: "BaseButton",
};
</script>

<style scoped>
.Button {
  background: yellow;
  color: red;
}
</style>
