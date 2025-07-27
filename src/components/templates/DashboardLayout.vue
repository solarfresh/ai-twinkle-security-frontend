<template>
  <div class="p-6 bg-gray-50">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const props = defineProps<{
  to: string;
  iconName: string; // Heroicons name, e.g., 'ChartBar', 'Users'
}>();

const route = useRoute();
const isActive = computed(() => route.path === props.to);
</script>

<style scoped>
/* Scoped styles for the sidebar link if needed */
</style>