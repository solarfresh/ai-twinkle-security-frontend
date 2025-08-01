<template>
  <div class="bg-white p-6 rounded-lg shadow-sm border border-gray-200 mb-6">
    <Heading tag="h2" size="xl" class="mb-2 text-gray-900">{{ title }}</Heading>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4 gap-x-6">
      <KeyValueDisplay label="提示詞 ID" :value="reportId" />
      <KeyValueDisplay label="創建日期" :value="createAt" />
      <KeyValueDisplay label="創建者" :value="creator" />
      <KeyValueDisplay label="上次修改日期" :value="updateAt" />
      <KeyValueDisplay label="目標模型" :value="targetModel" />
      <KeyValueDisplay label="語言" :value="language" />
    </div>
  </div>
</template>

<script setup lang="ts">
import Heading from '../atoms/Heading.vue';
import KeyValueDisplay from '../molecules/KeyValueDisplay.vue';

defineProps<{
  title: string;
  reportId: string;
  createAt: string;
  creator: string;
  updateAt: string;
  targetModel: string;
  language: string;
}>();
</script>