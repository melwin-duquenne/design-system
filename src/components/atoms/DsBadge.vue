<script setup lang="ts">
defineProps<{
  variant?: 'primary' | 'secondary' | 'neutral' | 'success' | 'warning' | 'error' | 'info'
}>()
</script>

<template>
  <span class="ds-badge" :class="`ds-badge--${variant ?? 'primary'}`">
    <slot />
  </span>
</template>

<style scoped>
.ds-badge {
  display: inline-flex;
  align-items: center;
  padding: var(--spacing-xs) var(--spacing-sm);
  border-radius: var(--radius-full);
  font: var(--typography-body-sm);
  font-family: var(--typography-font-family-base), sans-serif;
  font-weight: var(--typography-weight-medium);
  line-height: 1;
}

.ds-badge--primary {
  background-color: var(--color-action-primary);
  color: var(--color-neutral-white);
}

.ds-badge--secondary {
  background-color: var(--color-action-secondary);
  color: var(--color-neutral-white);
}

.ds-badge--neutral {
  background-color: var(--color-neutral-200);
  color: var(--color-neutral-800);
}

.ds-badge--success {
  background-color: var(--color-success);
  color: var(--color-neutral-white);
}

.ds-badge--warning {
  background-color: var(--color-warning);
  color: var(--color-neutral-800);
}

.ds-badge--error {
  background-color: var(--color-error);
  color: var(--color-neutral-white);
}

.ds-badge--info {
  background-color: var(--color-info);
  color: var(--color-neutral-white);
}
</style>
