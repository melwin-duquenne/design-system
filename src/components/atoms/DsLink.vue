<script setup lang="ts">
defineProps<{
  href: string
  variant?: 'primary' | 'secondary'
}>()
</script>

<template>
  <a
    class="ds-link"
    :class="`ds-link--${variant ?? 'primary'}`"
    :href="href"
  >
    <slot />
  </a>
</template>

<style scoped>
.ds-link {
  font-family: var(--typography-font-family-base), sans-serif;
  font: var(--typography-body-md);
  font-weight: var(--typography-weight-medium);
  text-decoration: none;
  transition: opacity 0.2s;
  cursor: pointer;
}

.ds-link:hover {
  opacity: 0.75;
  text-decoration: underline;
}

.ds-link--primary {
  color: var(--color-action-text-primary);
}

.ds-link--secondary {
  color: var(--color-action-text-secondary);
}
</style>
