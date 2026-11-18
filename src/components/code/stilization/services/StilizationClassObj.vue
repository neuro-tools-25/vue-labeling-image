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
    <mu-text :code='`"${props.name}"`' />
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
    <mu-key code="bBox" />
    <mu-type code=": [" />
  </code-line>
  <code-line level-5>
    <mu-number :code="x" />
    <mu-type code="," />
  </code-line>
  <code-line level-5>
    <mu-number :code="y" />
    <mu-type code="," />
  </code-line>
  <code-line level-5>
    <mu-number :code="width" />
    <mu-type code="," />
  </code-line>
  <code-line level-5>
    <mu-number :code="height" />
    <mu-type code="," />
  </code-line>
  <code-line level-4>
    <mu-type code="]," />
  </code-line>
  <code-line
    level-4
    new
    active
  >
    <mu-key code="muClass" />
    <mu-type code=": " />
    <mu-text 
      :code='`"${props.muClass}"`'
      bold
    />
    <mu-type code="," />
  </code-line>
  <code-line level-3>
    <mu-type code="}," />
  </code-line>
</template>

<script setup>
  import { computed } from 'vue';

  const props = defineProps([
    "id",
    "name",
    "width",
    "height",
    "x",
    "y",
    "muClass"
  ]);

  const calcFormat = (x) => Number(x) / 100 + '';

  const x = computed(() => calcFormat(props.x));
  const y = computed(() => calcFormat(props.y));
  const width = computed(() => calcFormat(props.width));
  const height= computed(() => calcFormat(props.height));
</script>