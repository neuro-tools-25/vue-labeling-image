<template>
  <header class="header">
    <container-lay>
      <router-link :to="mainLink">
        Vue labeling image
      </router-link>

      <div
        class="header__b"
        :class="{ 'header__b_open': isNav }"
      >
        <header-substrate @click="closeNav" />

        <nav-icon
          :is-active='isNav'
          @click="changeNav"
        />

        <nav-lay
          @change-nav="changeNav"
          @close-nav="closeNav"
        />

        <lang-lay />
      </div>
    </container-lay>
  </header>
</template>

<script setup>
  import {
    ref,
    inject,
    computed
  } from 'vue';

  import { RouterLink } from 'vue-router';

  import NavLay from './NavLay.vue';
  import ContainerLay from './ContainerLay.vue';
  import NavIcon from './NavIcon.vue';
  import HeaderSubstrate from './HeaderSubstrate.vue';
  import LangLay from './LangLay.vue';

  const isNav = ref(false);

  const changeNav = () => isNav.value = !isNav.value;
  const closeNav = () => isNav.value = false;

  const { query } = inject('lang');
  const mainLink = computed(() => ({ name: 'main', ...query.value }));
</script>

<style lang="scss" scoped>
  @use './_common.scss' as mixins;
  @use '@/assets/_services' as services;

  .header {
    @include mixins.layoutShadow;

    background: linear-gradient(to bottom, #fefefe, #dfdfdf);

    &__b {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;

      &_open {
        .header__substrate {
          opacity: 1;
          z-index: 10000;
        }
      }
    }
  }
</style>