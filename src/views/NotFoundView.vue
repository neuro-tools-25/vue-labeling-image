<template>
  <div class="not-found-page">
    <template v-if="isRus">
      <h1>Страница не найдена</h1>
      <p>Искомая страница не найдена, попробуйте перейти по ссылкам ниже:</p>
    </template>

    <template v-if="isEng">
      <h1>Page not found</h1>
      <p>The page you are looking for was not found, please try the links below:</p>
    </template>

    <div class="link">
      <span
        v-for="({ link, text }, count) in navItem"
        :key="count"
      >
        <router-link :to="link">
          {{ text }}
        </router-link>
      </span>
    </div>
  </div>
</template>

<script setup>
  import useNav from '@/layouts/useNav';

  const {
    isRus,
    isEng,
    navItem
  } = useNav();
</script>

<style lang="scss" scoped>
  .not-found-page {
    .link {
      display: flex;
      flex-wrap: wrap;
      gap: 5px 10px;
    }
  }
</style>