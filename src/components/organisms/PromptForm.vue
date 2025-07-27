<template>
  <div class="bg-white p-6 rounded-lg shadow-md">
    <form @submit.prevent="handleSubmit">
      <FormField label="提示詞名稱" id="prompt-name" required>
        <Input
          id="prompt-name"
          v-model="formData.name"
          placeholder="輸入提示詞的名稱"
          required
        />
      </FormField>

      <FormField label="分類" id="prompt-category" required>
        <Input
          id="prompt-category"
          v-model="formData.category"
          placeholder="例如：安全測試, 模型評估"
          required
        />
      </FormField>

      <FormField label="描述" id="prompt-description" required hint="請提供提示詞的詳細說明。">
        <Textarea id="prompt-description"
          v-model="formData.description"
          rows="5"
          placeholder="描述提示詞的用途、預期行為和使用方式"
          required
        />
      </FormField>

      <FormField label="標籤" id="prompt-tags" hint="以逗號分隔，例如：注入, 安全, NLP">
        <Input
          id="prompt-tags"
          v-model="formData.tagsInput"
          placeholder="輸入相關標籤"
        />
      </FormField>

      <div class="flex justify-end space-x-3 mt-6">
        <Button variant="secondary" type="button" @click="$emit('cancel')">取消</Button>
        <Button variant="primary" type="submit">儲存提示詞</Button>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import FormField from '../molecules/FormField.vue';
import Input from '../atoms/Input.vue';
import Textarea from '../atoms/Textarea.vue'; // <-- New import
import Button from '../atoms/Button.vue';
import type { PromptEntry } from '../../types/prompt';

const props = defineProps<{
  initialPrompt?: PromptEntry;
}>();

const emit = defineEmits<{
  (e: 'save', prompt: Omit<PromptEntry, 'id' | 'createdBy' | 'updatedAt'>): void;
  (e: 'cancel'): void;
}>();

const formData = ref({
  name: props.initialPrompt?.name || '',
  category: props.initialPrompt?.category || '',
  description: props.initialPrompt?.description || '',
  tagsInput: props.initialPrompt?.tags ? props.initialPrompt.tags.join(', ') : '',
});

watch(() => props.initialPrompt, (newVal) => {
  if (newVal) {
    formData.value.name = newVal.name;
    formData.value.category = newVal.category;
    formData.value.description = newVal.description;
    formData.value.tagsInput = newVal.tags.join(', ');
  }
}, { immediate: true });

const handleSubmit = () => {
  const promptData = {
    name: formData.value.name,
    category: formData.value.category,
    description: formData.value.description,
    tags: formData.value.tagsInput
      .split(',')
      .map(tag => tag.trim())
      .filter(tag => tag.length > 0),
  };
  emit('save', promptData);
};
</script>