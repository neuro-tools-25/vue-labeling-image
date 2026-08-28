import { computed } from 'vue';

const useStyles = (props) => {
  const slyleMarkup = computed(() => ({
    '--mu-bg': props.bg,
    '--mu-border': props.border,
    '--mu-box-shadow': props.boxShadow,
    // Стили для сетки
    '--mu-grid-size': props.gridSize,
    '--mu-grid-color': props.gridColor,
    // Стили для обычной области разметки
    '--mu-marking-rect-stroke-width': props.rectStrokeWidth,
    '--mu-marking-rect-fill-opacity': props.rectFillOpacity,
    '--mu-marking-rect-stroke-opacity': props.rectStrokeOpacity,
    '--mu-marking-rect-rx': props.rectRx,
    '--mu-marking-rect-ry': props.rectRy,
    '--mu-marking-rect-fill': props.rectFill,
    '--mu-marking-rect-stroke': props.rectStroke,
    // Стили для автивной области
    '--mu-marking-rect-active-fill': props.activeRectFill,
    '--mu-marking-rect-active-stroke': props.activeRectStroke,
    '--mu-marking-rect-active-fill-opacity': props.activeRectFillOpacity,
    '--mu-marking-rect-active-stroke-opacity': props.activeRectStrokeOpacity,
    // Стили для области во время разметки
    '--mu-marking-rect-dragging-fill': props.labelingRectFill,
    '--mu-marking-rect-dragging-stroke': props.labelingRectStroke,
    '--mu-marking-rect-dragging-fill-opacity': props.labelingRectFillOpacity,
    '--mu-marking-rect-dragging-stroke-opacity': props.labelingRectStrokeOpacity,
    // Стили для тени
    '--mu-marking-rect-shadow-stroke': props.shadowRectStroke,
    '--mu-marking-rect-shadow-stroke-opacity': props.shadowRectStrokeOpacity,
    '--mu-marking-rect-shadow-stroke-width': props.shadowRectStrokeWidth,
  }));

  return slyleMarkup;
}

export default useStyles;