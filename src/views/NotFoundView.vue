<template>
  <div class="not-found-page">
    <animation-lay is-page-nav>
      <div v-if="isRus">
        <h1>Страница не найдена</h1>

        <p>Искомая страница не найдена, попробуйте перейти по ссылкам ниже:</p>

        <link-page :navItem="navItem" />
      </div>

      <div v-if="isEng">
        <h1>Page not found</h1>

        <p>The page you are looking for was not found, please try the links below:</p>

        <link-page :navItem="navItem" />
      </div>
    </animation-lay>
  </div>
</template>

<script setup>
  import useNav from '@/layouts/useNav';
  import AnimationLay from '@/layouts/AnimationLay.vue';
  import LinkPage from './components/LinkPage.vue';

  const {
    isRus,
    isEng,
    navItem
  } = useNav();
</script>

<style lang="scss" scoped>

</style>