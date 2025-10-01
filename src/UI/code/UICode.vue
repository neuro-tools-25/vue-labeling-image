<template>
  <div class="code">
    <slot></slot>

    <copy-text-icon
      :is-eng="props.isEng"
      @click="copyCode"
    />
  </div>
</template>

<script setup>
  import CopyTextIcon from '@/UI/CopyTextIcon.vue';
  import { copyTextToClipboard } from '@/helpers/helpers.js';

  const props = defineProps(['code', 'isEng']);
  const copyCode = () => copyTextToClipboard(props.code);
</script>

<style lang="scss">
  @use '@/assets/_services' as services;

  .code {
    $scrollColor: #cc7832;
    $scrollBg: #212122;

    @include services.styleScroll($scrollColor, $scrollBg);

    color: #a9b7c6;
    background: #212122;
    font-weight: bold;
    counter-reset: count;
    overflow: auto;
    border-radius: 5px;
    line-height: 150%;
    position: relative;

    .copy-text-icon {
      top: 4px;
      right: 5px;
      position: absolute;
    }
  }
</style>
