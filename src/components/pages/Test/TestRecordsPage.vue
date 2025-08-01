<template>
  <div>
    <Heading tag="h1" size="2xl" class="mb-6 text-gray-900">測試記錄</Heading>

    <TestRecordsList
      :records="mockTestRecords"
      @view-details="navigateToTestDetails"
      @view-errors="navigateToTestErrors"
      @refresh-records="fetchTestRecords"
    />
  </div>
</template>

<script setup lang="ts">
import { TestStatus } from '@/enums/test';
import type { TestRecord } from '@/types/test'; // Import TestRecord
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import Heading from '../../atoms/Heading.vue';
import TestRecordsList from '../../organisms/TestRecordsList.vue';

const router = useRouter();

// Mock data for test records
const mockTestRecords = ref<TestRecord[]>([
  {
    id: 'rec-001',
    testName: 'API 安全弱點掃描',
    modelName: 'Gemini 1.5 Pro',
    scenarioName: 'Prompt Injection 進階測試',
    completionTime: '2025-07-27 15:30',
    duration: '1h 15m',
    status: TestStatus.COMPLETED,
  },
  {
    id: 'rec-002',
    testName: '內容審核模型偏見分析',
    modelName: 'Llama-3-8B',
    scenarioName: '偏見與公平性測試',
    completionTime: '2025-07-27 12:00',
    duration: '45m 20s',
    status: TestStatus.FAILED,
  },
  {
    id: 'rec-003',
    testName: '敏感資訊洩露檢測',
    modelName: 'GPT-4o',
    scenarioName: '數據洩露測試 (敏感資訊)',
    completionTime: '2025-07-26 10:45',
    duration: '2h 10m',
    status: TestStatus.COMPLETED,
  },
  {
    id: 'rec-004',
    testName: '模型魯棒性測試',
    modelName: 'Claude 3 Opus',
    scenarioName: '情感分析模型壓力測試',
    completionTime: '2025-07-25 09:00',
    duration: '30m 0s',
    status: TestStatus.COMPLETED,
  },
  {
    id: 'rec-005',
    testName: '多語言安全評估',
    modelName: 'GPT-4o',
    scenarioName: '多語言內容生成安全',
    completionTime: '2025-07-24 16:15',
    duration: '1h 5m',
    status: TestStatus.CANCELLED,
  },
]);

// Handlers
const navigateToTestDetails = (id: string) => {
  router.push(`/test/records/${id}`); // Actual navigation
};

const navigateToTestErrors = (id: string) => {
  router.push(`/test/records/${id}/errors`);
};

const fetchTestRecords = () => {
  // In a real app, make an API call here to get fresh data
};
</script>

<style scoped>
/* Page-specific styles if any */
</style>