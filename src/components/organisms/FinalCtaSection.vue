<template>
  <section class="bg-gray-100 py-16 text-center">
    <div class="container mx-auto px-4">
      <Heading tag="h2" size="xl" color="gray-800" class="mb-4">
        準備好提升您的 LLM 安全性了嗎？
      </Heading>
      <Paragraph size="lg" class="mb-8">
        立即註冊，體驗我們強大的紅隊測試工具！
      </Paragraph>
      <CallToActionButton @click="$emit('register')">
        <UserPlusIcon class="w-5 h-5 inline-block mr-2" />免費註冊
      </CallToActionButton>
    </div>
  </section>
</template>

<script setup lang="ts">
import Heading from '../atoms/Heading.vue';
import Paragraph from '../atoms/Paragraph.vue';
import CallToActionButton from '../molecules/CallToActionButton.vue';
import { UserPlusIcon } from '@heroicons/vue/24/solid';
</script>