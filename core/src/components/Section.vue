<template>
  <section class="section">
    <h1>
      This is a section from /core.
    </h1>
    <div>Counter: {{counter}}</div>
    <button @click="incrementEv">Increment</button>
    <button @click="decrementEv">Decrement</button>
    <slot />
  </section>
</template>

<script>
import {$counter, decrementEv, incrementEv} from "@/models/model.ts";

export default {
  name: 'Section',
  effector: {
    counter: $counter,
  },
  methods: {
    incrementEv: incrementEv,
    decrementEv: decrementEv,
  },
}
</script>

<style>
.section {
  border: 1px solid black;
  padding: 10px;
}
</style>