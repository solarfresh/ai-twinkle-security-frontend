<template>
  <div class="bg-white p-6 rounded-lg shadow-md">
    <Heading tag="h2" size="lg" class="mb-4 text-gray-800">原始測試日誌</Heading>
    <div class="bg-gray-800 text-gray-100 p-4 rounded-md overflow-x-auto text-sm font-mono">
      <pre>{{ logContent }}</pre>
    </div>
    <div class="flex justify-end mt-4">
      <Button variant="secondary" size="sm" @click="copyToClipboard">
        <Icon name="ClipboardDocument" size="md" class="mr-2" /> 複製日誌
      </Button>
    </div>
  </div>
</template>

<script setup lang="ts">
import Heading from '../atoms/Heading.vue';
import Button from '../atoms/Button.vue';
import Icon from '../atoms/Icon.vue';

const props = defineProps<{
  logContent: string;
}>();

const copyToClipboard = async () => {
  try {
    await navigator.clipboard.writeText(props.logContent);
    alert('日誌已複製到剪貼簿！');
  } catch (err) {
    console.error('Failed to copy text: ', err);
    alert('無法複製日誌，請手動複製。');
  }
};
</script>