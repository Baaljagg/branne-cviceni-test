import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import ClenoveTymu from "../views/ClenoveTymu.vue";
import KalendarAkci from "../views/KalendarAkci.vue";
import NadchazejiciAkce from "../views/NadchazejiciAkce.vue";



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
  },
  {
    path: "/kalendar-akci",
    name: "kalendar-akci",
    component: KalendarAkci
  },
  {
    path: "/nadchazejici-akce",
    name: "nadchazejici-akce",
    component: NadchazejiciAkce
  }
];

const router = new VueRouter({
  routes
});

export default router;
