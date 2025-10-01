<template>
  <ui-abbr :title="title">
    {{ label }}
  </ui-abbr>
</template>

<script setup>
  import { computed } from 'vue';

  const props = defineProps(['lang']);

  const title = computed(() => {
    let text="страховой номер индивидуального лицевого счета";
    if (props.lang === 'eng') text="insurance number of an individual personal account";

    return text;
  });

  const label = computed(() => {
    let text='СНИЛС';
    if (props.lang === 'eng') text='SNILS';

    return text;
  });
</script>

<style lang="scss">

</style>
