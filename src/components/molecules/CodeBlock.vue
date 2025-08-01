<template>
  <div class="relative bg-gray-800 text-gray-100 p-4 rounded-md overflow-x-auto text-sm font-mono">
    <pre>{{ code }}</pre>
    <Button size="sm" class="absolute top-2 right-2 bg-gray-700 hover:bg-gray-600 text-white" @click="copyCode">
      <Icon name="ClipboardDocument" size="sm" />
    </Button>
  </div>
</template>

<script setup lang="ts">
import Button from '../atoms/Button.vue';
import Icon from '../atoms/Icon.vue';

const props = defineProps<{
  code: string;
}>();

const copyCode = async () => {
  await navigator.clipboard.writeText(props.code);
  alert('程式碼已複製！');
};
</script>