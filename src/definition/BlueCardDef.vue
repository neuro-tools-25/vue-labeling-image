<template>
  <ui-abbr
    :title="title"
    nowrap
  >
    {{ label }}
  </ui-abbr>
</template>

<script setup>
  import { computed } from 'vue';

  const props = defineProps(['lang']);

  const title = computed(() => {
    let text="это и международная система страхования, и страховой сертификат, подтверждающий наличие у автовладельца, выезжающего за рубеж, страхование его автогражданской ответственности";

    if (props.lang === 'eng') text="this is both an international insurance system and an insurance certificate confirming that a car owner traveling abroad has insurance for his civil liability";

    return text;
  });

  const label = computed(() => {
    let text='синяя карта';
    if (props.lang === 'eng') text='blue card';

    return text;
  });
</script>

<style lang="scss">

</style>
