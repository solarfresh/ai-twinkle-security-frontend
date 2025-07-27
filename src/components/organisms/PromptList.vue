<template>
  <div class="bg-white p-6 rounded-lg shadow-md">
    <div class="flex justify-between items-center mb-6">
      <SearchBar v-model="internalSearchTerm" @search="handleSearch" class="flex-grow max-w-md mr-4" />
      <Button variant="primary" @click="$emit('add-prompt')">
        <Icon name="Plus" size="md" class="mr-2" />
        新增提示詞
      </Button>
    </div>

    <div v-if="filteredPrompts.length === 0" class="text-center text-gray-500 py-10">
      <Icon name="Inbox" size="xl" class="mb-4 text-gray-400" />
      <Paragraph>沒有找到符合條件的提示詞。</Paragraph>
    </div>

    <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <PromptCard v-for="prompt in filteredPrompts" :key="prompt.id" :prompt="prompt" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import SearchBar from '../molecules/SearchBar.vue';
import PromptCard from '../molecules/PromptCard.vue';
import Button from '../atoms/Button.vue';
import Icon from '../atoms/Icon.vue';
import Paragraph from '../atoms/Paragraph.vue';
import type { PromptEntry } from '@/types/prompt'; // Import the interface

const props = defineProps<{
  prompts: PromptEntry[]; // Array of all prompts
}>();

const emit = defineEmits<{
  (e: 'add-prompt'): void;
}>();

const internalSearchTerm = ref('');

const handleSearch = (term: string) => {
  internalSearchTerm.value = term;
  // In a real app, you might trigger an API call here with the search term
  console.log('Searching for:', term);
};

const filteredPrompts = computed(() => {
  if (!internalSearchTerm.value) {
    return props.prompts;
  }
  const lowerCaseSearchTerm = internalSearchTerm.value.toLowerCase();
  return props.prompts.filter(prompt =>
    prompt.name.toLowerCase().includes(lowerCaseSearchTerm) ||
    prompt.description.toLowerCase().includes(lowerCaseSearchTerm) ||
    prompt.category.toLowerCase().includes(lowerCaseSearchTerm) ||
    prompt.tags.some(tag => tag.toLowerCase().includes(lowerCaseSearchTerm))
  );
});
</script>