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
    let text="Application Programming Interface — это программный интерфейс, представляющий собой набор правил и инструментов, которые позволяют различным программам, приложениям и сервисам взаимодействовать друг с другом, обмениваться данными и выполнять функции, используя запросы и ответы";

    if (props.lang === 'eng') text="An application programming interface is a software interface that is a set of rules and tools that allows different programs, applications, and services to interact with each other, combine data, and perform functions using requests and responses";

    return text;
  });

  const label = 'API';
</script>

<style lang="scss">

</style>
