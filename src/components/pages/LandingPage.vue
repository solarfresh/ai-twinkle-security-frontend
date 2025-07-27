<template>
  <LandingPageTemplate>
    <template #hero>
      <HeroSection @get-started="handleGetStarted" />
    </template>
    <template #features>
      <FeaturesOverview />
    </template>
    <template #cta>
      <FinalCtaSection @register="handleRegister" />
    </template>
  </LandingPageTemplate>
</template>

<script setup lang="ts">
import LandingPageTemplate from '@/components/templates/LandingPageTemplate.vue';
import HeroSection from '@/components/organisms/HeroSection.vue';
import FeaturesOverview from '@/components/organisms/FeaturesOverview.vue';
import FinalCtaSection from '@/components/organisms/FinalCtaSection.vue';

// In a real app, you'd use Vue Router for navigation
const handleGetStarted = () => {
  alert('前往登入/註冊頁面');
  // router.push('/login'); or router.push('/register');
};

const handleRegister = () => {
  alert('前往註冊頁面');
  // router.push('/register');
};
</script>

<style scoped>
/* Page specific styles if any */
</style>