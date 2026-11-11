import { computed } from 'vue';

const convСoord = (x) => Number(x) / 100;

const bCoco = ({ x, y, width, height }) => [
  convСoord(x),
  convСoord(y),
  convСoord(width),
  convСoord(height),
];

const bPascalVOC = ({ x, y, width, height }) => [
  convСoord(x),
  convСoord(y),
  convСoord(x) + convСoord(width),
  convСoord(y) + convСoord(height),
];

const bYOLO = ({ x, y, width, height }) => [
  convСoord(x) + (convСoord(width) / 2),
  convСoord(y) + (convСoord(height) / 2),
  convСoord(width),
  convСoord(height),
];

const useFormat = (props) => {
  const idFormat = computed(() => {
    const format = props.format.toLowerCase();

    if (format === 'xyxy' || format === 'pascalvoc' || format === 'pascal voc') return 'pascal voc';
    if (format === 'cxcywh' || format === 'yolo') return 'yolo';

    return 'coco';
  });

  const format = (area) => {
    if (idFormat.value === 'pascal voc') return bPascalVOC(area);
    if (idFormat.value === 'yolo') return bYOLO(area);

    // COCO, coco, XYWH, xywh
    // Если ничему не соответствует то будет расчёт bbox по умолчанию это [x, y, width, height]
    return bCoco(area);
  }

  return format;
}


export default useFormat;