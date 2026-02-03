<script setup lang="ts">
defineProps<{
  src?: string
  initials?: string
  size?: 'sm' | 'md' | 'lg'
}>()
</script>

<template>
  <div class="ds-avatar" :class="`ds-avatar--${size ?? 'md'}`">
    <img v-if="src" :src="src" alt="" class="ds-avatar__img" />
    <span v-else class="ds-avatar__initials">{{ initials ?? '?' }}</span>
  </div>
</template>

<style scoped>
.ds-avatar {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--radius-full);
  background-color: var(--color-action-primary);
  color: var(--color-neutral-white);
  font-family: var(--typography-font-family-base), sans-serif;
  font-weight: var(--typography-weight-medium);
  overflow: hidden;
}

.ds-avatar--sm {
  width: 32px;
  height: 32px;
  font-size: 12px;
}

.ds-avatar--md {
  width: 40px;
  height: 40px;
  font-size: 14px;
}

.ds-avatar--lg {
  width: 56px;
  height: 56px;
  font-size: 18px;
}

.ds-avatar__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.ds-avatar__initials {
  line-height: 1;
}
</style>
