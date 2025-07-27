<template>
  <div @mouseenter="showMenu = true" @mouseleave="showMenu = false" class="relative">
    <button class="text-gray-300 hover:text-white inline-flex items-center">
      {{ title }}
      <Icon name="ChevronDown" size="sm" class="ml-1" />
    </button>
    <div v-if="showMenu" class="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10">
      <div class="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
        <a
          v-for="item in menuItems"
          :key="item.label"
          :href="item.path || '#'"
          @click.prevent="handleMenuItemClick(item)"
          class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          role="menuitem"
        >
          <Icon v-if="item.iconName" :name="item.iconName" size="sm" class="inline-block mr-2" />
          {{ item.label }}
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Icon from '../atoms/Icon.vue';
import type { NavMenuItem } from '@/types/nav';

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  menuItems: {
    type: Array as () => NavMenuItem[], // Array of { label: String, iconName?: String, path?: String }
    default: () => [],
  },
});

const showMenu = ref(false);

const emit = defineEmits(['menu-item-selected']);

const handleMenuItemClick = (item: NavMenuItem) => {
  showMenu.value = false; // Close menu after selection
  emit('menu-item-selected', item); // Emit event for parent to handle navigation
  // For demonstration, you can still use alerts or console logs here
  // alert(`Navigating to ${item.label} (Path: ${item.path})`);
};
</script>