import { createRouter, createWebHistory } from 'vue-router';
import LeaderboardPage from '@/components/pages/LeaderboardPage.vue';
import PromptListPage from '@/components/pages/PromptLibrary/PromptListPage.vue'
import AddEditPromptPage from '@/components/pages/PromptLibrary/AddEditPromptPage.vue';

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
  },
  {
    path: '/prompt-library/add',
    name: 'AddPrompt',
    component: AddEditPromptPage,
  },
  {
    path: '/prompt-library/edit/:id',
    name: 'EditPrompt',
    component: AddEditPromptPage,
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;