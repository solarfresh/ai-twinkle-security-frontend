<template>
  <div class="bg-white p-6 rounded-lg shadow-md border border-gray-200">
    <Heading tag="h2" size="xl" class="mb-6 text-gray-800">執行新測試</Heading>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
      <div>
        <Paragraph class="block text-sm font-medium text-gray-700 mb-2">選擇測試情境</Paragraph>
        <Dropdown
          v-model="selectedScenarioId"
          :options="scenarioOptions"
          placeholder="請選擇測試情境"
        />
      </div>

      <div>
        <Paragraph class="block text-sm font-medium text-gray-700 mb-2">選擇目標模型</Paragraph>
        <Dropdown
          v-model="selectedModelId"
          :options="modelOptions"
          placeholder="請選擇模型"
        />
      </div>

      <div class="flex items-end space-x-4 mt-2">
        <Button
          v-if="!isTestRunning"
          variant="primary"
          @click="runTest"
          :disabled="!selectedScenarioId || !selectedModelId"
          class="flex-1"
        >
          <Icon name="Play" size="md" class="mr-2" />
          開始測試
        </Button>

        <Button
          v-else
          variant="danger"
          @click="stopTest"
          class="flex-1"
        >
          <Icon name="Stop" size="md" class="mr-2" />
          停止測試
        </Button>
      </div>
    </div>

    <div v-if="testStatus" class="mt-4 pt-4 border-t border-gray-200">
      <KeyValueDisplay label="當前狀態" :value="testStatus" />
      <div v-if="isTestRunning" class="w-full bg-gray-200 rounded-full h-2.5 mt-2">
        <div class="bg-blue-600 h-2.5 rounded-full transition-all duration-300 ease-linear" :style="{ width: `${testProgress}%` }"></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import Heading from '../atoms/Heading.vue';
import Button from '../atoms/Button.vue';
import Icon from '../atoms/Icon.vue';
import Paragraph from '../atoms/Paragraph.vue';
import Dropdown from '../atoms/Dropdown.vue';
import KeyValueDisplay from '../molecules/KeyValueDisplay.vue';
// import { TestStatus } from '@/enums/test'

// === Reactive State ===
const selectedScenarioId = ref('');
const selectedModelId = ref('');
const isTestRunning = ref(false);
const testProgress = ref(0); // For the progress bar
const testStatus = ref('');

// === Mock Data for Dropdowns ===
const scenarioOptions = [
  { value: 'scenario-001', label: '惡意 JavaScript `eval` 程式碼注入' },
  { value: 'scenario-002', label: '敏感資訊洩露' },
  { value: 'scenario-003', label: '間接提示詞注入' },
];

const modelOptions = [
  { value: 'gemini-2.5-flash', label: 'Gemini 2.5 Flash' },
  { value: 'gpt-4o', label: 'GPT-4o' },
  { value: 'llama-3-8b', label: 'Llama 3 8B' },
];

// === Methods ===
const runTest = () => {
  if (selectedScenarioId.value && selectedModelId.value) {
    isTestRunning.value = true;
    testProgress.value = 0;
    testStatus.value = `正在執行測試...`;

    console.log(`Running test scenario ${selectedScenarioId.value} with model ${selectedModelId.value}`);

    // Simulate test progress with a timer
    const progressInterval = setInterval(() => {
      testProgress.value += 10;
      if (testProgress.value >= 100) {
        clearInterval(progressInterval);
        isTestRunning.value = false;
        testProgress.value = 100;
        testStatus.value = '測試完成';
      }
    }, 500); // Progress every 0.5 seconds
  }
};

const stopTest = () => {
  isTestRunning.value = false;
  testStatus.value = '測試已停止';
  testProgress.value = 0;
  console.log('Test stopped by user.');
};
</script>