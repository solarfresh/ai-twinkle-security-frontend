<template>
  <section class="py-16 bg-white">
    <div class="container mx-auto px-4">
      <Heading tag="h2" size="2xl" color="gray-800" class="text-center mb-12">
        核心功能
      </Heading>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <FeatureCard
          icon-name="ShieldCheck"
          title="全面性安全測試"
          description="從提示詞注入到資料洩漏，涵蓋各種 LLM 威脅模式。"
        />
        <FeatureCard
          icon-name="Cog6Tooth"
          title="客製化測試情境"
          description="根據您的 LLM 應用需求，靈活定義測試案例與參數。"
        />
        <FeatureCard
          icon-name="ChartBar"
          title="視覺化報告分析"
          description="清晰的測試結果報告與圖表，助您快速掌握風險。"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import Heading from '../atoms/Heading.vue';
import FeatureCard from '../molecules/FeatureCard.vue';
</script>