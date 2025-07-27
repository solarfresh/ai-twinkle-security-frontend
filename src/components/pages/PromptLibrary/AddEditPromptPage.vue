<template>
	<Heading tag="h1" size="2xl" class="mb-6 text-gray-900">
		{{ isEditing ? '編輯提示詞' : '新增提示詞' }}
	</Heading>
	<PromptForm
		:initial-prompt="initialPromptData"
		@save="handleSavePrompt"
		@cancel="handleCancel"
	/>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import type { PromptEntry } from '../../../types/prompt';
import Heading from '../../atoms/Heading.vue';
import PromptForm from '../../organisms/PromptForm.vue';

const router = useRouter();
const route = useRoute();

// Determine if we are in editing mode based on route parameter
const isEditing = computed(() => !!route.params.id);

// Mock initial data for editing (in a real app, you'd fetch this)
const initialPromptData = ref<PromptEntry | undefined>(undefined);

if (isEditing.value) {
  // Simulate fetching data for editing
  const promptId = route.params.id as string;
  // In a real application, you'd make an API call like:
  // fetchPrompt(promptId).then(data => initialPromptData.value = data);
  initialPromptData.value = {
    id: promptId,
    name: 'LLM 安全漏洞偵測 (編輯中)',
    category: '安全測試',
    description: '此提示詞用於檢測大型語言模型中常見的注入攻擊、數據洩露和不當內容生成的提示詞集。它涵蓋了各種惡意輸入，旨在找出模型可能存在的弱點。',
    tags: ['注入', '數據洩露', '安全', '測試'],
    updatedAt: '2025-07-26 10:00',
    createdBy: 'Admin',
  };
}

// --- Handlers ---
const handleSavePrompt = (promptData: Omit<PromptEntry, 'id' | 'createdBy' | 'updatedAt'>) => {
  if (isEditing.value) {
    alert(`更新提示詞 (ID: ${route.params.id})\n名稱: ${promptData.name}\n類別: ${promptData.category}\n描述: ${promptData.description}\n標籤: ${promptData.tags.join(', ')}`);
    // Call API to update prompt
  } else {
    alert(`新增提示詞\n名稱: ${promptData.name}\n類別: ${promptData.category}\n描述: ${promptData.description}\n標籤: ${promptData.tags.join(', ')}`);
    // Call API to create new prompt
  }
  router.push('/prompt-library'); // Redirect back to list after save
};

const handleCancel = () => {
  alert('取消操作');
  router.push('/prompt-library'); // Redirect back to list
};
</script>

<style scoped>
/* Page-specific styles if any */
</style>