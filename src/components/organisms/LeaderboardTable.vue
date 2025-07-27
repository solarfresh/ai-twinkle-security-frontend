<template>
  <div class="bg-white p-6 rounded-lg shadow-md">
    <Heading tag="h2" size="lg" class="mb-4 text-gray-800">排行榜資料</Heading>

    <div class="overflow-y-auto max-h-96 no-scrollbar">
      <table class="min-w-full divide-y divide-gray-200">
        <thead class="bg-gray-50 sticky top-0 z-10">
          <tr>
            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              排名
            </th>
            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              模型名稱
            </th>
            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              分數
            </th>
            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              完成測試
            </th>
            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              上次活動
            </th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-gray-200">
          <tr v-for="entry in entries" :key="entry.id">
            <td class="px-6 py-4 whitespace-nowrap">
              <div class="flex items-center">
                <Icon v-if="entry.rank === 1" name="Trophy" color="yellow-500" size="md" class="mr-2" />
                <Icon v-else-if="entry.rank === 2" name="Trophy" color="gray-400" size="md" class="mr-2" />
                <Icon v-else-if="entry.rank === 3" name="Trophy" color="amber-700" size="md" class="mr-2" />
                <span class="text-sm font-medium text-gray-900">{{ entry.rank }}</span>
              </div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
              <div class="text-sm text-gray-900">{{ entry.modelName }}</div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
              <div class="text-sm text-gray-900">{{ entry.score }}</div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
              <div class="text-sm text-gray-900">{{ entry.testsCompleted }}</div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
              <div class="text-sm text-gray-500">{{ entry.lastActivity }}</div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { LeaderboardEntry } from '@/types/leaderboard'; // Import the interface
import Heading from '../atoms/Heading.vue';
import Icon from '../atoms/Icon.vue';

defineProps<{
  entries: LeaderboardEntry[]; // Prop for the leaderboard data
}>();
</script>

<style scoped>
</style>