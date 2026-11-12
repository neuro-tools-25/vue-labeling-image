<template>
  <div class="examples-page__group">
    <open-header
      type-element="h2"
      :is-active="props.isOpen"
      :is-inline="true"
      @click="cIsOpen"
    >
      {{ props.headerText }}
    </open-header>

    <template v-if="props.isOpen">
      <slot></slot>
    </template>
  </div>
</template>

<script setup>
  import OpenHeader from '@/UI/OpenHeader.vue';

  const props = defineProps(['headerText', 'isOpen']);
  const emit = defineEmits(['change-is-open']);

  const cIsOpen = () => emit('change-is-open');
</script>

<style lang="scss">
  .examples-page__group {
    & > h2,
    & > .h2 {
      margin: 4px 0;
    }
  }
</style>
