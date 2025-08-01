<template>
  <div class="space-y-6">
    <Heading tag="h1" size="2xl">沙箱環境</Heading>

    <TestControlsPanel />

    <LiveLogsViewer />

    <RecentTestRecordsPanel />
  </div>
</template>

<script setup lang="ts">
import Heading from '../../atoms/Heading.vue';
import TestControlsPanel from '../../organisms/TestControlsPanel.vue';
import LiveLogsViewer from '../../organisms/LiveLogsViewer.vue';
import RecentTestRecordsPanel from '../../organisms/RecentTestRecordsPanel.vue';

// No script logic needed at the page level, as all logic is encapsulated in the organisms.
</script>