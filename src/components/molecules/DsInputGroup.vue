<script setup lang="ts">
import DsTypography from '../atoms/DsTypography.vue'
import DsInput from '../atoms/DsInput.vue'

defineProps<{
  label: string
  placeholder?: string
}>()

const model = defineModel<string>()
</script>

<template>
  <div class="ds-input-group">
    <DsTypography as="body-sm" weight="medium" class="ds-input-group__label">
      {{ label }}
    </DsTypography>
    <DsInput :placeholder="placeholder" v-model="model" />
  </div>
</template>

<style scoped>
.ds-input-group {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xs);
}

.ds-input-group__label {
  color: var(--color-text-secondary);
}
</style>
