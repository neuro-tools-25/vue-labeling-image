<template>
  <div class="lang">
    <span 
      :class="isEngClass"
      @click="changeLang('eng')"
    >
      En
    </span>
    | 
    <span
      :class="isRusClass"
      @click="changeLang('rus')"
    >
      Ru
    </span>
  </div>
</template>

<script setup>
  import {
    computed,
    inject
  } from 'vue';

  const {
    changeLang,
    isRus,
    isEng
  } = inject('lang');

  const isRusClass = computed(() => ({ lang_active: isRus.value }));
  const isEngClass = computed(() => ({ lang_active: isEng.value }));
</script>

<style lang="scss" scoped>
  @use '@/assets/_services' as services;

  .lang {
    margin-top: 3px;

    span {
      cursor: pointer;
      user-select: none;
    }

    &_active {
      font-weight: bold;
    }

    @media screen and (min-width: services.$tabletSmall) {
      margin-top: 25px;
    }
  }
</style>