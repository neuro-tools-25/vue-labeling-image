<template>
  <ui-code
    :code="installText"
    :is-eng="props.isEng"
  >
    <ui-code-row>
      <ui-code-import>const</ui-code-import> <ui-code-var>areas</ui-code-var> = [
    </ui-code-row>
    <ui-code-row pl2>{</ui-code-row>

    <ui-code-row pl4>
      <ui-code-var>id</ui-code-var>: 1759337013345,
    </ui-code-row>
    <ui-code-row pl4>
      <ui-code-var>x</ui-code-var>: 15,
    </ui-code-row>
    <ui-code-row pl4>
      <ui-code-var>y</ui-code-var>: 15,
    </ui-code-row>
    <ui-code-row pl4>
      <ui-code-var>width</ui-code-var>: 30,
    </ui-code-row>
    <ui-code-row pl4>
      <ui-code-var>height</ui-code-var>: 30,
    </ui-code-row>

    <ui-code-row pl2>}</ui-code-row>
    <ui-code-row>];</ui-code-row>
  </ui-code>
</template>

<script setup>
  const props = defineProps({
    isEng: {
      type: Boolean,
      default: false
    }
  });

  const installText = `const areas = [
  {
    id: 1759337013345,
    x: 15,
    y: 15,
    width: 30,
    height: 30,
  }
];`;
</script>