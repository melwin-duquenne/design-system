<script setup lang="ts">
defineProps<{
  direction?: 'horizontal' | 'vertical'
}>()
</script>

<template>
  <hr
    class="ds-divider"
    :class="`ds-divider--${direction ?? 'horizontal'}`"
    role="separator"
  />
</template>

<style scoped>
.ds-divider {
  border: none;
  background-color: var(--color-border-default);
  margin: 0;
}

.ds-divider--horizontal {
  width: 100%;
  height: 1px;
  margin: var(--spacing-md) 0;
}

.ds-divider--vertical {
  width: 1px;
  height: 100%;
  min-height: 24px;
  margin: 0 var(--spacing-md);
  display: inline-block;
}
</style>
