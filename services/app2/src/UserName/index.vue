<template>
  <div class="user">
    <p>MICRO 2 Widget</p>
    <div>Name: {{ userName }}</div>
    <input :value="userName" @input="(e) => setNameEv(e.target.value)" />
    <button @click="resetNameEv">Reset</button>
  </div>
</template>

<script>
import { user } from "./model";

export default {
  name: "UserName",
  effector: {
    userName: user.$name,
  },
  methods: {
    setNameEv: user.setNameEv,
    resetNameEv: user.resetNameEv,
  },
};
</script>

<style scoped>
.user {
  padding: 10px;
  margin: 10px;
  background: lightsalmon;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
