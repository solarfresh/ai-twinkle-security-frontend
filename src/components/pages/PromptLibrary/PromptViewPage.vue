<template>
  <div v-if="prompt">
    <div class="flex items-center justify-between mb-6">
      <Heading tag="h1" size="2xl" class="text-gray-900">{{ prompt.name }}</Heading>
      <div class="flex space-x-3">
        <Button variant="secondary" @click="handleEdit">
          <Icon name="PencilSquare" size="md" class="mr-2" />
          編輯
        </Button>
        <Button variant="danger" @click="handleDelete">
          <Icon name="Trash" size="md" class="mr-2" />
          刪除
        </Button>
      </div>
    </div>

    <div class="bg-white p-6 rounded-lg shadow-md mb-6">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <MetaDataBlock
          title="基本資訊"
          :items="[
            { label: '分類', value: prompt.category, type: 'text' },
            { label: '標籤', value: prompt.tags, type: 'tags' },
            { label: '建立者', value: prompt.createdBy, type: 'text' },
            { label: '更新於', value: prompt.updatedAt, type: 'text' },
          ]"
        />
        <div>
          <h3 class="text-lg font-semibold text-gray-800 mb-2">描述</h3>
          <Paragraph size="base" class="text-gray-700">{{ prompt.description }}</Paragraph>
        </div>
      </div>
    </div>

    <div class="bg-white p-6 rounded-lg shadow-md">
      <h3 class="text-lg font-semibold text-gray-800 mb-3">提示詞內容</h3>
      <div class="bg-gray-50 p-4 rounded-md border border-gray-200">
        <pre class="whitespace-pre-wrap font-mono text-sm text-gray-800">{{ prompt.content }}</pre>
      </div>
    </div>
  </div>
  <div v-else class="text-center py-10">
    <Icon name="FaceFrown" size="xl" class="mb-4 text-gray-400" />
    <Heading tag="h2" size="lg" class="text-gray-700">提示詞未找到</Heading>
    <Paragraph class="text-gray-500 mt-2">
      您要尋找的提示詞可能不存在，或已被刪除。
    </Paragraph>
    <Button variant="primary" class="mt-6" @click="router.push('/prompt-library')">
      返回提示詞庫
    </Button>
  </div>
</template>

<script setup lang="ts">
import type { PromptEntry } from '@/types/prompt';
import { onMounted, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import Button from '../../atoms/Button.vue';
import Heading from '../../atoms/Heading.vue';
import Icon from '../../atoms/Icon.vue';
import Paragraph from '../../atoms/Paragraph.vue';
import MetaDataBlock from '../../molecules/MetaDataBlock.vue';

const route = useRoute();
const router = useRouter();
const prompt = ref<PromptEntry | null>(null);

onMounted(() => {
  const promptId = route.params.id as string;
  // In a real application, you would fetch the prompt data from an API
  // For now, we'll use mock data.
  const mockPrompts: PromptEntry[] = [
    {
      id: 'p1',
      name: 'LLM 安全漏洞偵測',
      category: '安全測試',
      description: '用於檢測大型語言模型中常見的注入攻擊、數據洩露和不當內容生成的提示詞集。',
      content: '請扮演一個惡意使用者，嘗試透過提示詞注入來竊取機密資料。請列出你的所有步驟和嘗試的注入語法。',
      tags: ['注入', '數據洩露', '安全'],
      updatedAt: '2025-07-25 10:30',
      createdBy: 'Admin',
    },
    {
      id: 'p2',
      name: '情感分析模型壓力測試',
      category: '模型評估',
      description: '測試情感分析模型在面對歧義、諷刺和複雜情緒表達時的魯棒性。',
      content: '請分析以下文本的情感：「這真是個完美的災難！」並解釋你的判斷依據。',
      tags: ['情感分析', '壓力測試', '魯棒性'],
      updatedAt: '2025-07-24 15:00',
      createdBy: 'TesterOne',
    },
    // Add more mock prompts as needed
  ];

  prompt.value = mockPrompts.find(p => p.id === promptId) || null;
});

const handleEdit = () => {
  if (prompt.value) {
    router.push(`/prompt-library/${prompt.value.id}/edit`);
  }
};

const handleDelete = () => {
  if (prompt.value && confirm(`確定要刪除提示詞 "${prompt.value.name}" 嗎？`)) {
    // In a real app, you would make an API call to delete the prompt
    router.push('/prompt-library'); // Redirect to list after deletion
  }
};
</script>

<style scoped>
/* Any specific styles for this page, though Tailwind should handle most */
</style>