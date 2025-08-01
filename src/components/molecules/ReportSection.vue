<template>
  <div class="bg-white p-6 rounded-lg shadow-sm border border-gray-200 mb-6">
    <div class="flex items-center justify-between cursor-pointer" @click="toggleExpanded">
      <Heading tag="h3" size="lg" class="text-gray-800">{{ title }}</Heading>
      <Icon name="ChevronDown" size="sm" :class="['transition-transform duration-200', { 'rotate-180': isExpanded }]" />
    </div>
    <div v-if="isExpanded" class="mt-4 border-t border-gray-200 pt-4">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Heading from '../atoms/Heading.vue';
import Icon from '../atoms/Icon.vue';

defineProps<{
  title: string;
  defaultExpanded?: boolean;
}>();

const isExpanded = ref(true); // Default to expanded
const toggleExpanded = () => {
  isExpanded.value = !isExpanded.value;
};
</script>