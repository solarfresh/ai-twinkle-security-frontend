import LeaderboardPage from '@/components/pages/LeaderboardPage.vue';
import AddEditPromptPage from '@/components/pages/PromptLibrary/AddEditPromptPage.vue';
import PromptListPage from '@/components/pages/PromptLibrary/PromptListPage.vue';
import PromptViewPage from '@/components/pages/PromptLibrary/PromptViewPage.vue';
import ExecuteTestPage from '@/components/pages/Test/ExecuteTestPage.vue';
import TestRecordDetailsPage from '@/components/pages/Test/TestRecordDetailsPage.vue';
import TestRecordsPage from '@/components/pages/Test/TestRecordsPage.vue';
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Leaderboard',
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
    path: '/prompt-library/:id',
    name: 'PromptView',
    component: PromptViewPage,
  },
  {
    path: '/prompt-library/:id/edit',
    name: 'EditPrompt',
    component: AddEditPromptPage,
  },
  {
    path: '/execute-test',
    name: 'ExecuteTest',
    component: ExecuteTestPage,
  },
  {
    path: '/test/records',
    name: 'TestRecords',
    component: TestRecordsPage,
  },
  {
    path: '/test/records/:id',
    name: 'TestRecordDetails',
    component: TestRecordDetailsPage,
  },
  // {
  //   path: '/test/records/:id/errors',
  //   name: 'TestRecordErrors',
  //   component: () => import('@/components/pages/Test/TestRecordErrorsPage.vue'),
  // },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;