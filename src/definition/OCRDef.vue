<template>
  <ui-abbr :title="title">
    {{ label }}
  </ui-abbr>
</template>

<script setup>
  import { computed } from 'vue';

  const props = defineProps(['lang']);

  const title = computed(() => {
    let text="это технология, которая позволяет извлекать текст из изображений и преобразовывать его в редактируемый машиночитаемый формат. Проще говоря, OCR позволяет компьютеру \"видеть\" текст на картинке и понимать его";

    if (props.lang === 'eng') text="it is a technology that allows you to extract text from images and convert it into an editable machine-readable format. Simply put, OCR allows a computer to \"see\" the text in a picture and understand it";

    return text;
  });

  const label = 'OCR';
</script>

<style lang="scss">

</style>
