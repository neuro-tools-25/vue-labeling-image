import { ref, computed } from 'vue';

import {
  formatOpt,
  bCircularBBox,
  pointsInArrayBBox,
  stringBBox
} from '@/components/examples/format.js';

const useFormat = () => {
  const formatId = ref('coco');

  const formatOptions = computed(() => {
    return [
      ...formatOpt,
      {
        id: "circularBBox",
        title: "Bounding box состоит из 4 точек (XY), построение идёт против часовой стрелке он верхней левой точки к правой верхней точки"
      },
      {
        id: "pointsInArrayBBox",
        title: "Bounding box состоит массива в котором находится начальная и конечкая точка (кординаты XY), каждая из которых находится в массиве"
      },
      {
        id: "stringBBox",
        title: "Bounding box будет представлять из себя строку"
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