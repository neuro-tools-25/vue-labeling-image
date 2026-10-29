<template>
  <code-line level-3 new>
    <mu-text :code='`"${props.name}"`' />
    <mu-type code=": " />
    <mu-number :code="props.val" />
    <mu-type code="," />
  </code-line>
</template>

<script setup>
  const props = defineProps(['name', 'val']);
</script>