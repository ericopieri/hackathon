import Vue from "vue";
import VueRouter from "vue-router";
import Componente from "../views/Componente.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "estruturado",
    component: () => import("../layouts/DefaultLayout.vue"),
    children: [
      {
        path: "/",
        component: Componente,
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
