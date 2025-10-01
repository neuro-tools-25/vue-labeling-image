<template>
  <ui-code
    :code="imageUrl"
    :is-eng="props.isEng"
  >
    <ui-code-row>
      <ui-code-text>
        https://lapkins.ru/upload/resize_cache/uf/c8f/293_293_2/c8f2a2f9868aec552e5819f100a9652c.jpg
      </ui-code-text>
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

  const imageUrl = 'https://lapkins.ru/upload/resize_cache/uf/c8f/293_293_2/c8f2a2f9868aec552e5819f100a9652c.jpg';
</script>