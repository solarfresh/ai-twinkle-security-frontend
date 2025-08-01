<template>
  <div :class="['bg-white p-4 rounded-lg shadow-sm border', borderColorClass]">
    <div class="flex items-center justify-between mb-2">
      <Icon :name="icon" size="md" :class="iconColorClass" />
      <Paragraph size="sm" class="font-medium text-gray-500">{{ title }}</Paragraph>
    </div>
    <Paragraph size="3xl" class="font-bold text-gray-900">{{ value }}</Paragraph>
    <Paragraph v-if="unit" size="sm" class="text-gray-600">{{ unit }}</Paragraph>
  </div>
</template>

<script setup lang="ts">
import { MetricCardType } from '@/enums/ui'; // Import the new enum
import { computed } from 'vue';
import Icon from '../atoms/Icon.vue';
import Paragraph from '../atoms/Paragraph.vue';

const props = defineProps<{
  title: string;
  value: string | number;
  unit?: string;
  icon: string;
  type: MetricCardType; // Use the enum here
}>();

const borderColorClass = computed(() => {
  switch (props.type) {
    case MetricCardType.SCORE: return 'border-blue-300';
    case MetricCardType.SUCCESS: return 'border-green-300';
    case MetricCardType.FAILURE: return 'border-red-300';
    case MetricCardType.INFO: return 'border-gray-300';
    case MetricCardType.WARNING: return 'border-yellow-300'; // Added for warning
    default: return 'border-gray-200';
  }
});

const iconColorClass = computed(() => {
  switch (props.type) {
    case MetricCardType.SCORE: return 'text-blue-500';
    case MetricCardType.SUCCESS: return 'text-green-500';
    case MetricCardType.FAILURE: return 'text-red-500';
    case MetricCardType.INFO: return 'text-gray-500';
    case MetricCardType.WARNING: return 'text-yellow-500'; // Added for warning
    default: return 'text-gray-400';
  }
});
</script>