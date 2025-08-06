<template>
  <div class="bg-white p-6 rounded-lg shadow-md border border-gray-200">
    <div class="flex flex-col md:flex-row justify-between items-center mb-6">
      <Heading tag="h2" size="xl" class="text-gray-800 mb-4 md:mb-0">使用者列表</Heading>
      <div class="flex space-x-4 w-full md:w-auto">
        <Input
          type="search"
          v-model="searchTerm"
          placeholder="依名稱或信箱搜尋..."
          class="flex-grow md:flex-grow-0 md:w-64"
        />
        <Button variant="primary" @click="$emit('add-user')">
          <Icon name="Plus" size="md" class="mr-2" />
          新增使用者
        </Button>
      </div>
    </div>

    <div v-if="loading" class="text-center py-10">
      <Icon name="ArrowPath" size="xl" class="animate-spin text-gray-400 mb-4" />
      <Paragraph>載入中...</Paragraph>
    </div>

    <div v-else-if="filteredUsers.length === 0" class="text-center py-10 text-gray-500">
      <Icon name="Inbox" size="xl" class="mb-4 text-gray-400" />
      <Paragraph>目前沒有符合條件的使用者。</Paragraph>
    </div>

    <div v-else class="overflow-x-auto">
      <table class="min-w-full divide-y divide-gray-200">
        <thead class="bg-gray-50">
          <tr>
            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              <Paragraph size="sm">名稱</Paragraph>
            </th>
            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              <Paragraph size="sm">信箱</Paragraph>
            </th>
            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              <Paragraph size="sm">角色</Paragraph>
            </th>
            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              <Paragraph size="sm">操作</Paragraph>
            </th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-gray-200">
          <tr v-for="user in filteredUsers" :key="user.id">
            <td class="px-6 py-4 whitespace-nowrap">
              <Paragraph size="base" class="font-medium text-gray-900">{{ user.name }}</Paragraph>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
              <Paragraph size="sm" class="text-gray-500">{{ user.email }}</Paragraph>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
              <span :class="['px-2 inline-flex text-xs leading-5 font-semibold rounded-full', roleBadgeClass(user.role)]">
                {{ user.role }}
              </span>
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
              <div class="flex space-x-2">
                <Button variant="ghost" size="sm" @click="$emit('edit-user', user)">
                  <Icon name="Pencil" size="sm" />
                </Button>
                <Button variant="ghost" size="sm" @click="$emit('delete-user', user.id)">
                  <Icon name="Trash" size="sm" />
                </Button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup lang="ts">
import { UserRole } from '@/enums/user';
import type { User } from '@/types/user';
import { computed, onMounted, ref } from 'vue';
import Button from '../atoms/Button.vue';
import Heading from '../atoms/Heading.vue';
import Icon from '../atoms/Icon.vue';
import Input from '../atoms/Input.vue';
import Paragraph from '../atoms/Paragraph.vue';

const emit = defineEmits<{
  (e: 'add-user'): void;
  (e: 'edit-user', user: User): void;
  (e: 'delete-user', id: string): void;
}>();

const searchTerm = ref('');
const loading = ref(true);
const users = ref<User[]>([]);

const filteredUsers = computed(() => {
  const query = searchTerm.value.toLowerCase();
  if (!query) {
    return users.value;
  }
  return users.value.filter(user =>
    user.name.toLowerCase().includes(query) ||
    user.email.toLowerCase().includes(query)
  );
});

const roleBadgeClass = (role: UserRole) => {
  switch (role) {
    case UserRole.ADMIN: return 'bg-red-100 text-red-800';
    case UserRole.EDITOR: return 'bg-blue-100 text-blue-800';
    default: return 'bg-gray-100 text-gray-800';
  }
};

const fetchUsers = () => {
  loading.value = true;
  // Simulate an API call with a delay
  setTimeout(() => {
    const mockUsers: User[] = [
      { id: 'usr-001', name: '王小明', email: 'wang.xm@example.com', role: UserRole.ADMIN },
      { id: 'usr-002', name: '陳美玲', email: 'chen.ml@example.com', role: UserRole.EDITOR },
      { id: 'usr-003', name: '林志豪', email: 'lin.zh@example.com', role: UserRole.USER },
      { id: 'usr-004', name: '張雅雯', email: 'zhang.yw@example.com', role: UserRole.USER },
      { id: 'usr-005', name: '黃建宇', email: 'huang.jy@example.com', role: UserRole.USER },
    ];
    users.value = mockUsers;
    loading.value = false;
  }, 800);
};

onMounted(() => {
  fetchUsers();
});
</script>