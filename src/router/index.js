import Vue from "vue";
import VueRouter from "vue-router";
import EditPage from '@/views/Edicao.vue'
import Home from '../views/Home.vue'

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: () => import("../layouts/DefaultLayout.vue"),
    children: [
      {
        path: '',
        component: Home,
        props: true
      },
      {
        path: "/personalizacao",
        component: EditPage,
        props: true
      },
      {
        path: `/personalizacao/:id`,
        component: EditPage,
        props: true
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
