<template>
  <select
    :value="modelValue"
    @change="updateValue"
    :disabled="disabled"
    :required="required"
    :class="[
      'block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm',
      'focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm',
      disabled ? 'bg-gray-100 text-gray-500 cursor-not-allowed' : 'bg-white text-gray-900',
    ]"
  >
    <option v-if="placeholder" value="" disabled selected>{{ placeholder }}</option>
    <option
      v-for="option in options"
      :key="option.value"
      :value="option.value"
      :disabled="option.disabled"
    >
      {{ option.text }}
    </option>
  </select>
</template>

<script setup lang="ts">
interface SelectOption {
  value: string | number;
  text: string;
  disabled?: boolean;
}

const props = defineProps({
  /**
   * The v-model binding for the select's value.
   */
  modelValue: {
    type: [String, Number],
    default: '',
  },
  /**
   * Array of options for the select dropdown.
   */
  options: {
    type: Array as () => SelectOption[],
    required: true,
  },
  /**
   * Placeholder text for the default unselected option.
   */
  placeholder: {
    type: String,
    default: '',
  },
  /**
   * Whether the select is disabled.
   */
  disabled: {
    type: Boolean,
    default: false,
  },
  /**
   * Whether the select is required.
   */
  required: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits<{
  /**
   * Emitted when the select's value changes (for v-model).
   * @param value The new value of the select.
   */
  (e: 'update:modelValue', value: string | number): void;
}>();

const updateValue = (event: Event) => {
  const target = event.target as HTMLSelectElement;
  emit('update:modelValue', target.value);
};
</script>

<style scoped>
/* No specific scoped styles needed beyond Tailwind utilities */
</style>