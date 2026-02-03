<script setup lang="ts">
defineProps<{
  as?: 'h1' | 'h2' | 'body-md' | 'body-sm'
  weight?: 'regular' | 'medium' | 'bold'
}>()

const tagMap: Record<string, string> = {
  h1: 'h1',
  h2: 'h2',
  'body-md': 'p',
  'body-sm': 'p',
}
</script>

<template>
  <component
    :is="tagMap[as ?? 'body-md']"
    class="ds-typography"
    :class="[`ds-typography--${as ?? 'body-md'}`, weight ? `ds-typography--${weight}` : '']"
  >
    <slot />
  </component>
</template>

<style scoped>
.ds-typography {
  font-family: var(--typography-font-family-base), sans-serif;
  color: var(--color-text-primary);
  margin: 0;
}

.ds-typography--h1 {
  font: var(--typography-heading-h1);
  font-family: var(--typography-font-family-base), sans-serif;
}

.ds-typography--h2 {
  font: var(--typography-heading-h2);
  font-family: var(--typography-font-family-base), sans-serif;
}

.ds-typography--body-md {
  font: var(--typography-body-md);
  font-family: var(--typography-font-family-base), sans-serif;
}

.ds-typography--body-sm {
  font: var(--typography-body-sm);
  font-family: var(--typography-font-family-base), sans-serif;
}

.ds-typography--regular {
  font-weight: var(--typography-weight-regular);
}

.ds-typography--medium {
  font-weight: var(--typography-weight-medium);
}

.ds-typography--bold {
  font-weight: var(--typography-weight-bold);
}
</style>
