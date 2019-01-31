import Vue from 'vue';
import './plugins/vuetify';
import App from './App.vue';
import store from './store';

Vue.config.productionTip = false;

new Vue({
  store,
  render: h => h(App),
  created: function () {
    this.$store.dispatch("fetchTodos");
  }
}).$mount('#app')
