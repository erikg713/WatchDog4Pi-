import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Dashboard from '../views/Dashboard.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/dashboard', component: Dashboard },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
router.beforeEach((to, from, next) => {
  const user = JSON.parse(localStorage.getItem('pi_user'));
  if (to.path === '/dashboard' && !user) {
    next('/');
  } else {
    next();
  }
});
