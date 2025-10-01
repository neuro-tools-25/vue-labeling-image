import { ref } from 'vue';

import {
  defaultTheme,
  redTheme,
  blueTheme,
  whiteTheme,
  blackTheme,
} from './constTheme.js';

const useSettingsPage = () => {
  function* bOptions(items) {
    for (let item of items) {
      yield {
        id: item,
        title: item
      }
    }
  }

  function* bSizeSizeOptions(count = 10) {
    const items = [];

    for (let i = 0; i < count; i++) items.push(i*5 + 5);

    yield* bOptions(items);
  };

  const resolutions = [
    '16:9',
    'HD',
    '10:9',
    'CIF',
    '8:5',
    'QHD',
    '5:6',
    'MPEG2',
    '5:4',
    'SXGA',
    '5:3',
    'WVGA',
    '4:3',
    'VGA',
    '3:1',
    'WSXGA',
    '2:1',
    '2K',
    '1:1'
  ];

  const themes = [
    defaultTheme,
    redTheme,
    blueTheme,
    whiteTheme,
    blackTheme,
  ];

  const isMarkup = ref(true);
  const enableGrid = ref(false);
  const gridSize = ref(10);
  const gridSizeOptions = ref([...bSizeSizeOptions(10)]);
  const minWidth = ref(10);
  const minHeight = ref(10);
  const isResizeArea = ref(true);
  const isDraggingArea = ref(true);
  const isReadonly = ref(false);
  const isShadow = ref(false);
  const resolution = ref('HD');
  const theme = ref('default');
  const resolutionOptions = ref([...bOptions(resolutions)]);
  const vertical = ref(false);
  const themeOptions = ref([...bOptions(themes)]);
  const isTitle = ref(true);
  const keyTitle = ref('title');

  return {
    isMarkup,
    enableGrid,
    gridSize,
    gridSizeOptions,
    minWidth,
    minHeight,
    isResizeArea,
    isDraggingArea,
    isReadonly,
    isShadow,
    resolution,
    theme,
    themeOptions,
    resolutionOptions,
    vertical,
    isTitle,
    keyTitle
  }
}

export default useSettingsPage;