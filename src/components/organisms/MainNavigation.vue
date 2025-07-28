<template>
  <nav class="bg-gray-800 py-4">
    <div class="container mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8">
      <div class="text-white text-lg font-semibold">LLM 安全紅隊工具</div>
      <div class="relative flex items-center space-x-4">
        <Link href='/' target='_vue' class="p-2 text-gray-300 hover:text-white">排行榜</Link>
        <Link href='/prompt-library' target='_vue' class="p-2 text-gray-300 hover:text-white">提示詞庫</Link>

        <NavLinkDropdown
          title="測試"
          :menu-items="testMenuItems"
          @menu-item-selected="handleNavLinkClick"
        />

        <NavLinkDropdown
          title="管理"
          :menu-items="adminMenuItems"
          @menu-item-selected="handleNavLinkClick"
        />

        <NavUserStatus
          :is-logged-in="isLoggedIn"
          :user-name="currentUserName"
          @logout="handleLogout"
          @login="handleLoginClick"
        />
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts"> // <-- Add lang="ts" here
import { ref } from 'vue';
import Link from '../atoms/Link.vue';
import NavLinkDropdown from '../molecules/NavLinkDropdown.vue';
import NavUserStatus from '../molecules/NavUserStatus.vue';
import type { NavMenuItem } from '@/types/nav'; // <-- Import the interface

// --- Mock Data and State ---
const isLoggedIn = ref<boolean>(true); // Explicit type
const currentUserName = ref<string>('管理員'); // Explicit type

const testMenuItems: NavMenuItem[] = [ // <-- Use the interface for array
  { label: '執行測試', iconName: 'Play', path: '/execute-test' },
  { label: '測試記錄', iconName: 'ClipboardDocumentList', path: '/test/records' },
  { label: '自動化測試', iconName: 'DocumentMagnifyingGlass', path: '/automated-tests' },
  { label: '沙箱環境', iconName: 'CodeBracket', path: '/sandbox' },
  { label: '報告與視覺化', iconName: 'ChartBar', path: '/reports' },
];

const adminMenuItems: NavMenuItem[] = [ // <-- Use the interface for array
  { label: 'LLM 設定', iconName: 'ServerStack', path: '/llm-settings' },
  { label: '工具設定', iconName: 'Cog6Tooth', path: '/tool-settings' },
  { label: '系統日誌', iconName: 'RectangleStack', path: '/system-logs' },
  { label: '使用者管理', iconName: 'Users', path: '/user-management' },
  { label: '角色與權限', iconName: 'ShieldCheck', path: '/roles-permissions' },
];

// --- Handlers for events from child components ---

const handleNavLinkClick = (item: NavMenuItem) => { // <-- Use the interface for parameter type
};

const handleLogout = () => {
  if (confirm('確定要登出嗎？')) {
    isLoggedIn.value = false;
    currentUserName.value = '訪客';
  }
};

const handleLoginClick = () => {
};
</script>

<style scoped>
/* Specific styles for MainNavigation if needed */
</style>