<template>
  <nav class="nav">
    <ui-close @click="emits('change-nav')" />

    <ul @click="emits('close-nav')">
      <li
        v-for="({ link, text }, count) in navItem"
        :key="count"
      >
        <router-link :to="link">
          {{ text }}
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script setup>
  import useNav from './useNav';
  import { RouterLink } from 'vue-router';

  const emits = defineEmits(['close-nav', 'change-nav']);

  const { navItem } = useNav();
</script>

<style lang="scss" scoped>
  @use '@/assets/services' as services;

  .nav {
    top: 0;
    left: 0;
    width: 160px;
    height: 100%;
    position: fixed;
    z-index: 10001;
    padding: 5px 20px 20px 20px;
    background: services.$scrollColor;
    box-sizing: border-box;
    transform: translateX(-160px);
    transition: transform .4s var(--easeInOutQuad) 0s;

    .header__b_open & {
      transform: translateX(0);
    }

    ul,
    li {
      list-style-type: none;
    }

    ul {
      margin: 0;
      padding: 0;
    }

    li {
      margin: 15px 0;
    }

    a {
      color: #fff;
      text-decoration: underline;

      &:hover {
        text-decoration: none;
      }
    }

    & &_active {
      text-decoration: none;
    }

    @media screen and (min-width: services.$tabletSmall) {
      width: auto;
      position: static;
      transform: translateX(0);
      background: none;
      padding: 0;
      margin: 5px 0 0;

      ul {
        display: flex;
        gap: 20px;
      }

      li {
        margin: 5px 0;
      }

      a {
        color: inherit;
      }
    }
  }
</style>