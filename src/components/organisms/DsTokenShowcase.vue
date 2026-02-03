<script setup lang="ts">
import DsTypography from '../atoms/DsTypography.vue'
import DsCard from '../molecules/DsCard.vue'

defineProps<{
  title: string
}>()
</script>

<template>
  <section class="ds-token-showcase">
    <DsTypography as="h2">{{ title }}</DsTypography>
    <DsCard shadow="sm" class="ds-token-showcase__content">
      <slot />
    </DsCard>
  </section>
</template>

<style scoped>
.ds-token-showcase {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
}

.ds-token-showcase__content {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
}
</style>
