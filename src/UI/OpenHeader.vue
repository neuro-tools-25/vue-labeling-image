<template>
  <component
    :is="props.typeElement"
    class="open-header"
    :class="classElement"
  >
    <ui-arrow />

    <slot></slot>
  </component>
</template>

<script setup>
  import { computed } from 'vue';
  
  const props = defineProps({
    typeElement: {
      type: String,
      default: 'h3'
    },
    isActive: {
      type: Boolean,
      default: false
    },
    isInline: {
      type: Boolean,
      default: false
    },
  });

  const classElement = computed(() => ({
    'open-header_active': props.isActive,
    'open-header_inline': props.isInline,
  }));
</script>

<style lang="scss">
  .open-header {
    user-select: none;
    cursor: pointer;
    position: relative;
    padding-right: 25px;

    .ui-arrow {
      right: 0;
      position: absolute;
      transform: rotate(180deg);
      transform-origin: 50% 50%;
    }

    &_active {
      .ui-arrow {
        transform: rotate(0deg);
      }
    }

    &_inline {
      display: inline-block;
    }
  }
</style>
