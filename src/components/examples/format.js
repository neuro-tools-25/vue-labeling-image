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
  const [X2, Y2, X1, Y1] = calcPoints(x, y, width, height);

  return {
    X1,
    Y1,
    X2,
    Y2,
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

export const stringBBox = ({ x, y, width, height }) => {
  return `The starting point has coordinates:
X: ${x}%
Y: ${y}%

The labeled areas have the following dimensions:
width:  ${width}%,
height: ${height}%`
};

// Размеры в пикселях для разных форматов нейронок

const bSizeCocoBBox = ({
  x,
  y,
  width,
  height
}, curWidth, curHeight) => {
  return {
    coordinates: [
      (x / 100) * curWidth.value + 'px',
      (y / 100) * curHeight.value + 'px',
      (width / 100) * curWidth.value + 'px',
      (height / 100) * curHeight.value + 'px'
    ],
    width: curWidth.value + 'px',
    height: curHeight.value + 'px'
  }
}

const bSizePascalVocBBox = ({
  x,
  y,
  width,
  height
}, curWidth, curHeight) => {
  const X1 = (x / 100) * curWidth.value;
  const Y1 = (y / 100) * curHeight.value;
  const X2 = X1 + (width / 100) * curWidth.value;
  const Y2 = Y1 + (height / 100) * curHeight.value;

  return {
    coordinates: [
      X1 + 'px',
      Y1 + 'px',
      X2 + 'px',
      Y2 + 'px'
    ],
    width: curWidth.value + 'px',
    height: curHeight.value + 'px'
  }
}

export const realCoco = (area, {
  realWidthImage,
  realHeightImage,
}) =>  bSizeCocoBBox(area, realWidthImage, realHeightImage);

export const canvasCoco = (area, {
  widthCanvas,
  heightCanvas,
}) =>  bSizeCocoBBox(area, widthCanvas, heightCanvas);

export const realPascalVoc = (area, {
  realWidthImage,
  realHeightImage,
}) =>  bSizePascalVocBBox(area, realWidthImage, realHeightImage);

export const canvasPascalVoc = (area, {
  widthCanvas,
  heightCanvas,
}) =>  bSizePascalVocBBox(area, widthCanvas, heightCanvas);