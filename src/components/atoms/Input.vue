<template>
  <input
    :type="type"
    :value="modelValue"
    @input="updateValue"
    :placeholder="placeholder"
    :disabled="disabled"
    :readonly="readonly"
    :required="required"
    :class="[
      'block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm',
      'focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm',
      disabled ? 'bg-gray-100 text-gray-500 cursor-not-allowed' : 'bg-white text-gray-900',
    ]"
  />
</template>

<script setup lang="ts">
const props = defineProps({
  /**
   * The type of the input (e.g., 'text', 'password', 'email', 'number', 'search').
   */
  type: {
    type: String,
    default: 'text',
    validator: (value: string) => [
      'text', 'password', 'email', 'number', 'search', 'url', 'tel', 'date', 'time'
    ].includes(value),
  },
  /**
   * The v-model binding for the input's value.
   */
  modelValue: {
    type: [String, Number],
    default: '',
  },
  /**
   * Placeholder text for the input.
   */
  placeholder: {
    type: String,
    default: '',
  },
  /**
   * Whether the input is disabled.
   */
  disabled: {
    type: Boolean,
    default: false,
  },
  /**
   * Whether the input is read-only.
   */
  readonly: {
    type: Boolean,
    default: false,
  },
  /**
   * Whether the input is required.
   */
  required: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits<{
  /**
   * Emitted when the input's value changes (for v-model).
   * @param value The new value of the input.
   */
  (e: 'update:modelValue', value: string | number): void;
}>();

const updateValue = (event: Event) => {
  const target = event.target as HTMLInputElement;
  emit('update:modelValue', target.value);
};
</script>

<style scoped>
/* No specific scoped styles needed beyond Tailwind utilities for this base component */
</style>