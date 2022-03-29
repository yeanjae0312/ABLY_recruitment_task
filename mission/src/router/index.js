import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Login',
    component: () => import('@/views/Login.vue'),
  },
  {
    path: '/userinfo',
    name: 'UserInfo',
    component: () => import('@/views/UserInfo.vue'),
  },
  {
    path: '/authRequest',
    name: 'AuthRequest',
    component: () => import('@/views/Password/AuthRequest.vue'),
  },
  {
    path: '/authConfirm',
    name: 'AuthConfirm',
    component: () => import('@/views/Password/AuthConfirm.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
