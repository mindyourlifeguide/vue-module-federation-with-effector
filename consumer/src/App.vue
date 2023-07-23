<template>
  <div id="app">
    This is /consumer.
    <hr />
      <div>Counter: {{counter}}</div>
      <button @click="incrementEv">Increment</button>
      <button @click="decrementEv">Decrement</button>
    <Section>
    <Button>Button from /core</Button>
    </Section>
    <hr />
    <MainComponent />
  </div>
</template>

<script>
import counter from "core/counter"

export default {
  name: "App",
  components: {
    Button: () => import("core/Button"),
    Section: () => import("core/Section"),
    MainComponent: () => import("other/MainComponent"),
  },
  effector: {
    counter: counter.$counter,
  },
  methods: {
    incrementEv: counter.incrementEv,
    decrementEv: counter.decrementEv,
  },
};


</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
