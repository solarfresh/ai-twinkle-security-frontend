<template>
  <div class="bg-white p-6 rounded-lg shadow-md mb-8">
    <Heading tag="h2" size="lg" class="mb-4 text-gray-800">測試摘要</Heading>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
      <KeyValueDisplay label="測試名稱" :value="record.testName" />
      <KeyValueDisplay label="目標模型" :value="record.modelName" />
      <KeyValueDisplay label="測試情境" :value="record.scenarioName" />
      <KeyValueDisplay label="測試者" :value="record.testerName" />
      <KeyValueDisplay label="完成時間" :value="record.completionTime" />
      <KeyValueDisplay label="總耗時" :value="record.duration" />
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      <MetricCard
        title="總體分數"
        :value="record.overallScore"
        unit="分"
        icon="Trophy"
        :type="MetricCardType.SCORE" />
      <MetricCard
        title="通過測試"
        :value="`${record.passedTestCases}/${record.totalTestCases}`"
        unit="個"
        icon="CheckCircle"
        :type="MetricCardType.SUCCESS" />
      <MetricCard
        title="失敗測試"
        :value="record.failedTestCases"
        unit="個"
        icon="XCircle"
        :type="MetricCardType.FAILURE" />
      <MetricCard
        title="偵測到漏洞"
        :value="record.vulnerabilitiesFound"
        unit="個"
        icon="ExclamationTriangle"
        :type="MetricCardType.FAILURE" />
    </div>

    <div class="flex justify-end mt-6 space-x-3">
      <Button variant="outline">
        <Icon name="DocumentArrowDown" size="md" class="mr-2" /> 下載報告
      </Button>
      <Button variant="primary">
        <Icon name="Play" size="md" class="mr-2" /> 重新執行測試
      </Button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { MetricCardType } from '@/enums/ui'; // Import the enum
import type { DetailedTestRecord } from '../../types/test';
import Button from '../atoms/Button.vue';
import Heading from '../atoms/Heading.vue';
import Icon from '../atoms/Icon.vue';
import KeyValueDisplay from '../molecules/KeyValueDisplay.vue';
import MetricCard from '../molecules/MetricCard.vue';

defineProps<{
  record: DetailedTestRecord;
}>();
</script>