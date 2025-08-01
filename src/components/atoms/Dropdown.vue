<template>
  <div class="relative inline-block text-left w-full">
    <div>
      <button
        type="button"
        @click="toggleDropdown"
        class="inline-flex justify-between w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        :aria-expanded="isOpen"
        aria-haspopup="true"
      >
        {{ selectedLabel || placeholder }}
        <Icon name="ChevronDown" size="sm" class="-mr-1 ml-2 transition-transform duration-200" :class="{ 'rotate-180': isOpen }" />
      </button>
    </div>

    <div
      v-if="isOpen"
      class="origin-top-right absolute right-0 mt-2 w-full rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-10"
      role="menu"
      aria-orientation="vertical"
      aria-labelledby="menu-button"
      tabindex="-1"
    >
      <div class="py-1" role="none">
        <button
          v-for="option in options"
          :key="option.value"
          @click="selectOption(option)"
          class="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          :class="{ 'bg-gray-100 text-gray-900': option.value === props.modelValue }"
          role="menuitem"
          tabindex="-1"
        >
          {{ option.label }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import Icon from './Icon.vue'; // Assuming Icon is an atomic component

// Define the shape of an option
interface DropdownOption {
  value: string | number;
  label: string;
}

const props = defineProps<{
  options: DropdownOption[];
  modelValue?: string | number;
  placeholder?: string;
}>();

const emit = defineEmits<{
  (e: 'update:modelValue', value: string | number): void;
}>();

const isOpen = ref(false);

const toggleDropdown = () => {
  isOpen.value = !isOpen.value;
};

const selectOption = (option: DropdownOption) => {
  emit('update:modelValue', option.value);
  isOpen.value = false;
};

const selectedLabel = computed(() => {
  const selected = props.options.find(option => option.value === props.modelValue);
  return selected ? selected.label : '';
});
</script>