<template>
  <button :class="['flex flex-row px-4 py-2 rounded font-semibold', variantClasses]">
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps({
  variant: {
    type: String,
    default: 'primary', // primary, secondary, outline
  },
});

const variantClasses = computed(() => {
  switch (props.variant) {
    case 'primary': return 'bg-blue-600 text-white hover:bg-blue-700';
    case 'secondary': return 'bg-gray-200 text-gray-800 hover:bg-gray-300';
    case 'outline': return 'border border-blue-600 text-blue-600 hover:bg-blue-50';
    case 'danger': return 'bg-red-600 text-white hover:bg-red-700';
    default: return 'bg-blue-600 text-white hover:bg-blue-700';
  }
});
</script>