<template>
  <ui-code
    :code="someCoord"
    :is-eng="props.isEng"
  >
    <ui-code-row>{</ui-code-row>
    <ui-code-row pl2>
      <ui-code-import>name_area</ui-code-import>:
      [
    </ui-code-row>
    <ui-code-row pl3>{</ui-code-row>
    <ui-code-row pl4>
      <ui-code-var>x</ui-code-var>:
       "10",
    </ui-code-row>
    <ui-code-row pl4>
      <ui-code-var>y</ui-code-var>:
       "10"
    </ui-code-row>
    <ui-code-row pl3>},</ui-code-row>
    <ui-code-row pl3>{</ui-code-row>
    <ui-code-row pl4>
      <ui-code-var>x</ui-code-var>:
       "10",
    </ui-code-row>
    <ui-code-row pl4>
      <ui-code-var>y</ui-code-var>:
       "40"
    </ui-code-row>
    <ui-code-row pl3>},</ui-code-row>
    <ui-code-row pl3>{</ui-code-row>
    <ui-code-row pl4>
      <ui-code-var>x</ui-code-var>:
       "40",
    </ui-code-row>
    <ui-code-row pl4>
      <ui-code-var>y</ui-code-var>:
       "40"
    </ui-code-row>
    <ui-code-row pl3>},</ui-code-row>
    <ui-code-row pl3>{</ui-code-row>
    <ui-code-row pl4>
      <ui-code-var>x</ui-code-var>:
      "40",
    </ui-code-row>
    <ui-code-row pl4>
      <ui-code-var>y</ui-code-var>:
      "10"
    </ui-code-row>
    <ui-code-row pl3>}</ui-code-row>
    <ui-code-row pl2>]</ui-code-row>
    <ui-code-row>}</ui-code-row>
  </ui-code>
</template>

<script setup>
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
      }
    ]
  };
</script>