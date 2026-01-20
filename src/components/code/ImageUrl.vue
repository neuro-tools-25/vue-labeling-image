<template>
  <code-markup
    :is-header="false"
    :code="imageUrl"
    v-bind="codeParam"
  >
    <code-line>
      <mu-text>
        https://lapkins.ru/upload/resize_cache/uf/c8f/293_293_2/c8f2a2f9868aec552e5819f100a9652c.jpg
      </mu-text>
    </code-line>
  </code-markup>
</template>

<script setup>
  import useLang from '@/components/code/uselang.js';

  const props = defineProps({
    isEng: {
      type: Boolean,
      default: false
    }
  });

  const imageUrl = 'https://lapkins.ru/upload/resize_cache/uf/c8f/293_293_2/c8f2a2f9868aec552e5819f100a9652c.jpg';

  const codeParam = useLang(props);
</script>