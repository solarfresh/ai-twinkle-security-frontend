<template>
  <div>
    <Heading tag="h1" size="2xl" class="mb-6 text-gray-900">提示詞庫</Heading>

    <PromptList :prompts="allPrompts" @add-prompt="navigateToAddPrompt" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
// No need to import DashboardLayout here anymore

import Heading from '../../atoms/Heading.vue';
import PromptList from '../../organisms/PromptList.vue';
import type { PromptEntry } from '@/types/prompt';

const router = useRouter();

// --- Mock Data ---
const allPrompts = ref<PromptEntry[]>([
  {
    id: 'p1',
    name: 'LLM 安全漏洞偵測',
    category: '安全測試',
    description: '用於檢測大型語言模型中常見的注入攻擊、數據洩露和不當內容生成的提示詞集。',
    tags: ['注入', '數據洩露', '安全'],
    updatedAt: '2025-07-25 10:30',
    createdBy: 'Admin',
  },
  {
    id: 'p2',
    name: '情感分析模型壓力測試',
    category: '模型評估',
    description: '測試情感分析模型在面對歧義、諷刺和複雜情緒表達時的魯棒性。',
    tags: ['情感分析', '壓力測試', '魯棒性'],
    updatedAt: '2025-07-24 15:00',
    createdBy: 'TesterOne',
  },
  {
    id: 'p3',
    name: '多語言內容生成安全',
    category: '國際化',
    description: '評估LLM在不同語言環境下生成內容的安全性和文化敏感度。',
    tags: ['多語言', '國際化', '內容安全'],
    updatedAt: '2025-07-23 09:00',
    createdBy: 'LangExpert',
  },
  {
    id: 'p4',
    name: '資訊抽取準確性驗證',
    category: '功能測試',
    description: '檢查LLM從非結構化文本中精確提取特定資訊的能力。',
    tags: ['資訊抽取', '準確性', 'NLP'],
    updatedAt: '2025-07-22 11:45',
    createdBy: 'DataScientist',
  },
  {
    id: 'p5',
    name: '偏見與公平性測試',
    category: '倫理AI',
    description: '設計用於揭示LLM在生成內容中潛在偏見和不公平性的提示詞。',
    tags: ['偏見', '公平性', '倫理AI'],
    updatedAt: '2025-07-21 16:20',
    createdBy: 'EthicAI',
  },
]);

// --- Handlers ---
const navigateToAddPrompt = () => {
  alert('導航到新增提示詞頁面');
  router.push('/prompt-library/add'); // Example route for adding a prompt
};
</script>

<style scoped>
/* Page-specific styles if any */
</style>