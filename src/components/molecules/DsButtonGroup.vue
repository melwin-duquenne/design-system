<script setup lang="ts">
</script>

<template>
  <div class="ds-button-group">
    <slot />
  </div>
</template>

<style scoped>
.ds-button-group {
  display: inline-flex;
}

.ds-button-group :deep(.ds-button) {
  border-radius: 0;
}

.ds-button-group :deep(.ds-button:first-child) {
  border-radius: var(--radius-md) 0 0 var(--radius-md);
}

.ds-button-group :deep(.ds-button:last-child) {
  border-radius: 0 var(--radius-md) var(--radius-md) 0;
}

.ds-button-group :deep(.ds-button:only-child) {
  border-radius: var(--radius-md);
}

.ds-button-group :deep(.ds-button + .ds-button) {
  margin-left: 1px;
}
</style>
