import Vue from "vue";
import VueRouter from "vue-router";
import EditPage from '@/views/Edicao.vue'
import Home from '../views/Home.vue'

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "estruturado",
    component: () => import("../layouts/DefaultLayout.vue"),
    children: [
      {
        path: '',
        component: Home
      },
      {
        path: "/personalizacao",
        component: EditPage,
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
