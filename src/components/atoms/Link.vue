<template>
  <RouterLink v-if="target === '_vue'" :to="href" :class="['text-blue-600 hover:text-blue-800', sizeClass]">
    <slot></slot>
  </RouterLink>
  <a v-else :href="href" :target="target" :class="['text-blue-600 hover:text-blue-800', sizeClass]">
    <slot></slot>
  </a>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps({
  href: {
    type: String,
    default: '#',
  },
  target: {
    type: String,
    default: '_self', // _self, _blank, _parent, _top
  },
  size: {
    type: String,
    default: 'md', // sm, md, lg
  },
});

const sizeClass = computed(() => {
  const sizeMap = <{[key: string]: string;}>{
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
  };
  return sizeMap[props.size];
});
</script>

<style scoped>
/* You can add specific styles for BaseLink here if needed beyond Tailwind utilities */
</style>