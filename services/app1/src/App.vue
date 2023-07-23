<template>
  <div class="chat">
    <hr />
    <p>MICRO 1</p>
    <GlobalCounter />
    <LocalCounter />
    <hr />
  </div>
</template>

<script>
import Vue from "vue";
import GlobalCounter from "@mvp/shared/widgets/GlobalCounter.vue";
import LocalCounter from "@mvp/shared/widgets/LocalCounter.vue";
export default Vue.extend({
  name: "ChatWeb",
  components: {
    GlobalCounter,
    LocalCounter,
  },
});
</script>

<style scoped>
.chat {
  background: lightgreen;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
