import Vue from "vue";
import Router from "vue-router";
import Home from "./components/Home.vue";
import Todos from "./components/Todos.vue";
import AccountCreation from "./components/AccountCreation.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/todos",
      name: "todos",
      component: Todos
    },
    {
      path: "/account-creation",
      name: "account-creation",
      component: AccountCreation
    }
  ]
});
