<template>
  <div class="full-page">
    <slot></slot>
  </div>
</template>

<script setup>
  const props = defineProps({
    isPageNav: {
      type: Boolean,
      default: false
    }
  })
</script>

<style lang="scss"></style>