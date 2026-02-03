<script setup lang="ts">
import { ref } from 'vue'
import DsTypography from '../atoms/DsTypography.vue'

defineProps<{
  variant?: 'success' | 'warning' | 'error' | 'info'
  closable?: boolean
}>()

const visible = ref(true)

function close() {
  visible.value = false
}
</script>

<template>
  <div v-if="visible" class="ds-alert" :class="`ds-alert--${variant ?? 'info'}`">
    <span class="ds-alert__icon">
      <template v-if="variant === 'success'">&#10003;</template>
      <template v-else-if="variant === 'warning'">&#9888;</template>
      <template v-else-if="variant === 'error'">&#10007;</template>
      <template v-else>&#8505;</template>
    </span>
    <DsTypography as="body-sm" class="ds-alert__content">
      <slot />
    </DsTypography>
    <button v-if="closable" class="ds-alert__close" @click="close" aria-label="Fermer">&times;</button>
  </div>
</template>

<style scoped>
.ds-alert {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  padding: var(--spacing-sm) var(--spacing-md);
  border-radius: var(--radius-md);
  font-family: var(--typography-font-family-base), sans-serif;
}

.ds-alert--success {
  background-color: color-mix(in srgb, var(--color-success) 15%, transparent);
  border: 1px solid var(--color-success);
  color: var(--color-success);
}

.ds-alert--warning {
  background-color: color-mix(in srgb, var(--color-warning) 15%, transparent);
  border: 1px solid var(--color-warning);
  color: var(--color-warning);
}

.ds-alert--error {
  background-color: color-mix(in srgb, var(--color-error) 15%, transparent);
  border: 1px solid var(--color-error);
  color: var(--color-error);
}

.ds-alert--info {
  background-color: color-mix(in srgb, var(--color-info) 15%, transparent);
  border: 1px solid var(--color-info);
  color: var(--color-info);
}

.ds-alert__icon {
  font-size: 16px;
  flex-shrink: 0;
}

.ds-alert__content {
  flex: 1;
  color: var(--color-text-primary);
}

.ds-alert__close {
  background: none;
  border: none;
  font-size: 18px;
  cursor: pointer;
  color: var(--color-text-secondary);
  padding: 0 var(--spacing-xs);
  line-height: 1;
}

.ds-alert__close:hover {
  color: var(--color-text-primary);
}
</style>
