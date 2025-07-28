<template>
  <div class="relative group">
    <Link
      href="#"
      class="text-gray-300 hover:text-white py-2 rounded-md transition-colors duration-200"
      @click.prevent="toggleDropdown"
      @mouseover="openDropdown"
      @mouseleave="closeDropdown"
    >
      {{ title }}
      <Icon
        name="ChevronDown"
        size="sm"
        :class="['inline-block ml-1 transition-transform duration-200', { 'rotate-180': isOpen }]"
      />
    </Link>
    <div
      v-if="isOpen"
      class="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
      role="menu"
      aria-orientation="vertical"
      aria-labelledby="menu-button"
      @mouseover="openDropdown"
      @mouseleave="closeDropdown"
    >
      <div class="py-1" role="none">
        <Link
          v-for="item in menuItems"
          :key="item.label"
          :href="item.path"
          :target="item.path?.startsWith('/') ? '_vue' : '_blank'"
          class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          role="menuitem"
          @click="selectItem(item)"
        >
          <Icon v-if="item.iconName" :name="item.iconName" size="sm" class="inline-block mr-2" />
          {{ item.label }}
        </Link>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Link from '../atoms/Link.vue';
import Icon from '../atoms/Icon.vue';
import type { NavMenuItem } from '@/types/nav';

const props = defineProps<{
  title: string;
  menuItems: NavMenuItem[];
}>();

const emit = defineEmits(['menu-item-selected']);

const isOpen = ref(false);
let timeout: ReturnType<typeof setTimeout> | null = null;

const toggleDropdown = () => {
  isOpen.value = !isOpen.value;
};

const openDropdown = () => {
  if (timeout) {
    clearTimeout(timeout);
    timeout = null;
  }
  isOpen.value = true;
};

const closeDropdown = () => {
  timeout = setTimeout(() => {
    isOpen.value = false;
  }, 200); // Small delay to prevent accidental closing
};

const selectItem = (item: NavMenuItem) => {
  emit('menu-item-selected', item);
  isOpen.value = false; // Close dropdown after selection
};
</script>