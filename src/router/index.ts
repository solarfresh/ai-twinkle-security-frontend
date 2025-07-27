import { createRouter, createWebHistory } from 'vue-router';
import LeaderboardPage from '@/components/pages/LeaderboardPage.vue';


const routes = [
  {
    path: '/',
    name: 'LeaderboardPage',
    component: LeaderboardPage
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;