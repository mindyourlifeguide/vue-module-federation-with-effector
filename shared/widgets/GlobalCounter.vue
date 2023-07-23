<template>
  <div>
    <p>Shared</p>
    <div>Global Counter: {{ counter }}</div>
    <button @click="incrementEv">Increment</button>
    <button @click="decrementEv">Decrement</button>
  </div>
</template>

<script>
import Vue from "vue";
import { counter } from "../models";

export default Vue.extend({
  name: "GlobalCounter",
  effector: {
    counter: counter.$counter,
  },
  methods: {
    incrementEv: counter.incrementEv,
    decrementEv: counter.decrementEv,
  },
});
</script>
