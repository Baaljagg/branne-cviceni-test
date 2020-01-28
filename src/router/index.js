import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import ClenoveTymu from "../views/clenove-tymu.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/clenove-tymu",
    name: "clenove-tymu",
    component: ClenoveTymu
  }
];

const router = new VueRouter({
  routes
});

export default router;
