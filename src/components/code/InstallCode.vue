<template>
  <code-markup
    :is-header="false"
    :code="installText"
    v-bind="codeParam"
  >
    <code-line>
      <mu-key-words code="npm" />
      <mu-tag code=" install " />
      <mu-text code="vue-labeling-image" />
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

  const installText = "npm install vue-labeling-image";

  const codeParam = useLang(props);
</script>