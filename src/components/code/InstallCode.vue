<template>
  <ui-code
    :code="installText"
    :is-eng="props.isEng"
  >
    <ui-code-row >
      <ui-code-import>npm</ui-code-import> install <ui-code-text>vue-labeling-image</ui-code-text>;
    </ui-code-row>
  </ui-code>
</template>

<script setup>
  const props = defineProps({
    isEng: {
      type: Boolean,
      default: false
    }
  });

  const installText = "npm install vue-labeling-image;";
</script>