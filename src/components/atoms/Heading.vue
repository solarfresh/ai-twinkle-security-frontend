<template>
  <component :is="tag" :class="headingClasses">
    <slot></slot>
  </component>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps({
  tag: {
    type: String,
    required: true, // e.g., 'h1', 'h2', 'h3'
  },
  size: {
    type: String,
    default: 'md', // sm, md, lg, xl, 2xl etc. (maps to tailwind text- sizes)
  },
  color: {
    type: String,
    default: 'gray-900', // e.g., 'gray-900', 'blue-600'
  }
});

const headingClasses = computed(() => {
  const sizeMap = <{[key: string]: string;}>{
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-2xl',
    xl: 'text-3xl',
    '2xl': 'text-4xl',
    '3xl': 'text-5xl',
  };
  return [`font-bold`, sizeMap[props.size], `text-${props.color}`];
});
</script>