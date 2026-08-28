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