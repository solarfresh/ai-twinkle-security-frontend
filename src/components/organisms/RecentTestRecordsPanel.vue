<template>
  <div class="bg-white p-6 rounded-lg shadow-md border border-gray-200">
    <div class="flex items-center justify-between mb-6">
      <Heading tag="h2" size="xl" class="text-gray-800">最新測試記錄</Heading>
      <Link href="#" @click.prevent="goToRecordsPage" class="text-blue-600 hover:underline flex items-center">
        <Paragraph size="sm" class="mr-1">查看所有記錄</Paragraph>
        <Icon name="ArrowRight" size="sm" />
      </Link>
    </div>

    <div v-if="loading" class="text-center py-10">
      <Icon name="ArrowPath" size="xl" class="animate-spin text-gray-400 mb-4" />
      <Paragraph>載入中...</Paragraph>
    </div>

    <div v-else-if="recentRecords.length === 0" class="text-center py-10 text-gray-500">
      <Icon name="Inbox" size="xl" class="mb-4 text-gray-400" />
      <Paragraph>目前沒有測試記錄。</Paragraph>
    </div>

    <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <TestRecordCard
        v-for="record in recentRecords"
        :key="record.id"
        :record="record"
        @view-details="handleViewDetails"
        @view-errors="handleViewErrors"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { TestStatus } from '@/enums/test';
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
import type { TestRecord } from '../../types/test';
import Heading from '../atoms/Heading.vue';
import Icon from '../atoms/Icon.vue';
import Link from '../atoms/Link.vue';
import Paragraph from '../atoms/Paragraph.vue';
import TestRecordCard from '../molecules/TestRecordCard.vue';

const router = useRouter();

const loading = ref(true);
const recentRecords = ref<TestRecord[]>([]);

// === Mock Data Fetching ===
const fetchRecentRecords = () => {
  loading.value = true;
  // Simulate an API call with a delay
  setTimeout(() => {
    // Generate mock data
    const mockData: TestRecord[] = [
      {
        id: 'rec-005',
        testName: 'API 權限繞過',
        modelName: 'Gemini 2.5 Flash',
        scenarioName: '權限濫用測試',
        completionTime: '2025-07-31 14:30',
        duration: '1m 2s',
        status: TestStatus.COMPLETED,
      },
      {
        id: 'rec-004',
        testName: '惡意程式碼注入',
        modelName: 'Gemini 2.5 Flash',
        scenarioName: '惡意 JavaScript `eval`',
        completionTime: '2025-07-31 14:15',
        duration: '45s',
        status: TestStatus.FAILED,
      },
      {
        id: 'rec-003',
        testName: '敏感資訊洩露',
        modelName: 'GPT-4o',
        scenarioName: '個人資料檢索',
        completionTime: '2025-07-31 14:01',
        duration: '1m 15s',
        status: TestStatus.COMPLETED,
      },
      // You can add more mock data here if needed
    ];

    recentRecords.value = mockData;
    loading.value = false;
  }, 800); // 800ms delay to simulate loading
};

// === Navigation Methods ===
const goToRecordsPage = () => {
  router.push({ name: 'TestRecords' });
};

const handleViewDetails = (id: string) => {
  router.push({ name: 'TestRecordDetails', params: { id } });
};

const handleViewErrors = (id: string) => {
  // Implement logic to view specific errors, perhaps by routing to the details page with a specific anchor
  console.log(`Viewing errors for record ID: ${id}`);
  router.push({ name: 'TestRecordDetails', params: { id } });
};

onMounted(() => {
  fetchRecentRecords();
});
</script>