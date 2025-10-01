<template>
  <label
    class="label"
    :class="classCom"
  >
    <slot></slot>
  </label>
</template>

<script setup>
  import { computed } from 'vue';

  const props = defineProps(['noMargin']);

  const classCom = computed(() => ({
    'label_no-mar': props.noMargin !== undefined
  }));
</script>

<style lang="scss">
  .label {
    font-size: 12px;
    display: block;
    margin: 0 0 10px;
    line-height: 140%;

    &_no-mar {
      margin-bottom: 0;
    }
  }
</style>
