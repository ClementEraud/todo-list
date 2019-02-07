import Vue from "vue";
import "./plugins/vuetify";
import App from "./App.vue";
import store from "./store";
import router from "./router";

Vue.config.productionTip = false;

new Vue({
  store,
  render: h => h(App),
  router
}).$mount("#app");
