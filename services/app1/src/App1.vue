<template>
  <div class="chat">
    <p>MICRO 1</p>
    <p>Global Model</p>
    <div>Counter: {{ counterApp1App }}</div>
    <button class="button" @click="decrementApp1Ev">-</button>
    <button class="button" @click="incrementApp1Ev">+</button>
  </div>
</template>

<script>
import { counter } from "@mvp/shared";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "App1",
  effector: {
    counterApp1App: counter.$counter,
  },
  methods: {
    incrementApp1Ev: counter.incrementEv,
    decrementApp1Ev: counter.decrementEv,
  },
};
</script>

<style scoped>
.chat {
  padding: 10px;
  margin: 10px;
  background: lightgreen;
  border: 14px solid lightgreen;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.button {
  padding: 10px 20px;
}
</style>
