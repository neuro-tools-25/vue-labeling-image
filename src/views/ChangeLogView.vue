<template>
  <div class="changelog-page">
    <template v-if="isRus">
      <h1>Журнал изменений</h1>

      <p>Искомая страница не найдена, попробуйте перейти по ссылкам ниже:</p>
    </template>

    <template v-if="isEng">
      <h1>Changelog</h1>

      <p>The page you are looking for was not found, please try the links below:</p>
    </template>
  </div>
</template>

<script setup>
  import useNav from '@/layouts/useNav';

  const {
    isRus,
    isEng,
  } = useNav();
</script>

<style lang="scss" scoped>

</style>