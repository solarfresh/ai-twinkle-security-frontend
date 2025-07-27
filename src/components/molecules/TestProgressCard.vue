<template>
  <div :class="['bg-white p-4 rounded-lg shadow-sm border', statusClass]">
    <div class="flex items-center justify-between mb-2">
      <h3 class="text-lg font-semibold text-gray-800">{{ testName }}</h3>
      <span :class="['text-sm font-medium px-3 py-1 rounded-full', statusBadgeClass]">{{ statusText }}</span>
    </div>
    <Paragraph size="sm" class="text-gray-600 mb-2">目標模型: {{ modelName }}</Paragraph>
    <Paragraph size="sm" class="text-gray-600 mb-2">開始時間: {{ startTime }}</Paragraph>

    <div v-if="status === TestStatus.RUNNING" class="w-full bg-gray-200 rounded-full h-2.5 mt-3">
      <div class="bg-blue-600 h-2.5 rounded-full" :style="{ width: `${progress}%` }"></div>
    </div>
    <Paragraph v-if="status === TestStatus.RUNNING" size="sm" class="text-blue-600 mt-1">{{ progress }}% 完成</Paragraph>

    <div v-if="status === TestStatus.COMPLETED" class="flex justify-end mt-4">
      <Button variant="outline" size="sm">
        <Icon name="DocumentText" size="sm" class="mr-1" /> 查看報告
      </Button>
    </div>
    <div v-else-if="status === TestStatus.FAILED" class="flex justify-end mt-4">
      <Button variant="danger" size="sm">
        <Icon name="ExclamationTriangle" size="sm" class="mr-1" /> 查看錯誤
      </Button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import Paragraph from '../atoms/Paragraph.vue';
import Button from '../atoms/Button.vue';
import Icon from '../atoms/Icon.vue';
import { TestStatus } from '@/enums/test';

const props = defineProps<{
  testName: string;
  modelName: string;
  startTime: string;
  status: TestStatus; // Use TestStatus enum
  progress?: number; // Only for 'running' status
}>();

const statusClass = computed(() => {
  switch (props.status) {
    case TestStatus.PENDING: return 'border-yellow-300';
    case TestStatus.RUNNING: return 'border-blue-300';
    case TestStatus.COMPLETED: return 'border-green-300';
    case TestStatus.FAILED: return 'border-red-300';
    case TestStatus.CANCELLED: return 'border-gray-400';
    default: return 'border-gray-200';
  }
});

const statusBadgeClass = computed(() => {
  switch (props.status) {
    case TestStatus.PENDING: return 'bg-yellow-100 text-yellow-800';
    case TestStatus.RUNNING: return 'bg-blue-100 text-blue-800';
    case TestStatus.COMPLETED: return 'bg-green-100 text-green-800';
    case TestStatus.FAILED: return 'bg-red-100 text-red-800';
    case TestStatus.CANCELLED: return 'bg-gray-200 text-gray-700';
    default: return 'bg-gray-100 text-gray-800';
  }
});

const statusText = computed(() => {
  switch (props.status) {
    case TestStatus.PENDING: return '等待中';
    case TestStatus.RUNNING: return '執行中';
    case TestStatus.COMPLETED: return '已完成';
    case TestStatus.FAILED: return '失敗';
    case TestStatus.CANCELLED: return '已取消';
    default: return '未知';
  }
});
</script>