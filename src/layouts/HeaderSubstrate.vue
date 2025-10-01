<template>
  <div class="header__substrate"></div>
</template>

<script setup>
  const emits = defineEmits(['open-nav']);
  const props = defineProps(['isActive']);
</script>

<style lang="scss" scoped>
  @use '@/assets/_services' as services;

  .header {
    &__substrate {
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      position: fixed;
      opacity: 0;
      z-index: -1;
      background: rgba(0, 0, 0, .5);
      transition: opacity .4s ease-in-out 0s;

      @media screen and (min-width: services.$mobileWidthSmall) {
        display: none;
      }
    }
  }
</style>