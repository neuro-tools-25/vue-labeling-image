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
      name:
    </ui-code-var>{{props.name}},
  </ui-code-row>
  <ui-code-row pl4>
    <ui-code-var>
      width:
    </ui-code-var>{{props.width}},
  </ui-code-row>
  <ui-code-row pl4>
    <ui-code-var>
      height:
    </ui-code-var>{{props.height}},
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
  <ui-code-row pl3>
    },
  </ui-code-row>
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