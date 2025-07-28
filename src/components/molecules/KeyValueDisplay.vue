<template>
  <div class="mb-2">
    <Paragraph size="sm" class="font-medium text-gray-500">{{ label }}</Paragraph>
    <Paragraph size="base" class="text-gray-900">{{ value }}</Paragraph>
  </div>
</template>

<script setup lang="ts">
import Paragraph from '../atoms/Paragraph.vue'; // Import the Paragraph atomic component

defineProps<{
  label: string;
  value: string | number;
}>();
</script>