<template>
	<article class="card">
		<ResultSectionComponent />
		<SummaryScoresComponent :data="data" />
	</article>
</template>

<script setup lang="ts">
defineProps<{
	data: { category: string; score: number; icon: string; }[];
}>()
</script>
