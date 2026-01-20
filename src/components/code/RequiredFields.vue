<template>
  <code-markup
    :is-header="false"
    :code="paramToCopy"
    v-bind="codeParam"
  >
    <code-line>
      <mu-key-words code="const " />
      <mu-variable code="areas " /> 
      <mu-type code="= [" />
    </code-line>
    <code-line level-2>
      <mu-type code="{" />
    </code-line>

    <code-line level-3>
      <mu-key code="id" />
      <mu-type code=": " />
      <mu-number code="1759337013345" />
      <mu-type code="," />
    </code-line>
    <code-line level-3>
      <mu-key code="x" />
      <mu-type code=": " />
      <mu-number code="15" />
      <mu-type code="," />
    </code-line>
    <code-line level-3>
      <mu-key code="y" />
      <mu-type code=": " />
      <mu-number code="15" />
      <mu-type code="," />
    </code-line>
    <code-line level-3>
      <mu-key code="width" />
      <mu-type code=": " />
      <mu-number code="30" />
      <mu-type code="," />
    </code-line>
    <code-line level-3>
      <mu-key code="height" />
      <mu-type code=": " />
      <mu-number code="30" />
      <mu-type code="," />
    </code-line>

    <code-line level-2>
      <mu-type code="}" />
    </code-line>
    <code-line>
      <mu-type code="];" />
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

  const paramToCopy = `const areas = [
  {
    id: 1759337013345,
    x: 15,
    y: 15,
    width: 30,
    height: 30,
  }
];`;

  const codeParam = useLang(props);
</script>