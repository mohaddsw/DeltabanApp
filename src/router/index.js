import Vue from "vue";
import VueRouter from "vue-router";
import TheCountainer from "../layout/TheContainer/index.vue";
import Home from "../views/Home/index.vue";
import Acount from "../views/Acount/index.vue";
import Message from "../views/Message/index.vue";
import Favorite from "../views/Favorite/index.vue";

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
      {
        path: "/favorite",
        name: "Acount",
        component: Favorite,
      },
      {
        path: "/message",
        name: "Acount",
        component: Message,
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
