<script setup lang="ts">
defineProps<{
  modelValue?: boolean
  ariaLabel?: string
}>()

defineEmits<{
  'update:modelValue': [value: boolean]
}>()
</script>

<template>
  <button
    class="ds-toggle"
    :class="{ 'ds-toggle--active': modelValue }"
    role="switch"
    :aria-checked="modelValue"
    :aria-label="ariaLabel ?? 'Toggle'"
    @click="$emit('update:modelValue', !modelValue)"
  >
    <span class="ds-toggle__thumb" />
  </button>
</template>

<style scoped>
.ds-toggle {
  position: relative;
  width: 44px;
  height: 24px;
  padding: 2px;
  border: none;
  border-radius: var(--radius-full);
  background-color: var(--color-neutral-300);
  cursor: pointer;
  transition: background-color 0.2s;
}

.ds-toggle--active {
  background-color: var(--color-action-primary);
}

.ds-toggle__thumb {
  display: block;
  width: 20px;
  height: 20px;
  border-radius: var(--radius-full);
  background-color: var(--color-neutral-white);
  transition: transform 0.2s;
}

.ds-toggle--active .ds-toggle__thumb {
  transform: translateX(20px);
}
</style>
