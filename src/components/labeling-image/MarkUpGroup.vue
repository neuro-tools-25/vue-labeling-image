<template>
  <g
    :id="props.id" 
    :class="classGComp"
    @mouseover="emits('hovered-id')"
    @mouseout="emits('reset-hovered-id')"
  >
    <mark-up-rect
      v-if="props.isShadow"
      :x="props.x"
      :y="props.y"
      :width="width"
      :height="height"
      :is-shadow="true"
      :is-proc="props.isProc"
    />

    <mark-up-rect
      :x="props.x"
      :y="props.y"
      :width="width"
      :height="height"
      :title="title"
      :is-title="isTitle"
      :is-active="props.isActive"
      :is-dragging="props.isDragging"
      :is-proc="props.isProc"
    />

    <g v-if="isResize">
      <mark-up-rect
        :x="props.x"
        :y="props.y"
        :width="sizeResizeArea"
        :height="height"
        :is-vertical="true"
        :is-proc="props.isProc"
        @mousedown.stop="emits('move-left', $event)"
        @touchstart.stop="emits('move-left', $event)"
      />
      <mark-up-rect
        :x="props.x + width"
        :y="props.y"
        :width="sizeResizeArea"
        :height="height"
        :is-vertical="true"
        :is-proc="props.isProc"
        @mousedown.stop="emits('move-right', $event)"
        @touchstart.stop="emits('move-right', $event)"
      />

      <mark-up-rect
        :x="props.x"
        :y="props.y"
        :width="width"
        :height="sizeResizeArea"
        :is-horizontal="true"
        :is-proc="props.isProc"
        @mousedown.stop="emits('move-top', $event)"
        @touchstart.stop="emits('move-top', $event)"
      />
      <mark-up-rect
        :x="props.x"
        :y="props.y + height"
        :width="width"
        :height="sizeResizeArea"
        :is-horizontal="true"
        :is-proc="props.isProc"
        @mousedown.stop="emits('move-bottom', $event)"
        @touchstart.stop="emits('move-bottom', $event)"
      />
    </g>
  </g>
</template>

<script setup>
  import { computed } from 'vue';

  import MarkUpRect from './MarkUpRect.vue';

  const emits = defineEmits([
    'move-left',
    'move-right',
    'move-top',
    'move-bottom',
    'hovered-id',
    'reset-hovered-id'
  ]);

  const props = defineProps([
    'x',
    'y',
    'id',
    'width',
    'height',
    'isActive',
    'isUnvisible',
    'isResizeArea',
    'isDragging',
    'isProc',
    'isShadow',
    'isReadonly',
    'title',
    'isTitle'
  ]);

  const sizeResizeArea = '5px';

  const isResize = computed(() => {
    if (props.isReadonly) return false;
    if (!props.isResizeArea) return false;

    return true;
  });

  const classGComp = computed(() => (['mark-up__g', {
    'mark-up__g_active': props.isActive,
    'mark-up__g_unvisible': props.isUnvisible,
  }]));
</script>

<style lang="scss">
  .mark-up {
    &__g {
      &_unvisible {
        rect {
          opacity: 0;
        }
      }
    } 
  }
</style>
