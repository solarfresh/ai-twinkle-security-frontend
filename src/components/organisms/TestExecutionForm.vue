<template>
  <div class="bg-white p-6 rounded-lg shadow-md mb-8">
    <Heading tag="h2" size="lg" class="mb-4 text-gray-800">配置測試</Heading>
    <form @submit.prevent="handleSubmit">
      <FormField label="選擇測試情境" id="test-scenario" required>
        <Select
          id="test-scenario"
          v-model="selectedScenarioId"
          :options="scenarioOptions"
          placeholder="請選擇一個測試情境"
          required
        />
      </FormField>

      <FormField label="選擇目標模型" id="target-model" required>
        <Select
          id="target-model"
          v-model="selectedModelId"
          :options="modelOptions"
          placeholder="請選擇一個LLM模型"
          required
        />
      </FormField>

      <div class="flex justify-end mt-6">
        <Button variant="primary" type="submit">
          <Icon name="Play" size="md" class="mr-2" /> 執行測試
        </Button>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import FormField from '../molecules/FormField.vue';
import Select from '../atoms/Select.vue'; // New import
import Button from '../atoms/Button.vue';
import Heading from '../atoms/Heading.vue';
import Icon from '../atoms/Icon.vue';

// Mock data for dropdown options
const scenarioOptions = ref([
  { value: 'scenario-1', text: 'Prompt Injection 基礎測試' },
  { value: 'scenario-2', text: '數據洩露測試 (敏感資訊)' },
  { value: 'scenario-3', text: '不當內容生成測試' },
  { value: 'scenario-4', text: '越獄攻擊模擬' },
]);

const modelOptions = ref([
  { value: 'model-a', text: 'GPT-4o' },
  { value: 'model-b', text: 'Gemini 1.5 Pro' },
  { value: 'model-c', text: 'Llama-3-8B' },
  { value: 'model-d', text: 'Claude 3 Opus' },
]);

const selectedScenarioId = ref('');
const selectedModelId = ref('');

const emit = defineEmits<{
  (e: 'execute-test', payload: { scenarioId: string; modelId: string }): void;
}>();

const handleSubmit = () => {
  if (selectedScenarioId.value && selectedModelId.value) {
    emit('execute-test', {
      scenarioId: selectedScenarioId.value,
      modelId: selectedModelId.value,
    });
    // Optionally clear selections after submission
    selectedScenarioId.value = '';
    selectedModelId.value = '';
  } else {
    alert('請選擇測試情境和目標模型。');
  }
};
</script>