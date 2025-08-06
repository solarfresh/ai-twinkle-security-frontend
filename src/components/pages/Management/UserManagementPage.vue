<template>
  <div class="space-y-6">
    <Heading tag="h1" size="2xl">使用者管理</Heading>

    <UserManagementPanel />

    <UserFormModal v-if="isModalOpen" @close="isModalOpen = false" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Heading from '../../atoms/Heading.vue';
import UserManagementPanel from '../../organisms/UserManagementPanel.vue';
import UserFormModal from '../../organisms/UserFormModal.vue';

const isModalOpen = ref(false);

const openUserFormModal = () => {
  isModalOpen.value = true;
};
</script>