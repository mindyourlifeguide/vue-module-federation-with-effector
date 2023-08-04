<template>
  <div class="root">
    HOST APP
    <UserName />
    <GlobalCounter />
    <App1 />
    <App2 />
  </div>
</template>

<script>
import GlobalCounter from "@mvp/shared/widgets/GlobalCounter.vue";

export default {
  name: "HostApp",
  components: {
    GlobalCounter,
    App1: () => import("app1/App1"),
    App2: () => import("app2/App2"),
    UserName: () => import("app2/UserName"),
  },
};
</script>

<style scoped>
.root {
  padding: 10px;
  margin: 10px;
  border: 14px solid lightblue;
  background: lightblue;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
