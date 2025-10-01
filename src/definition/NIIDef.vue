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
    let text="государственное учреждение, специально созданное для организации научных исследований и проведения опытно-конструкторских разработок";

    if (props.lang === 'eng') text="a state institution specifically created for organizing scientific research and conducting development projects";

    return text;
  });

  const label = computed(() => {
    let text='НИИ';
    if (props.lang === 'eng') text='Research Institute';

    return text;
  });
</script>

<style lang="scss">

</style>
