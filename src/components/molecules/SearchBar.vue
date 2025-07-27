<template>
  <div class="relative flex items-center w-full">
    <Input
      type="search"
      placeholder="搜尋提示詞..."
      v-model="searchTerm"
      class="pr-10 w-full"
      @input="$emit('update:modelValue', searchTerm)"
      @keyup.enter="$emit('search', searchTerm)"
    />
    <Icon name="MagnifyingGlass" class="absolute right-3 text-gray-400" size="md" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Input from '../atoms/Input.vue';
import Icon from '../atoms/Icon.vue';

const searchTerm = ref('');
// Define modelValue prop for v-model compatibility
defineProps({
  modelValue: {
    type: String,
    default: ''
  }
});

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void;
  (e: 'search', value: string): void;
}>();
</script>