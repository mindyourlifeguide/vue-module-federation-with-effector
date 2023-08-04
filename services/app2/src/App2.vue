<template>
  <div class="user">
    <p>MICRO 2</p>
    <GlobalCounter />
    <p>Global Model: {{ counter2 }}</p>
    <button class="button" @click="decrementEv">-</button>
    <button class="button" @click="incrementEv">+</button>

    <UserName />

    <p>MICRO 2 Model</p>
    <div>Name: {{ userName }}</div>
    <input :value="userName" @input="(e) => setNameEv(e.target.value)" />
    <button @click="resetNameEv">Reset</button>

    <App1 />
  </div>
</template>

<script>
import { counter } from "@mvp/shared";
import GlobalCounter from "@mvp/shared/widgets/GlobalCounter.vue";
import { user } from "@/UserName/model";
import UserName from "@/UserName";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "App2",
  components: {
    GlobalCounter,
    UserName,
    App1: () => import("app1/App1"),
  },
  effector: {
    counter2: counter.$counter,
    userName: user.$name,
  },
  methods: {
    incrementEv: counter.incrementEv,
    decrementEv: counter.decrementEv,
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
  border: 14px solid lightsalmon;
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
