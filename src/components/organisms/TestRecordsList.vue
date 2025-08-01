<template>
  <div class="bg-white p-6 rounded-lg shadow-md">
    <div class="flex justify-between items-center mb-6">
      <Input
        type="search"
        placeholder="搜尋測試記錄..."
        v-model="internalSearchTerm"
        class="flex-grow max-w-md mr-4"
        @input="handleSearchInput"
      />
      <Button variant="secondary" @click="refreshRecords">
        <Icon name="ArrowPath" size="md" class="mr-2" />
        重新整理
      </Button>
    </div>

    <div v-if="filteredRecords.length === 0" class="text-center text-gray-500 py-10">
      <Icon name="Inbox" size="xl" class="mb-4 text-gray-400" />
      <Paragraph>沒有找到符合條件的測試記錄。</Paragraph>
    </div>

    <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <TestRecordCard
        v-for="record in filteredRecords"
        :key="record.id"
        :record="record"
        @view-details="handleViewDetails"
        @view-errors="handleViewErrors"
      />
    </div>

    </div>
</template>

<script setup lang="ts">
import type { TestRecord } from '@/types/test';
import { computed, ref } from 'vue';
import Button from '../atoms/Button.vue';
import Icon from '../atoms/Icon.vue';
import Input from '../atoms/Input.vue';
import Paragraph from '../atoms/Paragraph.vue';
import TestRecordCard from '../molecules/TestRecordCard.vue';

const props = defineProps<{
  records: TestRecord[];
}>();

const emit = defineEmits<{
  (e: 'view-details', id: string): void;
  (e: 'view-errors', id: string): void;
  (e: 'refresh-records'): void;
}>();

const internalSearchTerm = ref('');

const filteredRecords = computed(() => {
  const searchTerm = internalSearchTerm.value.toLowerCase();
  if (!searchTerm) {
    return props.records;
  }
  return props.records.filter(record =>
    record.testName.toLowerCase().includes(searchTerm) ||
    record.modelName.toLowerCase().includes(searchTerm) ||
    record.scenarioName.toLowerCase().includes(searchTerm) ||
    record.id.toLowerCase().includes(searchTerm)
  );
});

const handleSearchInput = (event: Event) => {
  // The v-model already updates internalSearchTerm, no extra logic needed here for simple search
};

const handleViewDetails = (id: string) => {
  emit('view-details', id);
};

const handleViewErrors = (id: string) => {
  emit('view-errors', id);
};

const refreshRecords = () => {
  emit('refresh-records');
};
</script>