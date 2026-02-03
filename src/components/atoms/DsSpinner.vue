<script setup lang="ts">
defineProps<{
  size?: 'sm' | 'md' | 'lg'
}>()
</script>

<template>
  <span class="ds-spinner" :class="`ds-spinner--${size ?? 'md'}`" role="status">
    <span class="ds-spinner__circle" />
  </span>
</template>

<style scoped>
.ds-spinner {
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.ds-spinner__circle {
  display: block;
  border-radius: var(--radius-full);
  border: 3px solid var(--color-border-default);
  border-top-color: var(--color-action-primary);
  animation: ds-spin 0.7s linear infinite;
}

.ds-spinner--sm .ds-spinner__circle {
  width: 16px;
  height: 16px;
  border-width: 2px;
}

.ds-spinner--md .ds-spinner__circle {
  width: 24px;
  height: 24px;
  border-width: 3px;
}

.ds-spinner--lg .ds-spinner__circle {
  width: 40px;
  height: 40px;
  border-width: 4px;
}

@keyframes ds-spin {
  to {
    transform: rotate(360deg);
  }
}
</style>
