<template>
  <div>
    <Heading tag="h1" size="2xl" class="mb-6 text-gray-900">執行測試</Heading>

    <TestExecutionForm @execute-test="handleExecuteTest" />

    <TestStatusDisplay :tests="recentTests" />
  </div>
</template>

<script setup lang="ts">
import { TestStatus } from '@/enums/test';
import type { TestRun } from '@/types/test';
import { ref } from 'vue';
import Heading from '../../atoms/Heading.vue';
import TestExecutionForm from '../../organisms/TestExecutionForm.vue';
import TestStatusDisplay from '../../organisms/TestStatusDisplay.vue';

// Mock data for test scenarios and models (could come from API)
const mockTestScenarios = [
  { id: 'scenario-1', name: 'Prompt Injection 基礎測試' },
  { id: 'scenario-2', name: '數據洩露測試 (敏感資訊)' },
  { id: 'scenario-3', name: '不當內容生成測試' },
];

const mockLLMModels = [
  { id: 'model-a', name: 'GPT-4o' },
  { id: 'model-b', name: 'Gemini 1.5 Pro' },
  { id: 'model-c', name: 'Llama-3-8B' },
];

// Mock ongoing/recent tests - Update to use TestStatus enum
const recentTests = ref<TestRun[]>([
  {
    id: 'test-001',
    name: '數據洩露測試 (敏感資訊)',
    model: 'GPT-4o',
    startTime: '2025-07-27 10:00',
    status: TestStatus.RUNNING,
    progress: 75,
  },
  {
    id: 'test-002',
    name: 'Prompt Injection 基礎測試',
    model: 'Gemini 1.5 Pro',
    startTime: '2025-07-27 09:30',
    status: TestStatus.COMPLETED,
  },
  {
    id: 'test-003',
    name: '不當內容生成測試',
    model: 'Llama-3-8B',
    startTime: '2025-07-26 18:00',
    status: TestStatus.FAILED,
  },
]);

// Handlers
const handleExecuteTest = (payload: { scenarioId: string; modelId: string }) => {
  const scenarioName = mockTestScenarios.find(s => s.id === payload.scenarioId)?.name || payload.scenarioId;
  const modelName = mockLLMModels.find(m => m.id === payload.modelId)?.name || payload.modelId;

  const newTestRun: TestRun = {
    id: `test-${Date.now()}`,
    name: scenarioName,
    model: modelName,
    startTime: new Date().toLocaleString('sv-SE', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
    }).replace(' ', ' '),
    status: TestStatus.PENDING,
    progress: 0,
  };
  recentTests.value.unshift(newTestRun);

  alert(`開始執行測試：\n情境: ${scenarioName}\n模型: ${modelName}`);

  console.log('Executing Test:', payload);

  let progress = 0;
  const interval = setInterval(() => {
    if (newTestRun.status === TestStatus.PENDING) {
      newTestRun.status = TestStatus.RUNNING;
    }
    progress += 10;
    if (newTestRun.progress !== undefined) {
        newTestRun.progress = Math.min(progress, 100);
    }

    if (progress >= 100) {
      clearInterval(interval);
      newTestRun.status = Math.random() > 0.8 ? TestStatus.FAILED : TestStatus.COMPLETED;
      newTestRun.progress = 100;
    }
  }, 500);
};
</script>

<style scoped>
/* Page-specific styles if any */
</style>