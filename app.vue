<template>
  <div>
    <main class="page-container">
      <CardScoreComponent :data="data" />
    </main>
  </div>
</template>

<script lang="ts" setup>
import data from './data/data.json';
</script>
