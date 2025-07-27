<template>
  <div class="mb-4">
    <label :for="id" class="block text-sm font-medium text-gray-700 mb-1">
      {{ label }}
      <span v-if="required" class="text-red-500">*</span>
    </label>
    <slot :id="id"></slot> <p v-if="hint" class="mt-1 text-sm text-gray-500">{{ hint }}</p>
    </div>
</template>

<script setup lang="ts">

const props = defineProps<{
  label: string;
  id: string; // Unique ID for the input and label's 'for' attribute
  required?: boolean;
  hint?: string;
}>();
</script>