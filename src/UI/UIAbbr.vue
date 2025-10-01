<template>
  <abbr
    class="ui-abbr"
    :class="{ 'ui-abbr_title': isTitle, 'ui-abbr_nowrap': props.nowrap !== undefined }"
    :title="props.title"
    @click="changeIsTitle"
  >
    <slot></slot>
  </abbr>
</template>

<script setup>
  import { ref } from 'vue';

  const props = defineProps(['title', 'nowrap']);
  const isTitle = ref(false);

  const changeIsTitle = () => isTitle.value = !isTitle.value; 
</script>

<style lang="scss">
  .ui-abbr {
    cursor: pointer;
    text-decoration: none;
    border-bottom: 1px dashed var(--color-text);

    &_title {
      &::after {
        content: " (" attr(title) ")";
        font-size: 90%;
      }

      &.ui-abbr_nowrap {
        white-space: wrap;
      }
    }

    &_nowrap {
      white-space: nowrap;
    }
  }
</style>
