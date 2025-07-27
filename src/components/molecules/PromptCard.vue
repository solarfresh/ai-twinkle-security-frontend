<template>
  <div class="bg-white p-4 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-200">
    <div class="flex justify-between items-start mb-2">
      <Link :href="`/prompt-library/${prompt.id}`" class="text-lg font-semibold text-blue-700 hover:underline">
        {{ prompt.name }}
      </Link>
      <span class="text-xs font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded-full">{{ prompt.category }}</span>
    </div>
    <Paragraph size="sm" class="text-gray-600 mb-3 line-clamp-2">
      {{ prompt.description }}
    </Paragraph>
    <div class="flex flex-wrap gap-2 mb-3">
      <span v-for="tag in prompt.tags" :key="tag" class="text-xs bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full">
        {{ tag }}
      </span>
    </div>
    <div class="flex justify-between items-center text-xs text-gray-500">
      <span>更新於: {{ prompt.updatedAt }}</span> <span>由 {{ prompt.createdBy }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { PromptEntry } from '@/types/prompt';
import Link from '../atoms/Link.vue';
import Paragraph from '../atoms/Paragraph.vue';

defineProps<{
  prompt: PromptEntry;
}>();
</script>