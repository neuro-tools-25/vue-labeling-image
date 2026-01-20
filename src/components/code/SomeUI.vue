<template>
  <code-markup
    :is-header="false"
    :code="someCoord"
    v-bind="codeParam"
  >
    <code-line>
      <mu-type code="{" />
    </code-line>
    <code-line level-2>
      <mu-key code="name_area" />
      <mu-type code=": [" />
    </code-line>

    <some-ui-row x="10" y="10" />
    <some-ui-row x="10" y="40" />
    <some-ui-row x="40" y="40" />
    <some-ui-row x="40" y="10" />

    <code-line level-2>
      <mu-type code="]" />
    </code-line>
    <code-line>
      <mu-type code="}" />
    </code-line>
  </code-markup>
</template>

<script setup>
  import useLang from '@/components/code/uselang.js';
  import SomeUiRow from './SomeUIRow.vue';

  const props = defineProps({
    isEng: {
      type: Boolean,
      default: false
    }
  });

  const someCoord = {
    name_area: [
      {
        x: "10",
        y: "10"
      },
      {
        x: "10",
        y: "40"
      },
      {
        x: "40",
        y: "40"
      },
      {
        x: "40",
        y: "10"
      },
    ]
  };

  const codeParam = useLang(props);
</script>