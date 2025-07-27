<template>
  <div class="mb-4">
    <h3 v-if="title" class="text-lg font-semibold text-gray-800 mb-2">{{ title }}</h3>
    <div v-for="(item, index) in items" :key="index" class="text-sm text-gray-600 mb-1">
      <template v-if="item.type === 'text'">
        <span class="font-medium">{{ item.label }}:</span> {{ item.value }}
      </template>
      <template v-else-if="item.type === 'tags' && Array.isArray(item.value)">
        <span v-if="item.label" class="font-medium mr-1">{{ item.label }}:</span>
        <div class="flex flex-wrap gap-2">
          <span v-for="tag in item.value" :key="tag" class="text-xs bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full">
            {{ tag }}
          </span>
        </div>
      </template>
      </div>
    <slot></slot>
    </div>
</template>

<script setup lang="ts">
import { PropType } from 'vue';

type MetaItem = {
  label?: string;
  value: string | string[] | number;
  type: 'text' | 'tags'; // Extend with more types like 'link', 'date' if needed
};

defineProps({
  title: {
    type: String,
    default: '',
  },
  items: {
    type: Array as PropType<MetaItem[]>,
    required: true,
  },
});
</script>

<style scoped>
/* Scoped styles specific to MetaDataBlock if any, though Tailwind should suffice */
</style>