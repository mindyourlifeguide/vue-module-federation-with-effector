import Vue from "vue";
import App2 from "./App2.vue";
import { VueEffector } from "effector-vue";

Vue.use(VueEffector);
Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App2),
}).$mount("#app");
