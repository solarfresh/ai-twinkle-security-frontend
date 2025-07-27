<template>
  <textarea
    :value="modelValue"
    @input="updateValue"
    :placeholder="placeholder"
    :disabled="disabled"
    :readonly="readonly"
    :required="required"
    :rows="rows"
    :cols="cols"
    :class="[
      'block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm',
      'focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm',
      disabled ? 'bg-gray-100 text-gray-500 cursor-not-allowed' : 'bg-white text-gray-900',
    ]"
  ></textarea>
</template>

<script setup lang="ts">
const props = defineProps({
  /**
   * The v-model binding for the textarea's value.
   */
  modelValue: {
    type: String,
    default: '',
  },
  /**
   * Placeholder text for the textarea.
   */
  placeholder: {
    type: String,
    default: '',
  },
  /**
   * Whether the textarea is disabled.
   */
  disabled: {
    type: Boolean,
    default: false,
  },
  /**
   * Whether the textarea is read-only.
   */
  readonly: {
    type: Boolean,
    default: false,
  },
  /**
   * Whether the textarea is required.
   */
  required: {
    type: Boolean,
    default: false,
  },
  /**
   * The visible height of the text area, in lines.
   */
  rows: {
    type: [String, Number],
    default: 3, // Common default for multi-line inputs
  },
  /**
   * The visible width of the text area, in average character widths.
   */
  cols: {
    type: [String, Number],
    default: 50, // Common default
  },
});

const emit = defineEmits<{
  /**
   * Emitted when the textarea's value changes (for v-model).
   * @param value The new value of the textarea.
   */
  (e: 'update:modelValue', value: string): void;
}>();

const updateValue = (event: Event) => {
  const target = event.target as HTMLTextAreaElement;
  emit('update:modelValue', target.value);
};
</script>

<style scoped>
/* No specific scoped styles needed beyond Tailwind utilities for this base component */
</style>