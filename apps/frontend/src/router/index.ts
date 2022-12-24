import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import { Route } from '../../types';

export const routes: Route[] = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    icon: 'fa-home',
  },
  {
    path: '/route1',
    name: 'Route1',
    component: Home,
    icon: 'io-fish-sharp',
  },
  {
    path: '/route2',
    name: 'Route2',
    component: Home,
    icon: 'bi-people-fill',
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
