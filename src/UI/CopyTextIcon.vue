<template>
  <span
    class="copy-text-icon mgc_copy_2_line"
    :title="title"
  ></span>
</template>

<script setup>
  import { computed } from 'vue';

  // Интернационализация
  const props = defineProps(['isEng']);

  const title = computed(() => {
    let text='Скопировать текст';
    if (props.isEng) text='Copy text';

    return text;
  });
</script>

<style lang="scss">
  .copy-text-icon {
    cursor: pointer;
    display: inline-block;

    &:active {
      transform: translateY(1px);
    }
  }
</style>
