<template>
  <div>
    <p>Shared</p>
    <div>Locale Counter: {{ counter }}</div>
    <button @click="incrementEv">Increment</button>
    <button @click="decrementEv">Decrement</button>
  </div>
</template>

<script>
import Vue from "vue";
import { createCounter } from "../models";
import { invoke } from "@withease/factories";

const counter = invoke(createCounter);
export default Vue.extend({
  name: "LocalCounter",
  effector: {
    countere: counter.$counter,
  },
  methods: {
    incrementEv: counter.incrementEv,
    decrementEv: counter.decrementEv,
  },
});
</script>
