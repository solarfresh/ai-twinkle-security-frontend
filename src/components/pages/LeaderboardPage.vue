<template>
  <div>
    <Heading tag="h1" size="2xl" class="mb-6 text-gray-900">LLM 安全排行榜</Heading>
    <LeaderboardTable :entries="leaderboardData" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import type { LeaderboardEntry } from '@/types/leaderboard'; // Import the interface
import Heading from '../atoms/Heading.vue'; // For the page title
import LeaderboardTable from '../organisms/LeaderboardTable.vue'; // The leaderboard table organism

// --- Mock Data ---
const leaderboardData = ref<LeaderboardEntry[]>([
  { id: '1', rank: 1, modelName: 'GPT-4o', score: 1500, testsCompleted: 120, lastActivity: '2025-07-26 14:00' },
  { id: '2', rank: 2, modelName: 'Llama-3-8B', score: 1450, testsCompleted: 115, lastActivity: '2025-07-26 13:45' },
  { id: '3', rank: 3, modelName: 'Gemini 1.5 Pro', score: 1380, testsCompleted: 110, lastActivity: '2025-07-26 13:00' },
  { id: '4', rank: 4, modelName: 'Claude 3 Opus', score: 1320, testsCompleted: 105, lastActivity: '2025-07-26 12:30' },
  { id: '5', rank: 5, modelName: 'Mixtral 8x7B', score: 1290, testsCompleted: 100, lastActivity: '2025-07-26 12:00' },
  { id: '6', rank: 6, modelName: 'Mistral Large', score: 1250, testsCompleted: 98, lastActivity: '2025-07-26 11:45' },
  { id: '7', rank: 7, modelName: 'Qwen-1.8B-Chat', score: 1210, testsCompleted: 95, lastActivity: '2025-07-26 11:30' },
  { id: '8', rank: 8, modelName: 'Falcon-180B-Chat', score: 1180, testsCompleted: 92, lastActivity: '2025-07-26 11:15' },
  { id: '9', rank: 9, modelName: 'Gemma-2B', score: 1150, testsCompleted: 90, lastActivity: '2025-07-26 11:00' },
  { id: '10', rank: 10, modelName: 'Cohere Command', score: 1120, testsCompleted: 88, lastActivity: '2025-07-26 10:45' },
  { id: '11', rank: 11, modelName: 'OpenAI GPT-3.5', score: 1100, testsCompleted: 85, lastActivity: '2025-07-26 10:30' },
  { id: '12', rank: 12, modelName: 'Llama-2-70B', score: 1080, testsCompleted: 82, lastActivity: '2025-07-26 10:15' },
  { id: '13', rank: 13, modelName: 'Whisper Large-V3', score: 1050, testsCompleted: 80, lastActivity: '2025-07-26 10:00' },
  { id: '14', rank: 14, modelName: 'DALL-E 3', score: 1020, testsCompleted: 78, lastActivity: '2025-07-26 09:45' },
  { id: '15', rank: 15, modelName: 'Stable Diffusion XL', score: 990, testsCompleted: 75, lastActivity: '2025-07-26 09:30' },
  { id: '16', rank: 16, modelName: 'Bark', score: 960, testsCompleted: 72, lastActivity: '2025-07-26 09:15' },
  { id: '17', rank: 17, modelName: 'DeepMind AlphaCode 2', score: 930, testsCompleted: 70, lastActivity: '2025-07-26 09:00' },
  { id: '18', rank: 18, modelName: 'Google PaLM 2', score: 900, testsCompleted: 68, lastActivity: '2025-07-26 08:45' },
  { id: '19', rank: 19, modelName: 'Meta Llama Guard', score: 870, testsCompleted: 65, lastActivity: '2025-07-26 08:30' },
  { id: '20', rank: 20, modelName: 'AI Model X', score: 840, testsCompleted: 62, lastActivity: '2025-07-26 08:15' },
]);
</script>

<style scoped>
/* Page-specific styles if any */
</style>