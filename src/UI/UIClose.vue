<template>
  <span class="ui-close mgc_close_circle_fill"></span>
</template>

<script setup>
 
</script>

<style lang="scss">
  @use '@/assets/_services' as services;

  .ui-close {
    top: 5px;
    right: 5px;
    font-size: 24px;
    position: absolute;
    color: #3bc7ff;

    @media screen and (min-width: services.$mobileWidthSmall) {
      display: none;
    }
  }
</style>
