<template>
  <image
    :href="logoStud"
    width="80"
    height="40"
    x="100%"
    y="10"
    class="batman__logo"
  />
</template>

<script setup>
  import { logoStud } from '@/assets/logo-example/logo-stud.js';
</script>

<style lang="scss" scoped>
  .batman__logo {
    cursor: default;
    transform: translateX(-85px);
  }
</style>