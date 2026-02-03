<script setup lang="ts">
defineProps<{
  shadow?: 'sm' | 'md' | 'lg'
}>()
</script>

<template>
  <div class="ds-card" :class="`ds-card--shadow-${shadow ?? 'sm'}`">
    <slot />
  </div>
</template>

<style scoped>
.ds-card {
  background-color: var(--color-background-secondary);
  border: 1px solid var(--color-border-default);
  border-radius: var(--radius-lg);
  padding: var(--spacing-lg);
  transition: box-shadow 0.2s, background-color 0.5s, border-color 0.5s;
}

.ds-card--shadow-sm {
  box-shadow: var(--shadow-sm);
}

.ds-card--shadow-md {
  box-shadow: var(--shadow-md);
}

.ds-card--shadow-lg {
  box-shadow: var(--shadow-lg);
}
</style>
