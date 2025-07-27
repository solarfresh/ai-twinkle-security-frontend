<template>
  <section class="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20 text-center">
    <div class="container mx-auto px-4">
      <Heading tag="h1" size="3xl" color="white" class="mb-4">
        保護您的 LLM，防範惡意攻擊
      </Heading>
      <Paragraph size="lg" class="max-w-3xl mx-auto mb-8 text-blue-100">
        LLM 安全紅隊工具協助您識別大型語言模型的潛在弱點，透過自動化測試與深入分析，確保您的 AI 應用程式安全無虞。
      </Paragraph>
      <CallToActionButton @click="$emit('get-started')">
        <RocketLaunchIcon class="w-5 h-5 inline-block mr-2" />立即開始
      </CallToActionButton>
    </div>
  </section>
</template>

<script setup lang="ts">
import Heading from '../atoms/Heading.vue';
import Paragraph from '../atoms/Paragraph.vue';
import CallToActionButton from '../molecules/CallToActionButton.vue';
import { RocketLaunchIcon } from '@heroicons/vue/24/solid'; // Directly import for this specific component
</script>