
<template>
  <header-lay :lang="langAttr" />

  <div
    class="content"
    :lang="langAttr"
  >
    <container-lay type="main">
      <router-view v-slot="{ Component }">
        <animation-lay is-page-nav>
          <component :is="Component" />
        </animation-lay>
      </router-view>
    </container-lay>
  </div>

  <footer-lay />
</template>

<script setup>
  import { RouterView } from 'vue-router';

  import useLang from './useLang';
  import useTitle from './useTitle';

  import AnimationLay from './layouts/AnimationLay.vue';

  import HeaderLay from './layouts/HeaderLay.vue';
  import FooterLay from './layouts/FooterLay.vue';
  import ContainerLay from './layouts/ContainerLay.vue';

  const { lang, langAttr } = useLang();

  useTitle(lang);
</script>

<style lang="scss">
</style>
