<template>
  <div class="changelog-page">
    <animation-lay is-page-nav>
      <div v-if="isRus">
        <h1>Журнал изменений</h1>

        <p>
          В данном журнале я буду фиксировать изменения начиная с версии "0.2.0" и выше.
        </p>

        <p>
          В версии "0.2.0" я добавил директиву "v-model:hovered-id". При наведении на маркированную область, через данную директиву я могу вывести её id.
        </p>
      </div>

      <div v-if="isEng">
        <h1>Changelog</h1>

        <p>
I         In this log, I will record changes starting from version "0.2.0" and higher.
        </p>

        <p>
          In version "0.2.0" I added the "v-model:hovered-id" directive. When hovering over a marked area, I can use this directive to output its id.
        </p>
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