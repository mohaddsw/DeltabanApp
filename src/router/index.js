import Vue from "vue";
import VueRouter from "vue-router";
import TheCountainer from "../layout/TheContainer/index.vue";
import Home from "../views/Home/index.vue";
import Acount from "../views/Acount/index.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "TheCountainer",
    component: TheCountainer,
    children: [
      {
        path: "/",
        name: "Home",
        component: Home,
      },
      {
        path: "/acount",
        name: "Acount",
        component: Acount,
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
