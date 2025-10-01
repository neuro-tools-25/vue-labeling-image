import {
  ref,
  computed,
  watch
} from 'vue';

import {
  redTheme,
  blueTheme,
  whiteTheme,
  blackTheme,
} from './constTheme.js';

const useStyles = (theme) => {
  const muBg = ref('#c8c8c8');
  const muBorder = ref('none');
  const muBoxShadow = ref('0 0 5px #7b7b7b');
  // Сетка
  const muGridSize = ref('5px');
  const muGridColor = ref('#987654');
  // Обычная область
  const muMarkingRectStrokeWidth = ref('2');
  const muMarkingRectFillOpacity = ref('.1');
  const muMarkingRectStrokeOpacity = ref(1);
  const muMarkingRectRx = ref('3px')
  const muMarkingRectRy = ref('3px');
  const muMarkingRectFill = ref('#006fff');
  const muMarkingRectStroke = ref('#006fff');
  // Стили активной области
  const muMarkingRectActiveFill = ref('#ff0050');
  const muMarkingRectActiveStroke = ref('#ff0050');
  const muMarkingRectActiveFillOpacity = ref('.2');
  const muMarkingRectActiveStrokeOpacity = ref(1);
  // Стили области во время разметки
  const muMarkingRectDraggingFill = ref('#ce0242');
  const muMarkingRectDraggingStroke = ref('#ce0242');
  const muMarkingRectDraggingFillOpacity = ref('.3');
  const muMarkingRectDraggingStrokeOpacity = ref(1);
  // Стили для тени области разметки
  const muMarkingRectShadowStroke = ref('#000');
  const muMarkingRectShadowStrokeOpacity = ref(1);
  const muMarkingRectShadowStrokeWidth = ref('3px');

  const slyleMarkup = computed(() => ({
    '--mu-bg': muBg.value,
    '--mu-border': muBorder.value,
    '--mu-box-shadow': muBoxShadow.value,
    // Стили для сетки
    '--mu-grid-size': muGridSize.value,
    '--mu-grid-color': muGridColor.value,
    // Стили для обычной области разметки
    '--mu-marking-rect-stroke-width': muMarkingRectStrokeWidth.value,
    '--mu-marking-rect-fill-opacity': muMarkingRectFillOpacity.value,
    '--mu-marking-rect-stroke-opacity': muMarkingRectStrokeOpacity.value,
    '--mu-marking-rect-rx': muMarkingRectRx.value,
    '--mu-marking-rect-ry': muMarkingRectRy.value,
    '--mu-marking-rect-fill': muMarkingRectFill.value,
    '--mu-marking-rect-stroke': muMarkingRectStroke.value,
    // Стили для автивной области
    '--mu-marking-rect-active-fill': muMarkingRectActiveFill.value,
    '--mu-marking-rect-active-stroke': muMarkingRectActiveStroke.value,
    '--mu-marking-rect-active-fill-opacity': muMarkingRectActiveFillOpacity.value,
    '--mu-marking-rect-active-stroke-opacity': muMarkingRectActiveStrokeOpacity.value,
    // Стили для области во время разметки
    '--mu-marking-rect-dragging-fill': muMarkingRectDraggingFill.value,
    '--mu-marking-rect-dragging-stroke': muMarkingRectDraggingStroke.value,
    '--mu-marking-rect-dragging-fill-opacity': muMarkingRectDraggingFillOpacity.value,
    '--mu-marking-rect-dragging-stroke-opacity': muMarkingRectDraggingStrokeOpacity.value,
    // Стили для тени
    '--mu-marking-rect-shadow-stroke': muMarkingRectShadowStroke.value,
    '--mu-marking-rect-shadow-stroke-opacity': muMarkingRectShadowStrokeOpacity.value,
    '--mu-marking-rect-shadow-stroke-width': muMarkingRectShadowStrokeWidth.value,
  }));

  const slyleMarkupToCSS = computed(() => {
    return `--mu-bg: ${muBg.value};
--mu-border: ${muBorder.value};
--mu-box-shadow: ${muBoxShadow.value};
--mu-grid-size: ${muGridSize.value};
--mu-grid-color: ${muGridColor.value};
--mu-marking-rect-stroke-width: ${muMarkingRectStrokeWidth.value};
--mu-marking-rect-fill-opacity: ${muMarkingRectFillOpacity.value};
--mu-marking-rect-stroke-opacity: ${muMarkingRectStrokeOpacity.value};
--mu-marking-rect-rx: ${muMarkingRectRx.value};
--mu-marking-rect-ry: ${muMarkingRectRy.value};
--mu-marking-rect-fill: ${muMarkingRectFill.value};
--mu-marking-rect-stroke: ${muMarkingRectStroke.value};
--mu-marking-rect-active-fill: ${muMarkingRectActiveFill.value};
--mu-marking-rect-active-stroke: ${muMarkingRectActiveStroke.value};
--mu-marking-rect-active-fill-opacity: ${muMarkingRectActiveFillOpacity.value};
--mu-marking-rect-active-stroke-opacity: ${muMarkingRectActiveStrokeOpacity.value};
--mu-marking-rect-dragging-fill: ${muMarkingRectDraggingFill.value};
--mu-marking-rect-dragging-stroke: ${muMarkingRectDraggingStroke.value};
--mu-marking-rect-dragging-fill-opacity: ${muMarkingRectDraggingFillOpacity.value};
--mu-marking-rect-dragging-stroke-opacity: ${muMarkingRectDraggingStrokeOpacity.value};
--mu-marking-rect-shadow-stroke: ${muMarkingRectShadowStroke.value};
--mu-marking-rect-shadow-stroke-opacity: ${muMarkingRectShadowStrokeOpacity.value};
--mu-marking-rect-shadow-stroke-width: ${muMarkingRectShadowStrokeWidth.value};`
  });

  const themeToDefault = () => {
    muGridColor.value = '#987654';
    // Обычная область
    muMarkingRectFill.value = '#006fff';
    muMarkingRectStroke.value = '#006fff';
    // Стили активной области
    muMarkingRectActiveFill.value = '#ff0050';
    muMarkingRectActiveStroke.value = '#ff0050';
    // Стили области во время разметки
    muMarkingRectDraggingFill.value = '#ce0242';
    muMarkingRectDraggingStroke.value = '#ce0242';
    // Стили для тени области разметки
    muMarkingRectShadowStroke.value = '#000';
  }

  const changeTheme = (theme) => {
    themeToDefault();

    if (theme === redTheme) {
      const activeColor = '#24a319';
      const dragingColor = '#247719';

      // Стили активной области
      muMarkingRectActiveFill.value = activeColor;
      muMarkingRectActiveStroke.value = activeColor;
      // Стили области во время разметки
      muMarkingRectDraggingFill.value = dragingColor;
      muMarkingRectDraggingStroke.value = dragingColor;
    }

    if (theme === blueTheme) {
      const typeColor = "#247719"
      const activeColor = '#ff0050';
      const dragingColor = '#ce0242';

      // Обычная область
      muMarkingRectFill.value = typeColor;
      muMarkingRectStroke.value = typeColor;
      // Стили активной области
      muMarkingRectActiveFill.value = activeColor;
      muMarkingRectActiveStroke.value = activeColor;
      // Стили области во время разметки
      muMarkingRectDraggingFill.value = dragingColor;
      muMarkingRectDraggingStroke.value = dragingColor;
    }

    if (theme === whiteTheme) {
      const typeColor = "#000080"
      const activeColor = '#e60f00';
      const dragingColor = '#b30c00';

      // Обычная область
      muMarkingRectFill.value = typeColor;
      muMarkingRectStroke.value = typeColor;
      // Стили активной области
      muMarkingRectActiveFill.value = activeColor;
      muMarkingRectActiveStroke.value = activeColor;
      // Стили области во время разметки
      muMarkingRectDraggingFill.value = dragingColor;
      muMarkingRectDraggingStroke.value = dragingColor;
    }

    if (theme === blackTheme) {
      const typeColor = "#ffff00"
      const activeColor = '#00ff00';
      const dragingColor = '#1ed013';

      // Обычная область
      muMarkingRectFill.value = typeColor;
      muMarkingRectStroke.value = typeColor;
      // Стили активной области
      muMarkingRectActiveFill.value = activeColor;
      muMarkingRectActiveStroke.value = activeColor;
      // Стили области во время разметки
      muMarkingRectDraggingFill.value = dragingColor;
      muMarkingRectDraggingStroke.value = dragingColor;
      // Стили для тени области разметки
      muMarkingRectShadowStroke.value = '#fff';
    }
  }

  watch(theme, changeTheme);

  return {
    muBg,
    muBorder,
    muBoxShadow,
    muGridSize,
    muGridColor,
    muMarkingRectStrokeWidth,
    muMarkingRectFillOpacity,
    muMarkingRectStrokeOpacity,
    muMarkingRectRx,
    muMarkingRectRy,
    muMarkingRectFill,
    muMarkingRectStroke,
    muMarkingRectActiveFill,
    muMarkingRectActiveStroke,
    muMarkingRectActiveFillOpacity,
    muMarkingRectActiveStrokeOpacity,
    muMarkingRectDraggingFill,
    muMarkingRectDraggingStroke,
    muMarkingRectDraggingFillOpacity,
    muMarkingRectDraggingStrokeOpacity,
    slyleMarkup,
    slyleMarkupToCSS,
    muMarkingRectShadowStroke,
    muMarkingRectShadowStrokeOpacity,
    muMarkingRectShadowStrokeWidth,
  }
}

export default useStyles;