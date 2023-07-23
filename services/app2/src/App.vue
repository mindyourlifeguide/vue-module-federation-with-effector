<template>
  <div class="user">
    <hr />
    <p>MICRO 2</p>
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
  name: "UserWeb",
  components: { LocalCounter, GlobalCounter },
});
</script>

<style scoped>
.user {
  background: lightsalmon;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
