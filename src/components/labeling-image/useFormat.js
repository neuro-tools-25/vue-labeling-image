import { computed } from 'vue';

import {
  bCoco,
  bPascalVOC,
  bYOLO
} from './formats.js';

const useFormat = (props) => {
  const idFormat = computed(() => {
    const format = props.format.toLowerCase();

    const pascalVocArr = ['xyxy', 'pascalvoc', 'pascal voc'];
    if (pascalVocArr.includes(format)) return 'pascal voc';

    const yoloArr = ['cxcywh', 'yolo'];
    if (yoloArr.includes(format)) return 'yolo';

    return 'coco';
  });

  const buildBBox = (area) => {
    if (idFormat.value === 'pascal voc') return bPascalVOC(area);
    if (idFormat.value === 'yolo') return bYOLO(area);

    // COCO, coco, XYWH, xywh
    // Если ничему не соответствует то будет расчёт bbox по умолчанию, это [x, y, width, height]
    return bCoco(area);
  }

  return buildBBox;
}


export default useFormat;