<template>
  <code-line level-3>
    <mu-type code="{" />
  </code-line>

  <code-line level-4>
    <mu-key code="x" />
    <mu-type code=": " />
    <mu-text :code='`"${props.x}"`' />
    <mu-type code="," />
  </code-line>

  <code-line level-4>
    <mu-key code="y" />
    <mu-type code=": " />
    <mu-text :code='`"${props.y}"`' />
    <mu-type code="," />
  </code-line>

  <code-line level-3>
    <mu-type code="}," />
  </code-line>
</template>

<script setup>
  const props = defineProps(["x", "y"]);
</script>