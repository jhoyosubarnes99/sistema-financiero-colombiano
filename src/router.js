import Vue from "vue";
import VueRouter from "vue-router";

import inicio from "./components/inicio";
import principal from "./components/principal";
import contenido from "./components/contenido";
import actividades from "./components/actividades";
import act1 from "./components/actividades/act1";
import act2 from "./components/actividades/act2";
import evalu1 from "./components/evaluacion/evalu1";
import evaluacion from "./components/evaluacion";
import creditos from "./components/creditos";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "inicio",
    component: inicio,
  },
  {
    path: "/principal",
    name: "principal",
    component: principal,

    children: [
      {
        path: "/contenido",
        name: "contenido",
        component: contenido,
      },
      {
        path: "/actividades",
        name: "actividades",
        component: actividades,
        children: [
          {
            path: "act1",
            name: "act1",
            component: act1,
          },
          {
            path: "act2",
            name: "act2",
            component: act2,
          },
        ],
      },
      {
        path: "/evaluacion",
        name: "evaluacion",
        component: evaluacion,
        children: [
          {
            path: "evalu1",
            name: "evalu1",
            component: evalu1,
          },
        ],
      },
      {
        path: "/creditos",
        name: "creditos",
        component: creditos,
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
