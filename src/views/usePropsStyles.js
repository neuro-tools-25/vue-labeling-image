import { ref } from 'vue';

const usePropsStyles = () => {
  const bg = ref('');
  const border = ref('');
  const boxShadow = ref('');
  // Сетка
  const gridSize = ref('');
  const gridColor = ref('');
  // Обычная область
  const rectStrokeWidth = ref('');
  const rectFillOpacity = ref('');
  const rectStrokeOpacity = ref('');
  const rectRx = ref('')
  const rectRy = ref('');
  const rectFill = ref('');
  const rectStroke = ref('');
  // Стили активной области
  const activeRectFill = ref('');
  const activeRectStroke = ref('');
  const activeRectFillOpacity = ref('');
  const activeRectStrokeOpacity = ref('');
  // Стили области во время разметки
  const labelingRectFill = ref('');
  const labelingRectStroke = ref('');
  const labelingRectFillOpacity = ref('');
  const labelingRectStrokeOpacity = ref('');
  // Стили для тени области разметки
  const shadowRectStroke = ref('');
  const shadowRectStrokeOpacity = ref('');
  const shadowRectStrokeWidth = ref('');

  // const slyleMarkup = computed(() => ({
  //   '--mu-bg': muBg.value,
  //   '--mu-border': muBorder.value,
  //   '--mu-box-shadow': muBoxShadow.value,
  //   // Стили для сетки
  //   '--mu-grid-size': muGridSize.value,
  //   '--mu-grid-color': muGridColor.value,
  //   // Стили для обычной области разметки
  //   '--mu-marking-rect-stroke-width': muMarkingRectStrokeWidth.value,
  //   '--mu-marking-rect-fill-opacity': muMarkingRectFillOpacity.value,
  //   '--mu-marking-rect-stroke-opacity': muMarkingRectStrokeOpacity.value,
  //   '--mu-marking-rect-rx': muMarkingRectRx.value,
  //   '--mu-marking-rect-ry': muMarkingRectRy.value,
  //   '--mu-marking-rect-fill': muMarkingRectFill.value,
  //   '--mu-marking-rect-stroke': muMarkingRectStroke.value,
  //   // Стили для автивной области
  //   '--mu-marking-rect-active-fill': muMarkingRectActiveFill.value,
  //   '--mu-marking-rect-active-stroke': muMarkingRectActiveStroke.value,
  //   '--mu-marking-rect-active-fill-opacity': muMarkingRectActiveFillOpacity.value,
  //   '--mu-marking-rect-active-stroke-opacity': muMarkingRectActiveStrokeOpacity.value,
  //   // Стили для области во время разметки
  //   '--mu-marking-rect-dragging-fill': muMarkingRectDraggingFill.value,
  //   '--mu-marking-rect-dragging-stroke': muMarkingRectDraggingStroke.value,
  //   '--mu-marking-rect-dragging-fill-opacity': muMarkingRectDraggingFillOpacity.value,
  //   '--mu-marking-rect-dragging-stroke-opacity': muMarkingRectDraggingStrokeOpacity.value,
  //   // Стили для тени
  //   '--mu-marking-rect-shadow-stroke': muMarkingRectShadowStroke.value,
  //   '--mu-marking-rect-shadow-stroke-opacity': muMarkingRectShadowStrokeOpacity.value,
  //   '--mu-marking-rect-shadow-stroke-width': muMarkingRectShadowStrokeWidth.value,
  // }));

  return {
    bg,
    border,
    boxShadow,
    gridSize,
    gridColor,
    rectStrokeWidth,
    rectFillOpacity,
    rectStrokeOpacity,
    rectRx,
    rectRy,
    rectFill,
    rectStroke,
    activeRectFill,
    activeRectStroke,
    activeRectFillOpacity,
    activeRectStrokeOpacity,
    labelingRectFill,
    labelingRectStroke,
    labelingRectFillOpacity,
    labelingRectStrokeOpacity,
    shadowRectStroke,
    shadowRectStrokeOpacity,
    shadowRectStrokeWidth
  }
}

export default usePropsStyles;