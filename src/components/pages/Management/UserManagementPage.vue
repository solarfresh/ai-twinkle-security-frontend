<template>
  <div class="space-y-6">
    <Heading tag="h1" size="2xl">使用者管理</Heading>

    <UserManagementPanel
      @add-user="openUserFormModal"
      @edit-user="openUserFormModal"
      @view-user="id => router.push({ name: 'ViewUser', params: { id } })"
    />

    <UserFormModal v-if="isModalOpen" @close="isModalOpen = false" :user="userData" />
  </div>
</template>

<script setup lang="ts">
import { UserRole } from '@/enums/user';
import type { User } from '@/types/user';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import Heading from '../../atoms/Heading.vue';
import UserFormModal from '../../organisms/UserFormModal.vue';
import UserManagementPanel from '../../organisms/UserManagementPanel.vue';

const router = useRouter();

const initialUserData: User = {
  id: '',
  name: '',
  email: '',
  password: '', // Not part of the User interface, but needed for the form
  role: UserRole.USER,
};

const userData = ref({ ...initialUserData });
const isModalOpen = ref(false);

const openUserFormModal = (user: User | null = null) => {
  isModalOpen.value = true;
  if (user) {
    userData.value = user;
  } else {
    userData.value = initialUserData;
  }
};
</script>