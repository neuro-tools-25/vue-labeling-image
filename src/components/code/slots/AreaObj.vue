<template>
  <code-line level-3>
    <mu-type code="{" />
  </code-line>
  <code-line level-4>
    <mu-key code="id" />
    <mu-type code=": " />
    <mu-number :code="props.id" />
    <mu-type code="," />
  </code-line>
  <code-line level-4>
    <mu-key code="name" />
    <mu-type code=": " />
    <mu-text :code='`${props.name}`' />
    <mu-type code="," />
  </code-line>
  <code-line level-4>
    <mu-key code="width" />
    <mu-type code=": " />
    <mu-number :code="props.width" />
    <mu-type code="," />
  </code-line>
  <code-line level-4>
    <mu-key code="height" />
    <mu-type code=": " />
    <mu-number :code="props.height" />
    <mu-type code="," />
  </code-line>
  <code-line level-4>
    <mu-key code="x" />
    <mu-type code=": " />
    <mu-number :code="props.x" />
    <mu-type code="," />
  </code-line>
  <code-line level-4>
    <mu-key code="y" />
    <mu-type code=": " />
    <mu-number :code="props.y" />
    <mu-type code="," />
  </code-line>
  <code-line level-3>
    <mu-type code="}," />
  </code-line>
</template>

<script setup>
  const props = defineProps([
    'id',
    'name',
    'width',
    'height',
    'x',
    'y',
  ])
</script>