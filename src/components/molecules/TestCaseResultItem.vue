---
<template>
  <div :class="['bg-white p-4 rounded-lg shadow-sm border cursor-pointer', borderColorClass, { 'mb-4': !isLast }]" @click="toggleExpanded">
    <div class="flex items-center justify-between">
      <div class="flex items-center">
        <Icon :name="statusIcon" size="md" :class="[statusColorClass, 'mr-2']" />
        <Paragraph size="base" class="font-semibold text-gray-800">{{ result.name }}</Paragraph>
        <span :class="['ml-3 px-2 py-0.5 rounded-full text-xs font-medium', statusBadgeClass]">
          {{ statusText }}
        </span>
      </div>
      <Icon name="ChevronDown" size="sm" :class="['transition-transform duration-200', { 'rotate-180': isExpanded }]" />
    </div>

    <div v-if="isExpanded" class="mt-4 text-sm text-gray-700">
      <Paragraph v-if="result.description" class="mb-2">
        <strong>描述:</strong> {{ result.description }}
      </Paragraph>
      <Paragraph v-if="result.inputPrompt" class="mb-2">
        <strong>輸入提示:</strong> <code class="bg-gray-100 p-1 rounded-sm block whitespace-pre-wrap">{{ result.inputPrompt }}</code>
      </Paragraph>
      <Paragraph v-if="result.modelResponse" class="mb-2">
        <strong>模型回應:</strong> <code class="bg-gray-100 p-1 rounded-sm block whitespace-pre-wrap">{{ result.modelResponse }}</code>
      </Paragraph>

      <div v-if="result.vulnerabilityDetected" class="bg-red-50 border border-red-200 text-red-800 p-3 rounded-md mb-2">
        <div class="flex items-center font-medium mb-1">
          <Icon name="ExclamationTriangle" size="sm" class="mr-2 text-red-600" />
          <Paragraph size="sm" class="font-medium">偵測到潛在漏洞！</Paragraph>
        </div>
        <Paragraph size="sm">{{ result.vulnerabilityDetails }}</Paragraph>
      </div>

      <div v-if="result.errorMessage" class="bg-red-50 border border-red-200 text-red-800 p-3 rounded-md mb-2">
        <div class="flex items-center font-medium mb-1">
          <Icon name="BugAnt" size="sm" class="mr-2 text-red-600" />
          <Paragraph size="sm" class="font-medium">錯誤:</Paragraph>
        </div>
        <Paragraph size="sm" class="whitespace-pre-wrap">{{ result.errorMessage }}</Paragraph>
      </div>

      <Paragraph size="sm" class="mt-2 text-gray-500">耗時: {{ result.durationMs }} ms</Paragraph>
    </div>
  </div>
</template>

<script setup lang="ts">
import { TestStatus } from '@/enums/test';
import { computed, ref } from 'vue';
import type { TestCaseResult } from '../../types/test'; // Import TestStatus enum
import Icon from '../atoms/Icon.vue';
import Paragraph from '../atoms/Paragraph.vue';

const props = defineProps<{
  result: TestCaseResult;
  isLast: boolean;
}>();

const isExpanded = ref(false);

const toggleExpanded = () => {
  isExpanded.value = !isExpanded.value;
};

const statusIcon = computed(() => {
  switch (props.result.status) {
    case TestStatus.PASSED: return 'CheckCircle';
    case TestStatus.FAILED: return 'XCircle'; // Using FAILED for individual test case failure
    case TestStatus.SKIPPED: return 'MinusCircle';
    case TestStatus.ERROR: return 'BugAnt';
    default: return 'QuestionMarkCircle';
  }
});

const statusColorClass = computed(() => {
  switch (props.result.status) {
    case TestStatus.PASSED: return 'text-green-500';
    case TestStatus.FAILED: return 'text-red-500'; // Using FAILED
    case TestStatus.SKIPPED: return 'text-gray-500';
    case TestStatus.ERROR: return 'text-red-600';
    default: return 'text-gray-400';
  }
});

const statusBadgeClass = computed(() => {
  switch (props.result.status) {
    case TestStatus.PASSED: return 'bg-green-100 text-green-800';
    case TestStatus.FAILED: return 'bg-red-100 text-red-800'; // Using FAILED
    case TestStatus.SKIPPED: return 'bg-gray-100 text-gray-800';
    case TestStatus.ERROR: return 'bg-red-100 text-red-800';
    default: return 'bg-gray-50 text-gray-500';
  }
});

const statusText = computed(() => {
  switch (props.result.status) {
    case TestStatus.PASSED: return '通過';
    case TestStatus.FAILED: return '失敗'; // Using FAILED
    case TestStatus.SKIPPED: return '跳過';
    case TestStatus.ERROR: return '錯誤';
    default: return '未知';
  }
});

const borderColorClass = computed(() => {
  switch (props.result.status) {
    case TestStatus.PASSED: return 'border-green-200';
    case TestStatus.FAILED: return 'border-red-200'; // Using FAILED
    case TestStatus.SKIPPED: return 'border-gray-200';
    case TestStatus.ERROR: return 'border-red-300';
    default: return 'border-gray-100';
  }
});
</script>