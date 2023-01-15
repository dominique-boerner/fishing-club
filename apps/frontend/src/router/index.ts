import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import { Route } from '../../types';
import Login from '../views/Login.vue';

export const routes: Route[] = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    icon: 'fa-home',
    visible: true,
  },
  {
    path: '/route1',
    name: 'Route1',
    component: Home,
    icon: 'io-fish-sharp',
    visible: true,
  },
  {
    path: '/route2',
    name: 'Route2',
    component: Home,
    icon: 'bi-people-fill',
    visible: true,
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    icon: 'bi-people-fill',
    visible: false,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
