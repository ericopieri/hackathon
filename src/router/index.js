import Vue from "vue";
import VueRouter from "vue-router";
import EditPage from '@/views/Edicao.vue'
import Home from '../views/Home.vue'
import Carrinho from '../views/Carrinho.vue'
import Historico from '../views/Historico.vue'
import Login from '../views/Login.vue'
import Cadastro from '../views/Cadastro.vue'
import Registro from '../views/Registro.vue'
import * as firebase from '../plugins/firebase.js'

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: () => import("../layouts/DefaultLayout.vue"),
    children: [
      {
        path: '',
        component: Home,
        props: true,
        meta: { requiresAuth: true }
      },
      {
        path: "/personalizacao/:id",
        component: EditPage,
        props: true
      },
      {
        path: "/carrinho",
        component: Carrinho
      },
      {
        path: "/historico",
        component: Historico
      },
      {
        path:"/login",
        component: Login
      },
      {
        path: "/cadastro",
        component: Cadastro
      },
      {
        path: "/registro",
        component: Registro
      }
    ],
  },
  {
    path: '',
    component: () => import('../layouts/Blank.vue'),
    children: [
      
    ]
  }
];


const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(x => x.meta.requiresAuth)
  if (requiresAuth && !firebase.auth.currentUser){
    next("/login")
  } else{
    next()
  }
})


export default router;
