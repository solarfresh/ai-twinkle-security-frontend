<template>
  <div class="py-2 flex items-center space-x-4">
    <template v-if="isLoggedIn">
      <span class="text-gray-300">歡迎, {{ userName }}</span>
      <a href="#" class="text-gray-300 hover:text-white" @click.prevent="handleLogout">
        <Icon name="ArrowRightOnRectangle" size="md" class="inline-block -mt-1 mr-1" />
        登出
      </a>
    </template>
    <template v-else>
      <a href="#" class="text-gray-300 hover:text-white" @click.prevent="handleLoginClick">
        登入
      </a>
    </template>
  </div>
</template>

<script setup lang="ts">
import Icon from '../atoms/Icon.vue';

const props = defineProps({
  isLoggedIn: {
    type: Boolean,
    default: false,
  },
  userName: {
    type: String,
    default: '訪客',
  },
});

const emit = defineEmits(['logout', 'login']);

const handleLogout = () => {
  if (confirm('確定要登出嗎？')) {
    emit('logout');
  }
};

const handleLoginClick = () => {
  emit('login');
};
</script>