import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import TodoList from "./components/TodoList.vue";
import Stats from "./components/Stats.vue";

Vue.use(VueRouter);
Vue.config.productionTip = false;

const router = new VueRouter({
  routes: [
    { path: "/home", component: TodoList },
    { path: "/stats", component: Stats },
    {path: "*", redirect: "/home"}
  ]
});
new Vue({
  render: h => h(App),
  router
}).$mount("#app");
