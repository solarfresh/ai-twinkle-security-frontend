<template>
  <div :class="['p-6 rounded-lg shadow-md border mb-6', conclusionClass]">
    <Heading tag="h3" size="lg" class="mb-4">{{ title }}</Heading>
    <Paragraph size="base" class="font-bold mb-2">{{ successRateLabel }}</Paragraph>
    <Paragraph size="base" class="font-bold mb-2">{{ complexityLabel }}</Paragraph>
    <Paragraph size="base" class="font-bold mb-2">{{ riskLabel }}</Paragraph>

    <div class="mt-4 border-t pt-4">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import Heading from '../atoms/Heading.vue';
import Paragraph from '../atoms/Paragraph.vue';

const props = defineProps<{
  title: string;
  successRate: string;
  complexity: string;
  riskLevel: '高' | '中' | '低';
}>();

const conclusionClass = computed(() => {
  switch (props.riskLevel) {
    case '高': return 'bg-red-50 border-red-300 text-red-800';
    case '中': return 'bg-yellow-50 border-yellow-300 text-yellow-800';
    case '低': return 'bg-green-50 border-green-300 text-green-800';
    default: return 'bg-gray-50 border-gray-300 text-gray-800';
  }
});

const successRateLabel = computed(() => `成功攻擊率: ${props.successRate}`);
const complexityLabel = computed(() => `複雜程度: ${props.complexity}`);
const riskLabel = computed(() => `安全風險等級: ${props.riskLevel}`);
</script>