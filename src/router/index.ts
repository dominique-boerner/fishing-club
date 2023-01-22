import { createRouter, createWebHistory } from "vue-router";
import type { Route } from "@/models";
import HomeView from "@/views/HomeView.vue";
import LoginView from "@/views/LoginView.vue";

export const routes: Route[] = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
    icon: "fa-home",
    visible: true,
  },
  {
    path: "/route1",
    name: "Route1",
    component: HomeView,
    icon: "io-fish-sharp",
    visible: true,
  },
  {
    path: "/route2",
    name: "Route2",
    component: HomeView,
    icon: "bi-people-fill",
    visible: true,
  },
  {
    path: "/login",
    name: "login",
    component: LoginView,
    icon: "bi-people-fill",
    visible: false,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
