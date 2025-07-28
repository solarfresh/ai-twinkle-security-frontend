<template>
  <div :class="['bg-white p-4 rounded-lg shadow-sm border', statusClass]">
    <div class="flex items-center justify-between mb-2">
      <h3 class="text-lg font-semibold text-gray-800">{{ record.testName }}</h3>
      <span :class="['text-sm font-medium px-3 py-1 rounded-full', statusBadgeClass]">{{ statusText }}</span>
    </div>
    <Paragraph size="sm" class="text-gray-600 mb-1">目標模型: {{ record.modelName }}</Paragraph>
    <Paragraph size="sm" class="text-gray-600 mb-1">測試情境: {{ record.scenarioName }}</Paragraph>
    <Paragraph size="sm" class="text-gray-600 mb-1">完成時間: {{ record.completionTime }}</Paragraph>
    <Paragraph size="sm" class="text-gray-600 mb-3">耗時: {{ record.duration }}</Paragraph>

    <div class="flex justify-end mt-4 space-x-2">
      <Button variant="outline" size="sm" @click="$emit('view-details', record.id)">
        <Icon name="DocumentText" size="sm" class="mr-1" /> 查看詳情
      </Button>
      <Button v-if="record.status === TestStatus.FAILED" variant="danger" size="sm" @click="$emit('view-errors', record.id)">
        <Icon name="ExclamationTriangle" size="sm" class="mr-1" /> 查看錯誤
      </Button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { TestStatus } from '@/enums/test'; // Import the enum
import type { TestRecord } from '@/types/test';
import { computed } from 'vue';
import Button from '../atoms/Button.vue';
import Icon from '../atoms/Icon.vue';
import Paragraph from '../atoms/Paragraph.vue';

const props = defineProps<{
  record: TestRecord;
}>();

const emit = defineEmits<{
  (e: 'view-details', id: string): void;
  (e: 'view-errors', id: string): void;
}>();

const statusClass = computed(() => {
  switch (props.record.status) {
    case TestStatus.COMPLETED: return 'border-green-300';
    case TestStatus.FAILED: return 'border-red-300';
    case TestStatus.CANCELLED: return 'border-gray-400';
    default: return 'border-gray-200'; // Should ideally not happen for records
  }
});

const statusBadgeClass = computed(() => {
  switch (props.record.status) {
    case TestStatus.COMPLETED: return 'bg-green-100 text-green-800';
    case TestStatus.FAILED: return 'bg-red-100 text-red-800';
    case TestStatus.CANCELLED: return 'bg-gray-200 text-gray-700';
    default: return 'bg-gray-100 text-gray-800';
  }
});

const statusText = computed(() => {
  switch (props.record.status) {
    case TestStatus.COMPLETED: return '成功';
    case TestStatus.FAILED: return '失敗';
    case TestStatus.CANCELLED: return '已取消';
    default: return '未知狀態';
  }
});
</script>