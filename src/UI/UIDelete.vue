<template>
  <span
    class="ui-delete mgc_delete_2_fill"
    :title="title"
  ></span>
</template>

<script setup>
  import { computed } from 'vue';

  // Интернационализация
  const props = defineProps({
    isEng: {
      type: Boolean,
      default: false
    }
  });

  const title = computed(() => {
    let text='Удалить область';
    if (props.isEng) text='Delete area';

    return text;
  });
</script>

<style lang="scss">
  @use '@/assets/_services' as services;

  .ui-delete {
    color: services.$secondColor;
    font-size: 22px;
    line-height: 120%;
    cursor: pointer;
    transition: color var(--mu-transition-property);

    &:hover {
      color: #000c8d;
    }

    .form-area &,
    .form-group & {
      top: 5px;
      right: 5px;
      position: absolute;
    }
  }
</style>
