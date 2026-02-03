<script setup lang="ts">
import { ref, onMounted } from 'vue'
import DsToggle from '../atoms/DsToggle.vue'
import DsTypography from '../atoms/DsTypography.vue'

const isDark = ref(false)

onMounted(() => {
  isDark.value = document.documentElement.classList.contains('dark')
})

function toggle(value: boolean) {
  isDark.value = value
  document.documentElement.classList.toggle('dark', value)
}
</script>

<template>
  <div class="ds-theme-switch">
    <span class="ds-theme-switch__icon" aria-hidden="true">{{ isDark ? '🌙' : '☀️' }}</span>
    <DsTypography as="body-sm" weight="medium">
      {{ isDark ? 'Dark' : 'Light' }}
    </DsTypography>
    <DsToggle :model-value="isDark" @update:model-value="toggle" />
  </div>
</template>

<style scoped>
.ds-theme-switch {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
}

.ds-theme-switch__icon {
  font-size: 18px;
  line-height: 1;
}
</style>
