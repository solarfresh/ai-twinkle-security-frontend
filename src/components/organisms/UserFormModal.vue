<template>
  <Modal :title="modalTitle" @close="$emit('close')">
    <UserForm @submit="handleSubmit" @cancel="$emit('close')" :initial-data="user" />
  </Modal>
</template>

<script setup lang="ts">
import type { User } from '@/types/user';
import { computed } from 'vue';
import Modal from '../molecules/Modal.vue';
import UserForm from '../molecules/UserForm.vue'; // A new component you would create

const props = defineProps<{
  user: User | null; // The user object for editing, if provided
}>();

const emit = defineEmits(['close']);

const modalTitle = computed(() => props.user ? '編輯使用者' : '新增使用者');

const handleSubmit = (formData: any = {}) => {
  console.log('Form submitted:', formData);
  emit('close');
};
</script>