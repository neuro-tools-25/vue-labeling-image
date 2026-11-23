import { convСoord } from '@/components/labeling-image/formats.js';

export const formatOpt = [
  {
    id: 'coco',
    title: 'COCO'
  },
  {
    id: 'pascalvoc',
    title: 'Pascal Voc'
  },
  {
    id: 'yolo',
    title: 'Yolo'
  },
];

const calcFirstPoints = (x, y) => [convСoord(x), convСoord(y)];

const calcPoints = (x, y, width, height) => {
  const [x1, y1] = calcFirstPoints(x, y);
  const x2 = x1 + convСoord(width);
  const y2 = y1 + convСoord(height);

  return [x2, y2, x1, y1];
}

export const bCircularBBox = ({ x, y, width, height }) => {
  const [xRightPoint, yBottomPoint, x1, y1] = calcPoints(x, y, width, height);

  return [
    {
      x: x1,
      y: y1
    },
    {
      x: x1,
      y: yBottomPoint
    },
    {
      x: xRightPoint,
      y: yBottomPoint
    },
    {
      x: xRightPoint,
      y: y1
    },
  ]
};

export const pointsInObject = ({ x, y, width, height }) => {
  const [x2, y2, x1, y1] = calcPoints(x, y, width, height);

  return {
    x1,
    y1,
    x2,
    y2,
  }
};

export const pointsInArrayBBox = ({ x, y, width, height }) => {
  const [x2, y2, x1, y1] = calcPoints(x, y, width, height);

  return [
    [
      x1,
      y1
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