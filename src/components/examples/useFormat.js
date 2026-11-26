import { ref, computed } from 'vue';

import {
  formatOpt,
  bCircularBBox,
  pointsInArrayBBox,
  stringBBox,
  pointsInObject,
  realCoco,
  canvasCoco,
  realPascalVoc,
  canvasPascalVoc
} from '@/components/examples/format.js';

const useFormat = (isEng) => {
  const formatId = ref('coco');

  const circularTitle = computed(() => {
    if (isEng.value) return "The bounding box consists of 4 points (XY), it is constructed counterclockwise from the top-left point to the top-right point";

    return "Bounding box состоит из 4 точек (XY), построение идёт против часовой стрелке от верхней левой точки к правой верхней точки";
  });

  const pointsInArrayTitle = computed(() => {
    if (isEng.value) return "The bounding box consists of an array containing the starting and ending points (XY coordinates), each of which is itself an array";

    return "Bounding box состоит массива в котором находится начальная и конечная точка (координаты XY), каждая из которых находится в массиве";
  });

  const pointsInObjectTitle = computed(() => {
    if (isEng.value) return "The bounding box will be represented as an object (X1, Y1, X2, Y2)";

    return "Bounding box будет представлять из себя объект (X1, Y1, X2, Y2)";
  });

  const stringTitle = computed(() => {
    if (isEng.value) return "The bounding box will be a string";

    return "Bounding box будет представлять из себя строку";
  });

  const realCocoTitle = computed(() => {
    if (isEng.value) return "The bounding box contains the actual dimensions of the image (width, height) and coordinates in COCO format (the coordinates are represented in pixels, and the calculation is based on the actual size of the image)";

    return "Bounding box содержит реальные размеры картинки (width, height) и координаты в формате COCO (координаты представлены в пикселях, расчёт идёт от реального размера картики)";
  });

  const canvasCocoTitle = computed(() => {
    if (isEng.value) return "The bounding box contains the dimensions of the block in which the image is located (width, height) and the coordinates in COCO format (the coordinates are represented in pixels, the calculation is based on the block in which the image is located)";

    return "Bounding box содержит размеры блока в котором лежит картинка (width, height) и координаты в формате COCO (координаты представлены в пикселях, расчёт идёт от блока в котором лежит картинка)";
  });

  const realPascalVocTitle = computed(() => {
    if (isEng.value) return "The bounding box contains the actual dimensions of the image (width, height) and coordinates in Pascal VOC format (the coordinates are represented in pixels, and the calculation is based on the actual size of the image)";

    return "Bounding box содержит реальные размеры картинки (width, height) и координаты в формате Pascal VOC (координаты представлены в пикселях, расчёт идёт от реального размера картики)";
  });

  const canvasPascalVocTitle = computed(() => {
    if (isEng.value) return "The bounding box contains the dimensions of the block in which the image is located (width, height) and the coordinates in Pascal VOC format (the coordinates are represented in pixels, the calculation is based on the block in which the image is located)";

    return "Bounding box содержит размеры блока в котором лежит картинка (width, height) и координаты в формате Pascal VOC (координаты представлены в пикселях, расчёт идёт от блока в котором лежит картинка)";
  });

  const defaultParamTitle = computed(() => {
    if (isEng.value) return "String parameters supported by default";

    return "Строковые параметры, поддерживаемые по умолчанию";
  });

  const myParamTitle = computed(() => {
    if (isEng.value) return "Examples of functions for constructing various Bounding Box";

    return "Примеры функций для построения различных ограничивающих рамок (Bounding Box)";
  });

  const formatOptions = computed(() => {
    return [
      {
        type: "group",
        label: defaultParamTitle.value,
        elenents: formatOpt
      },
      {
        type: "group",
        label: myParamTitle.value,
        elenents: [
          {
            id: "circularBBox",
            title: circularTitle
          },
          {
            id: "pointsInArrayBBox",
            title: pointsInArrayTitle
          },
          {
            id: "pointsInObjectBBox",
            title: pointsInObjectTitle
          },
          {
            id: "stringBBox",
            title: stringTitle
          },
          {
            id: "realCocoFormat",
            title: realCocoTitle
          },
          {
            id: "canvasCocoFormat",
            title: canvasCocoTitle
          },
          {
            id: "realPascalVocFormat",
            title: realPascalVocTitle
          },
          {
            id: "canvasPascalVocFormat",
            title: canvasPascalVocTitle
          }
        ]
      }
    ]
  });

  const formatIdComp = computed(() => {
    if (formatId.value === 'circularBBox') return bCircularBBox;
    if (formatId.value === 'pointsInArrayBBox') return pointsInArrayBBox;
    if (formatId.value === 'pointsInObjectBBox') return pointsInObject;
    // Размеры в пикселях для разных форматов маркирования изображения
    if (formatId.value === 'realCocoFormat') return realCoco;
    if (formatId.value === 'canvasCocoFormat') return canvasCoco;
    if (formatId.value === 'realPascalVocFormat') return realPascalVoc;
    if (formatId.value === 'canvasPascalVocFormat') return canvasPascalVoc;
    // Тут я возвращаю строку вместо масива, или объекта
    if (formatId.value === 'stringBBox') return stringBBox;

    return formatId.value;
  });

  return {
    formatId,
    formatOptions,
    formatIdComp
  }
}

export default useFormat;