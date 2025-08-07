<template>
  <div
    class="fixed inset-0 z-50 flex items-center justify-center bg-gray-900/50"
    @click.self="$emit('close')"
  >
    <div class="bg-white p-6 rounded-lg shadow-xl w-full max-w-lg mx-4" @click.stop>
      <div class="flex justify-between items-center border-b border-gray-200 pb-4 mb-4">
        <Heading tag="h3" size="lg" class="text-gray-900">{{ title }}</Heading>
        <Button variant="ghost" size="sm" @click="$emit('close')" aria-label="Close modal">
          <Icon name="XMark" size="md" />
        </Button>
      </div>
      <div class="modal-content">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Heading from '../atoms/Heading.vue';
import Button from '../atoms/Button.vue';
import Icon from '../atoms/Icon.vue';

defineProps<{
  title: string;
}>();

defineEmits(['close']);
</script>