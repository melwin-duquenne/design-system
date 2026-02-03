<script setup lang="ts">
import DsTypography from '../atoms/DsTypography.vue'
import DsThemeSwitch from '../molecules/DsThemeSwitch.vue'
</script>

<template>
  <header class="ds-header">
    <DsTypography as="h1">Design System Tokens</DsTypography>
    <DsThemeSwitch />
  </header>
</template>

<style scoped>
.ds-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--spacing-lg) 0;
  border-bottom: 1px solid var(--color-border-default);
  margin-bottom: var(--spacing-xl);
}
</style>
