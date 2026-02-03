<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import DsNavItem from '../molecules/DsNavItem.vue'

const props = defineProps<{
  sections: { id: string; label: string }[]
}>()

const activeId = ref(props.sections[0]?.id ?? '')

let observer: IntersectionObserver | null = null

onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          activeId.value = entry.target.id
        }
      }
    },
    { rootMargin: '-10% 0px -80% 0px' }
  )

  for (const section of props.sections) {
    const el = document.getElementById(section.id)
    if (el) observer.observe(el)
  }
})

onUnmounted(() => {
  observer?.disconnect()
})
</script>

<template>
  <nav class="ds-sidebar">
    <DsNavItem
      v-for="s in sections"
      :key="s.id"
      :label="s.label"
      :href="`#${s.id}`"
      :active="activeId === s.id"
    />
  </nav>
</template>

<style scoped>
.ds-sidebar {
  position: sticky;
  top: var(--spacing-lg);
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xs);
  padding: var(--spacing-md);
  max-height: calc(100vh - var(--spacing-2xl));
  overflow-y: auto;
}
</style>
