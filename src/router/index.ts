import LeaderboardPage from '@/components/pages/LeaderboardPage.vue';
import UserManagementPage from '@/components/pages/Management/UserManagementPage.vue';
import ViewUserPage from '@/components/pages/Management/ViewUserPage.vue';
import AddEditPromptPage from '@/components/pages/PromptLibrary/AddEditPromptPage.vue';
import PromptListPage from '@/components/pages/PromptLibrary/PromptListPage.vue';
import PromptViewPage from '@/components/pages/PromptLibrary/PromptViewPage.vue';
import ExecuteTestPage from '@/components/pages/Test/ExecuteTestPage.vue';
import SandboxPage from '@/components/pages/Test/SandboxPage.vue';
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
    path: '/test/execute-test',
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
  {
    path: '/test/sandbox',
    name: 'Sandbox',
    component: SandboxPage,
  },
  {
    path: '/management/user-management',
    name: 'UserManagement',
    component: UserManagementPage
  },
  {
    path: '/management/user/management/:id',
    name: 'ViewUser',
    component: ViewUserPage
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;