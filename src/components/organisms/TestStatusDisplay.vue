<template>
  <div class="bg-white p-6 rounded-lg shadow-md">
    <Heading tag="h2" size="lg" class="mb-4 text-gray-800">當前及近期測試</Heading>
    <div v-if="tests.length === 0" class="text-center text-gray-500 py-10">
      <Icon name="Bell" size="xl" class="mb-4 text-gray-400" />
      <Paragraph>目前沒有執行中的測試。</Paragraph>
    </div>
    <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <TestProgressCard
        v-for="test in tests"
        :key="test.id"
        :test-name="test.name"
        :model-name="test.model"
        :start-time="test.startTime"
        :status="test.status"
        :progress="test.progress"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { TestRun } from '@/types/test'; // Import both
import { PropType } from 'vue';
import Heading from '../atoms/Heading.vue';
import Icon from '../atoms/Icon.vue';
import Paragraph from '../atoms/Paragraph.vue';
import TestProgressCard from '../molecules/TestProgressCard.vue';

// Removed the local TestRun interface as it's now imported from types/test.ts

defineProps({
  tests: {
    type: Array as PropType<TestRun[]>, // Use the imported TestRun interface
    required: true,
  },
});
</script>