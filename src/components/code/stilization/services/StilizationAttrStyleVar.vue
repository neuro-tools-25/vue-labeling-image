<template>
  <code-line level-2>
    <mu-key-words code="const " />
    <mu-variable :code="props.name" />
    <mu-type code=" = " />
    <mu-function code="bStyle" />
    <mu-type code="(" />
    <mu-text :code='`"${props.color}"`' />
    <mu-type code=");" />
  </code-line>
</template>

<script setup>
  const props = defineProps([
    "name",
    'color'
  ]);
</script>