<template>
  <ui-code-row pl3>
    {
  </ui-code-row>
  <ui-code-row pl4>
    <ui-code-var>
      id:
    </ui-code-var>{{props.id}},
  </ui-code-row>
  <ui-code-row pl4>
    <ui-code-var>
      x:
    </ui-code-var>{{props.x}},
  </ui-code-row>
  <ui-code-row pl4>
    <ui-code-var>
      y:
    </ui-code-var>{{props.y}},
  </ui-code-row>
  <ui-code-row pl4>
    <ui-code-var>
      title:
    </ui-code-var>{{props.title}},
  </ui-code-row>
  <ui-code-row pl3>
    },
  </ui-code-row>
</template>

<script setup>
  const props = defineProps([
    'x',
    'y',
    'id',
    'title',
  ])
</script>