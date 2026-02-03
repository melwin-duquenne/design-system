<script setup lang="ts">
defineProps<{
  placeholder?: string
  disabled?: boolean
  modelValue?: string
}>()

defineEmits<{
  'update:modelValue': [value: string]
}>()
</script>

<template>
  <input
    class="ds-input"
    type="text"
    :placeholder="placeholder"
    :disabled="disabled"
    :value="modelValue"
    @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
  />
</template>

<style scoped>
.ds-input {
  width: 100%;
  padding: var(--spacing-sm) var(--spacing-md);
  border: 1px solid var(--color-border-default);
  border-radius: var(--radius-md);
  background-color: var(--color-background-primary);
  color: var(--color-text-primary);
  font: var(--typography-body-md);
  font-family: var(--typography-font-family-base), sans-serif;
  outline: none;
  transition: border-color 0.2s, box-shadow 0.2s;
}

.ds-input::placeholder {
  color: var(--color-text-secondary);
}

.ds-input:focus {
  border-color: var(--color-action-primary);
  box-shadow: 0 0 0 2px rgba(249, 115, 22, 0.2);
}

.ds-input:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
</style>
