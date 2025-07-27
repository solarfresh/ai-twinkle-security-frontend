<template>
  <p :class="['text-gray-600', sizeClass]">
    <slot></slot>
  </p>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps({
  size: {
    type: String,
    default: 'md', // sm, md, lg
  }
});

const sizeClass = computed(() => {
  const sizeMap = <{[key: string]: string;}>{
    sm: 'text-sm',
    md: 'text-base',
    'lg': 'text-lg',
  };

  return sizeMap[props.size];
});
</script>