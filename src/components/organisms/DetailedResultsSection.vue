<template>
  <div class="bg-white p-6 rounded-lg shadow-md mb-8">
    <Heading tag="h2" size="lg" class="mb-4 text-gray-800">詳細測試結果</Heading>
    <div class="border-t border-gray-200 pt-4">
      <TestCaseResultItem
        v-for="(testCase, index) in testCases"
        :key="testCase.id"
        :result="testCase"
        :is-last="index === testCases.length - 1"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import Heading from '../atoms/Heading.vue';
import TestCaseResultItem from '../molecules/TestCaseResultItem.vue';
import type { TestCaseResult } from '../../types/test';

defineProps<{
  testCases: TestCaseResult[];
}>();
</script>