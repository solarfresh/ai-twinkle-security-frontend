<template>
  <div class="flex flex-col items-center text-center p-4">
    <Icon :name="iconName" size="lg" color="blue-500" class="mb-3" />
    <Heading tag="h3" size="md" color="gray-800" class="mb-2">{{ title }}</Heading>
    <Paragraph size="sm">{{ description }}</Paragraph>
  </div>
</template>

<script setup lang="ts">
import Icon from '../atoms/Icon.vue';
import Heading from '../atoms/Heading.vue';
import Paragraph from '../atoms/Paragraph.vue';

defineProps({
  iconName: {
    type:String,
		required: true
	},
  title: String,
  description: String,
});
</script>