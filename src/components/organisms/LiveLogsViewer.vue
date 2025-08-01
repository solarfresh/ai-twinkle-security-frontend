<template>
  <div class="bg-gray-800 p-6 rounded-lg shadow-md border border-gray-700 text-white font-mono h-[400px] flex flex-col">
    <div class="flex items-center justify-between mb-4 border-b border-gray-700 pb-4">
      <Heading tag="h2" size="xl" class="text-white">即時測試日誌</Heading>
      <Button variant="secondary" size="sm" @click="clearLogs">
        <Icon name="Trash" size="md" class="mr-2" />
        清除日誌
      </Button>
    </div>

    <div ref="logContainer" class="flex-grow overflow-y-auto text-sm pr-2">
      <pre v-if="logs.length > 0">{{ logs.join('\n') }}</pre>
      <p v-else class="text-gray-400 text-center py-10">等待測試開始... 日誌將會顯示在這裡。</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, nextTick } from 'vue';
import Heading from '../atoms/Heading.vue';
import Button from '../atoms/Button.vue';
import Icon from '../atoms/Icon.vue';

// Use this to manage the log lines
const logs = ref<string[]>([]);
const logContainer = ref<HTMLElement | null>(null);

// In a real application, this function would be called by a parent component
// (like `SandboxPage.vue`) to push new log lines.
const addLog = (logLine: string) => {
  logs.value.push(logLine);
};

// Use a watcher to automatically scroll to the bottom when new logs are added
watch(logs, () => {
  nextTick(() => {
    if (logContainer.value) {
      logContainer.value.scrollTop = logContainer.value.scrollHeight;
    }
  });
}, { deep: true });

const clearLogs = () => {
  logs.value = [];
};

// Expose the addLog method so a parent can use it
defineExpose({
  addLog,
  clearLogs,
});
</script>