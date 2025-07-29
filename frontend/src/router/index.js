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
// frontend/src/router/index.js import { createRouter, createWebHistory } from 'vue-router'; import Home from '@/views/Home.vue'; import Dashboard from '@/views/Dashboard.vue'; import NotFound from '@/views/NotFound.vue'; import { useUserStore } from '@/store/user';

const routes = [ { path: '/', name: 'Home', component: Home }, { path: '/dashboard', name: 'Dashboard', component: Dashboard, meta: { requiresAuth: true }, }, { path: '/:pathMatch(.)', name: 'NotFound', component: NotFound }, ];

const router = createRouter({ history: createWebHistory(), routes, });

router.beforeEach((to, from, next) => { const userStore = useUserStore(); if (to.meta.requiresAuth && !userStore.verified) { next('/'); } else { next(); } });

export default router;

// frontend/src/views/Dashboard.vue <template>

  <div class="p-6">
    <h1 class="text-2xl font-bold">Welcome to your Dashboard</h1>
    <p v-if="userStore.verified" class="mt-2 text-green-600">Logged in as {{ userStore.username }}</p>
    <p v-else class="mt-2 text-red-500">You are not authenticated.</p>
  </div>
</template><script setup>
import { useUserStore } from '@/store/user';
const userStore = useUserStore();
</script>