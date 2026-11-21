import { convСoord } from '@/components/labeling-image/formats.js';

export const formatOpt = [
  {
    id: 'pascalvoc',
    title: 'Pascal Voc'
  },
  {
    id: 'yolo',
    title: 'Yolo'
  },
  {
    id: 'coco',
    title: 'COCO'
  }
];

export const bCircularBBox = ({ x, y, width, height}) => {
  const xConv = convСoord(x);
  const yConv = convСoord(y);
  const yBottomPoint = yConv + convСoord(height);
  const xRightPoint = xConv + convСoord(width);

  return [
    {
      x: xConv,
      y: yConv
    },
    {
      x: xConv,
      y: yBottomPoint
    },
    {
      x: xRightPoint,
      y: yBottomPoint
    },
    {
      x: xRightPoint,
      y: yConv
    },
  ]
};

export const pointsInArrayBBox = ({ x, y, width, height}) => {
  const xConv = convСoord(x);
  const yConv = convСoord(y);
  const y2 = yConv + convСoord(height);
  const x2 = xConv + convСoord(width);

  return [
    [
      xConv,
      yConv
    ],
    [
      x2,
      y2
    ]
  ]
};

export const stringBBox = ({ x, y, width, height}) => {
  return `The starting point has coordinates X: ${x}%, Y: ${y}.
The width of the labeled area is ${width}%, and the height of the labeled area is ${height}%.`
};