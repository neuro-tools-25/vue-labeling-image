<template>
  <div
    class="row"
    :class="classBlock"
  >
    <slot />
  </div>
</template>

<script setup>
  import { computed } from 'vue';

  const props = defineProps({
    type: {
      type: String,
      default: ''
    },
    centered: {
      type: Boolean,
      default: false
    },
    spaceBetween: {
      type: Boolean,
      default: false
    }
  });

  const classBlock = computed(() => ({
    items: props.type === "items",
    centered: props.centered,
    'space-between': props.spaceBetween
  }));
</script>

<style lang="scss">
  .row {
    margin: 10px 0;

    &.items,
    &.centered,
    &.space-between {
      display: flex;
      flex-wrap: wrap;
    }

    &.items {
      gap: 10px 20px;
    }

    &.centered {
      justify-content: center;
    }

    &.space-between {
      justify-content: space-between;
    }
  }
</style>
