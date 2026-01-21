<template>
  <component
    :is="calcType"
    class="container"
  >
    <slot />
  </component>
</template>

<script setup>
  import { computed } from 'vue';

  const props = defineProps({
    type: {
      type: String,
      default: 'div'
    }
  });

  const calcType = computed(()=> {
    if (props.type === 'main') return 'main';

    return 'div';
  })
</script>

<style lang="scss">
  .container {
    padding: 10px 15px;
  }
</style>

<style lang="scss" scoped>
  .container {
    margin: 0 auto;
    max-width: 1280px;
    box-sizing: border-box;

    .content & {
      background: #fff;
    }
  }
</style>