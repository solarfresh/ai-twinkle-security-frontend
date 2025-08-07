<template>
  <form @submit.prevent="handleSubmit" class="space-y-6">
    <div>
      <Paragraph size="sm" class="block font-medium text-gray-700 mb-2">名稱</Paragraph>
      <Input v-model="formData.name" placeholder="請輸入使用者名稱" required />
    </div>

    <div>
      <Paragraph size="sm" class="block font-medium text-gray-700 mb-2">信箱</Paragraph>
      <Input v-model="formData.email" type="email" placeholder="請輸入信箱" required />
    </div>

    <div>
      <Paragraph size="sm" class="block font-medium text-gray-700 mb-2">密碼</Paragraph>
      <Input v-model="formData.password" type="password" placeholder="請輸入密碼" :required="!isEditMode" />
      <Paragraph v-if="isEditMode" size="xs" class="mt-1 text-gray-500">
        留空則不更改密碼
      </Paragraph>
    </div>

    <div>
      <Paragraph size="sm" class="block font-medium text-gray-700 mb-2">角色</Paragraph>
      <Dropdown
        v-model="formData.role"
        :options="roleOptions"
        placeholder="請選擇角色"
        required
      />
    </div>

    <div class="flex justify-end space-x-3">
      <Button variant="secondary" @click.prevent="$emit('cancel')">取消</Button>
      <Button type="submit" variant="primary">儲存</Button>
    </div>
  </form>
</template>

<script setup lang="ts">
import { UserRole } from '@/enums/user';
import type { User } from '@/types/user';
import { computed, ref, watch } from 'vue';
import Button from '../atoms/Button.vue';
import Dropdown from '../atoms/Dropdown.vue';
import Input from '../atoms/Input.vue';
import Paragraph from '../atoms/Paragraph.vue';

const props = defineProps<{
  initialData?: User | null; // Optional prop to pre-fill the form for editing
}>();

const emit = defineEmits<{
  (e: 'submit', data: Partial<User>): void;
  (e: 'cancel'): void;
}>();

const initialFormData = {
  name: '',
  email: '',
  password: '', // Not part of the User interface, but needed for the form
  role: UserRole.USER,
};

const formData = ref({ ...initialFormData });

const isEditMode = computed(() => !!props.initialData);

const roleOptions = computed(() =>
  Object.values(UserRole).map(role => ({ value: role, label: role }))
);

// Watch for changes in initialData to pre-fill the form for editing
watch(() => props.initialData, (newVal) => {
  if (newVal) {
    formData.value.name = newVal.name;
    formData.value.email = newVal.email;
    formData.value.role = newVal.role;
    formData.value.password = ''; // Clear password field when editing
  } else {
    // Reset form for a new user
    Object.assign(formData.value, initialFormData);
  }
}, { immediate: true });

const handleSubmit = () => {
  const dataToSend = { ...formData.value };

  // Remove empty password field for editing
  if (isEditMode.value && !dataToSend.password) {
    delete (dataToSend as any).password;
  }

  // Emit the form data to the parent
  emit('submit', dataToSend);
};
</script>