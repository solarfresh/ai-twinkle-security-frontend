import { createRouter, createWebHistory } from 'vue-router';
import LeaderboardPage from '@/components/pages/LeaderboardPage.vue';
import PromptListPage from '@/components/pages/PromptLibrary/PromptListPage.vue'


const routes = [
  {
    path: '/',
    name: 'LeaderboardPage',
    component: LeaderboardPage,
  },
  {
    path: '/prompt-library',
    name: 'PromptLibraryList',
    component: PromptListPage
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;