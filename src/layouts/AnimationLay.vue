<template>
  <transition
    v-if="props.isPageNav"
    name="fade"
    mode="out-in"
  >
    <slot></slot>
  </transition>

  <transition-group
    v-else
    name="fade"
  >
    <slot></slot>
  </transition-group>
</template>

<script setup>
  const props = defineProps({
    isPageNav: {
      type: Boolean,
      default: false
    }
  })
</script>

<style lang="scss">
  .fade {
    &-enter-active,
    &-leave-active {
      transition: opacity .3s var(--easeOutSine);
    }

    &-enter-from,
    &-leave-to {
      opacity: 0;
    }
  }
</style>