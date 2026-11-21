import { ref, computed } from 'vue';

import {
  formatOpt,
  bCircularBBox,
  pointsInArrayBBox,
  stringBBox
} from '@/components/examples/format.js';

const useFormat = (isEng) => {
  const formatId = ref('coco');

  const circularBBoxTitle = computed(() => {
    if (isEng.value) return "The bounding box consists of 4 points (XY), it is constructed counterclockwise from the top-left point to the top-right point";

    return "Bounding box состоит из 4 точек (XY), построение идёт против часовой стрелке от верхней левой точки к правой верхней точки";
  });

  const pointsInArrayBBoxTitle = computed(() => {
    if (isEng.value) return "The bounding box consists of an array containing the starting and ending points (XY coordinates), each of which is itself an array";

    return "Bounding box состоит массива в котором находится начальная и конечная точка (координаты XY), каждая из которых находится в массиве";
  });

  const stringBBoxTitle = computed(() => {
    if (isEng.value) return "The bounding box will be a string";

    return "Bounding box будет представлять из себя строку";
  });

  const formatOptions = computed(() => {
    return [
      ...formatOpt,
      {
        id: "circularBBox",
        title: circularBBoxTitle
      },
      {
        id: "pointsInArrayBBox",
        title: pointsInArrayBBoxTitle
      },
      {
        id: "stringBBox",
        title: stringBBoxTitle
      }
    ]
  });

  const formatIdComp = computed(() => {
    if (formatId.value === 'circularBBox') return bCircularBBox;
    if (formatId.value === 'pointsInArrayBBox') return pointsInArrayBBox;
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