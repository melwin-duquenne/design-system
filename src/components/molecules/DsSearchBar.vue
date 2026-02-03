<script setup lang="ts">
import DsInput from '../atoms/DsInput.vue'
import DsButton from '../atoms/DsButton.vue'

defineProps<{
  placeholder?: string
  modelValue?: string
}>()

const emit = defineEmits<{
  'update:modelValue': [value: string]
  search: []
}>()
</script>

<template>
  <div class="ds-search-bar">
    <DsInput
      :placeholder="placeholder ?? 'Rechercher...'"
      :model-value="modelValue"
      @update:model-value="emit('update:modelValue', $event)"
      @keyup.enter="emit('search')"
    />
    <DsButton variant="primary" size="md" @click="emit('search')">
      Rechercher
    </DsButton>
  </div>
</template>

<style scoped>
.ds-search-bar {
  display: flex;
  gap: var(--spacing-sm);
  align-items: stretch;
}
</style>
