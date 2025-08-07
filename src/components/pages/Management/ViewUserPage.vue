<template>
  <div class="space-y-6">
    <div class="flex items-center justify-between mb-6">
      <div class="flex items-center">
        <Link href="#" @click.prevent="router.back()" class="text-blue-600 hover:underline flex items-center mr-4">
          <Icon name="ArrowLeft" size="md" class="mr-2" />
          返回
        </Link>
        <Heading tag="h1" size="2xl" class="text-gray-900">
          {{ userFullName }}
        </Heading>
      </div>
      <Button v-if="currentUser" variant="secondary" @click="isModalOpen = true;">
        <Icon name="Pencil" size="md" class="mr-2" />
        編輯
      </Button>
    </div>

    <div v-if="loading" class="text-center py-10">
      <Icon name="ArrowPath" size="xl" class="animate-spin text-gray-400 mb-4" />
      <Paragraph>載入中...</Paragraph>
    </div>

    <div v-else-if="userNotFound" class="text-center py-10 text-gray-500">
      <Icon name="ExclamationCircle" size="xl" class="mb-4 text-gray-400" />
      <Paragraph>找不到該使用者。</Paragraph>
    </div>

    <div v-else-if="currentUser" class="bg-white p-6 rounded-lg shadow-md border border-gray-200">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12">
        <KeyValueDisplay label="使用者 ID" :value="currentUser.id" />
        <KeyValueDisplay label="名稱" :value="currentUser.name" />
        <KeyValueDisplay label="信箱" :value="currentUser.email" />
        <KeyValueDisplay label="角色" :value="currentUser.role" />
      </div>
    </div>

    <UserFormModal v-if="isModalOpen" @close="isModalOpen = false" :user="currentUser" />
  </div>
</template>

<script setup lang="ts">
import { UserRole } from '@/enums/user';
import type { User } from '@/types/user';
import { computed, onMounted, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import Button from '../../atoms/Button.vue';
import Heading from '../../atoms/Heading.vue';
import Icon from '../../atoms/Icon.vue';
import Link from '../../atoms/Link.vue';
import Paragraph from '../../atoms/Paragraph.vue';
import KeyValueDisplay from '../../molecules/KeyValueDisplay.vue';
import UserFormModal from '../../organisms/UserFormModal.vue';

const router = useRouter();
const route = useRoute();

const isModalOpen = ref(false);
const loading = ref(true);
const userNotFound = ref(false);
const currentUser = ref<User | null>(null);

const userFullName = computed(() => currentUser.value ? `使用者: ${currentUser.value.name}` : '檢視使用者資訊');

const fetchUser = (id: string) => {
  loading.value = true;
  userNotFound.value = false;

  setTimeout(() => {
    const mockUsers: User[] = [
      { id: 'usr-001', name: '王小明', email: 'wang.xm@example.com', role: UserRole.ADMIN },
      { id: 'usr-002', name: '陳美玲', email: 'chen.ml@example.com', role: UserRole.EDITOR },
      { id: 'usr-003', name: '林志豪', email: 'lin.zh@example.com', role: UserRole.USER },
    ];
    const foundUser = mockUsers.find(user => user.id === id);

    if (foundUser) {
      currentUser.value = foundUser;
    } else {
      userNotFound.value = true;
    }
    loading.value = false;
  }, 500);
};

onMounted(() => {
  const userId = route.params.id as string;
  if (userId) {
    fetchUser(userId);
  } else {
    userNotFound.value = true;
    loading.value = false;
  }
});
</script>