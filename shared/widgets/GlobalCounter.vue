<template>
  <div>
    <p>Global Widget</p>
    <div>Counter: {{ GlobalCounter }}</div>
    <button class="button" @click="decrementGlobalCounterEv">-</button>
    <button class="button" @click="incrementGlobalCounterEv">+</button>
  </div>
</template>

<script>
import { counter } from "../models";

export default {
  name: "GlobalCounter",
  effector: {
    GlobalCounter: counter.$counter,
  },
  methods: {
    incrementGlobalCounterEv: counter.incrementEv,
    decrementGlobalCounterEv: counter.decrementEv,
  },
};
</script>

<style scoped>
.button {
  padding: 10px 20px;
}
</style>
