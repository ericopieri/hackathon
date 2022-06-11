import Vue from "vue";
import VueRouter from "vue-router";
import MainPage from '@/views/MainPage.vue'

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "estruturado",
    component: () => import("../layouts/DefaultLayout.vue"),
    children: [
      {
        path: "",
        component: MainPage,
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
