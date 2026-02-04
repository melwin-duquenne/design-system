<script setup lang="ts">
defineProps<{
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
}>()
</script>

<template>
  <button
    class="ds-button"
    :class="[`ds-button--${variant ?? 'primary'}`, `ds-button--${size ?? 'md'}`]"
    :disabled="disabled"
  >
    <slot />
  </button>
</template>

<style scoped>
.ds-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;
  border-radius: var(--radius-md);
  font-family: var(--typography-font-family-base), sans-serif;
  font-weight: var(--typography-weight-medium);
  transition: opacity 0.2s, box-shadow 0.2s;
}

.ds-button:hover:not(:disabled) {
  opacity: 0.85;
}

.ds-button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

/* Variants */
.ds-button--primary {
  background-color: var(--color-action-primary);
  color: var(--color-neutral-900);
}

.ds-button--secondary {
  background-color: var(--color-action-accessible-secondary);
  color: var(--color-neutral-white);
}

.ds-button--outline {
  background-color: transparent;
  color: var(--color-text-primary);
  border: 1px solid var(--color-border-default);
}

/* Sizes */
.ds-button--sm {
  padding: var(--spacing-xs) var(--spacing-sm);
  font-size: 14px;
}

.ds-button--md {
  padding: var(--spacing-sm) var(--spacing-md);
  font-size: 16px;
}

.ds-button--lg {
  padding: var(--spacing-md) var(--spacing-lg);
  font-size: 18px;
}
</style>
