<template>
  <div class="root">
    ROOT APP
    <GlobalCounter />
    <LocalCounter />
    <ChatWeb />
    <UserWeb />
  </div>
</template>

<script>
import Vue from "vue";
import GlobalCounter from "@mvp/shared/widgets/GlobalCounter.vue";
import LocalCounter from "@mvp/shared/widgets/LocalCounter.vue";
export default Vue.extend({
  name: "RootApp",
  components: {
    GlobalCounter,
    LocalCounter,
    ChatWeb: () => import("chat/ChatWeb"),
    UserWeb: () => import("user/UserWeb"),
  },
});
</script>

<style scoped>
.root {
  background: lightblue;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
