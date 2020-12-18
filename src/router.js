import { createRouter, createWebHistory } from "vue-router";
import Home from "./views/Home.vue";
import Chord from "./views/Chord.vue";
import NotFound from "./views/NotFound.vue";
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/chord",
    name: "Chord",
    component: Chord,
  },
  {
    path: "/:catchAll(.*)",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
