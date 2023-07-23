import Vue from 'vue';
import App from './App.vue';
import { VueEffector } from 'effector-vue'

Vue.use(VueEffector)
Vue.config.productionTip = false;

new Vue({
    render: h => h(App),
}).$mount('#app');
