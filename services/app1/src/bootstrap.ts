import Vue from "vue";
import App1 from "./App1.vue";
import { VueEffector } from "effector-vue";

Vue.use(VueEffector);
Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App1),
}).$mount("#app");
