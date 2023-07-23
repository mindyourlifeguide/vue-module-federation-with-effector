<template>
  <button class="Button">
    <slot>Button</slot>
  </button>
</template>

<script>
export default {
  name: 'Button',
}
</script>

<style scoped>
.Button{
  background: yellow;
  color: red;
}
</style>