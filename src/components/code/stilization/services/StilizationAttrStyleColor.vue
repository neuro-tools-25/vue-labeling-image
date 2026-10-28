<template>
  <code-line level-3>
    <mu-text :code='`"${props.name}"`' />
    <mu-type code=": " />
    <mu-type code="color," />
  </code-line>
</template>

<script setup>
  const props = defineProps(['name']);
</script>