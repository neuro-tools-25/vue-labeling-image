<template>
  <div class="changelog-page">
    <animation-lay is-page-nav>
      <div v-if="isRus">
        <h1>Журнал изменений</h1>

        <p>Искомая страница не найдена, попробуйте перейти по ссылкам ниже:</p>
      </div>

      <div v-if="isEng">
        <h1>Changelog</h1>

        <p>The page you are looking for was not found, please try the links below:</p>
      </div>
    </animation-lay>
  </div>
</template>

<script setup>
  import useNav from '@/layouts/useNav';
  import AnimationLay from '@/layouts/AnimationLay.vue';

  const {
    isRus,
    isEng,
  } = useNav();
</script>

<style lang="scss" scoped>

</style>