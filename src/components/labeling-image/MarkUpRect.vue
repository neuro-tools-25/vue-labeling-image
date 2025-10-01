<template>
  <rect
    :x="x"
    :y="y"
    :width="width"
    :height="height"
    class="mark-up__rect"
    :class="classComp"
  >
    <title v-if="isTitleBlock">
      {{ props.title }}
    </title>
  </rect>
</template>

<script setup>
  import { computed } from 'vue';

  const props = defineProps([
    'x',
    'y',
    'width',
    'height',
    'isActive',
    'isDragging',
    'isVertical',
    'isHorizontal',
    'isProc',
    'isShadow',
    'title',
    'isTitle'
  ]);

  const isExactValue = (val) => !String(val).includes('px');
  const isProc = (val) => props.isProc && isExactValue(val);

  const x = computed(() => isProc(props.x) ? `${props.x}%` : props.x);
  const y = computed(() => isProc(props.y) ? `${props.y}%` : props.y);
  const width = computed(() => isProc(props.width) ? `${props.width}%` : props.width);
  const height = computed(() => isProc(props.height) ? `${props.height}%` : props.height);

  const isTitleBlock = computed(() => props.isTitle && props?.title);

  const classComp = computed(() => ({
    'mark-up__rect_active': props.isActive,
    'mark-up__rect_dragging': props.isDragging,
    'mark-up__rect_vertical': props.isVertical,
    'mark-up__rect_horizontal': props.isHorizontal,
    'mark-up__rect_shadow': props.isShadow,
  }));
</script>

<style lang="scss">
  :root {
    --mu-marking-rect-stroke-width: 2;
    --mu-marking-rect-stroke-opacity: 1;
    --mu-marking-rect-fill-opacity: .2;

    --mu-marking-rect-rx: 3px;
    --mu-marking-rect-ry: var(--mu-marking-rect-rx);

    --mu-marking-rect-fill: #006fff;
    --mu-marking-rect-stroke: var(--mu-marking-rect-fill);

    // Стили для активной области разметки
    --mu-marking-rect-active-fill: #ff0050;
    --mu-marking-rect-active-stroke: var(--mu-marking-rect-active-fill);
    --mu-marking-rect-active-fill-opacity: .2;
    --mu-marking-rect-active-stroke-opacity: 1;

    // Стили для области в момент разметки
    --mu-marking-rect-dragging-fill: #ce0242;
    --mu-marking-rect-dragging-stroke: var(--mu-marking-rect-dragging-fill);
    --mu-marking-rect-dragging-fill-opacity: .3;
    --mu-marking-rect-dragging-stroke-opacity: 1;

    // Тень для области разметки
    --mu-marking-rect-shadow-stroke: #000;
    --mu-marking-rect-shadow-stroke-opacity: 1;
    --mu-marking-rect-shadow-stroke-width: 3px;
  }

  .mark-up {
    &__rect {
      rx: var(--mu-marking-rect-rx);
      ry: var(--mu-marking-rect-ry);
      fill: var(--mu-marking-rect-fill);
      stroke: var(--mu-marking-rect-stroke);
      stroke-width: var(--mu-marking-rect-stroke-width);
      fill-opacity: var(--mu-marking-rect-fill-opacity);
      stroke-opacity: var(--mu-marking-rect-stroke-opacity);
      cursor: grab;

      .mark-up_rect-no-move & {
        cursor: pointer;
      }

      .mark-up_readonly & {
        cursor: default;
      }

      &_vertical,
      &_horizontal {
        fill: transparent;
        fill-opacity: 0;
        stroke: transparent;
        stroke-width: 0;

        // Горизонтальное растягивание, левое, правое
        &:nth-of-type(1) {
          transform:translateX(-1px)
        }

        &:nth-of-type(2) {
          transform:translateX(-4px)
        }

        // Вертикальное растягивание, верхнее, нижнее
        &:nth-of-type(3) {
          transform:translateY(-1px)
        }

        &:nth-of-type(4) {
          transform:translateY(-4px)
        }
      }

      .mark-up &_vertical {
        cursor: ew-resize;
      }

      .mark-up &_horizontal {
        cursor: ns-resize;
      }

      &_active {
        fill: var(--mu-marking-rect-active-fill);
        stroke: var(--mu-marking-rect-active-stroke);
        fill-opacity: var(--mu-marking-rect-active-fill-opacity);
        stroke-opacity: var(--mu-marking-rect-active-stroke-opacity);
      }

      &_dragging {
        fill: var(--mu-marking-rect-dragging-fill);
        stroke: var(--mu-marking-rect-dragging-stroke);
        fill-opacity: var(--mu-marking-rect-dragging-fill-opacity);
        stroke-opacity: var(--mu-marking-rect-dragging-stroke-opacity);
      }

      &_shadow {
        fill-opacity: 0;
        stroke-width: var(--mu-marking-rect-shadow-stroke-width);
        stroke-opacity: var(--mu-marking-rect-shadow-stroke-opacity);
        stroke: var(--mu-marking-rect-shadow-stroke);
      }
    }

    &_theme {
      &_red {
        // Стили для активной области разметки
        --mu-marking-rect-active-fill: #24a319;
        --mu-marking-rect-active-stroke: var(--mu-marking-rect-active-fill);
        // Стили для области в момент разметки
        --mu-marking-rect-dragging-fill: #247719;
        --mu-marking-rect-dragging-stroke: var(--mu-marking-rect-dragging-fill);
      }

      &_blue {
        --mu-marking-rect-fill: #247719;
        --mu-marking-rect-stroke: var(--mu-marking-rect-fill);
        // Стили для активной области разметки
        --mu-marking-rect-active-fill: #ff0050;
        --mu-marking-rect-active-stroke: var(--mu-marking-rect-active-fill);
        // Стили для области в момент разметки
        --mu-marking-rect-dragging-fill: #ce0242;
        --mu-marking-rect-dragging-stroke: var(--mu-marking-rect-dragging-fill);
      }

      &_white {
        --mu-marking-rect-fill: #000080;
        --mu-marking-rect-stroke: var(--mu-marking-rect-fill);
        // Стили для активной области разметки
        --mu-marking-rect-active-fill: #e60f00;
        --mu-marking-rect-active-stroke: var(--mu-marking-rect-active-fill);
        // Стили для области в момент разметки
        --mu-marking-rect-dragging-fill: #b30c00;
        --mu-marking-rect-dragging-stroke: var(--mu-marking-rect-dragging-fill);
      }

      &_black {
        --mu-marking-rect-fill: #ffff00;
        --mu-marking-rect-stroke: var(--mu-marking-rect-fill);
        // Стили для активной области разметки
        --mu-marking-rect-active-fill: #00ff00;
        --mu-marking-rect-active-stroke: var(--mu-marking-rect-active-fill);
        // Стили для области в момент разметки
        --mu-marking-rect-dragging-fill: #1ed013;
        --mu-marking-rect-dragging-stroke: var(--mu-marking-rect-dragging-fill);
        // Тень для области разметки
        --mu-marking-rect-shadow-stroke: #fff;
      }
    }
  }
</style>
