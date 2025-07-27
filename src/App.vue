<template>
  <div class="flex flex-col h-screen">
    <AppNavbar class="sticky top-0 z-50" />
    <div class="flex-grow overflow-y-auto no-scrollbar">
      <RouterView />
    </div>
  </div>
</template>

<script setup lang="ts">
import AppNavbar from '@/components/organisms/MainNavigation.vue';
import { RouterView } from 'vue-router';
</script>
