<template>
  <footer>
    <l-container>
      <ui-link
        type="repository"
        type-link="git"
      >
        Vue labeling image {{ year }}
      </ui-link>
    </l-container>
  </footer>
</template>

<script setup>
  import { ref } from 'vue';
  import LContainer from './ContainerLay.vue';

  const year = ref('');
  const yearCreated = 2025;

  const bYear = () => {
    const curYear = (new Date()).getFullYear();

    const moreYearCreated = curYear > yearCreated;

    if (moreYearCreated) year.value = `${yearCreated}-${curYear}`;
    if (!moreYearCreated) year.value = yearCreated;
  }

  bYear();
</script>

<style lang="scss" scoped>
  @use './_common.scss' as mixins;

  footer {
    @include mixins.layoutShadow;

    font-size: 12px;
    line-height: 120%;
    background: linear-gradient(to bottom, #e6e6e6, #fff);
  }
</style>