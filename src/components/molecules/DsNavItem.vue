<script setup lang="ts">
defineProps<{
  label: string
  active?: boolean
  href?: string
}>()
</script>

<template>
  <a
    class="ds-nav-item"
    :class="{ 'ds-nav-item--active': active }"
    :href="href"
  >
    {{ label }}
  </a>
</template>

<style scoped>
.ds-nav-item {
  display: block;
  padding: var(--spacing-xs) var(--spacing-md);
  border-radius: var(--radius-md);
  font-family: var(--typography-font-family-base), sans-serif;
  font: var(--typography-body-sm);
  font-weight: var(--typography-weight-medium);
  color: var(--color-text-secondary);
  text-decoration: none;
  transition: background-color 0.2s, color 0.2s;
  cursor: pointer;
}

.ds-nav-item:hover {
  background-color: var(--color-background-secondary);
  color: var(--color-text-primary);
}

.ds-nav-item--active {
  background-color: var(--color-background-secondary);
  color: var(--color-action-primary);
  font-weight: var(--typography-weight-bold);
}
</style>
