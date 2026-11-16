const convСoord = (x) => Number(x) / 100;

export const bCoco = ({ x, y, width, height }) => [
  convСoord(x),
  convСoord(y),
  convСoord(width),
  convСoord(height),
];

export const bPascalVOC = ({ x, y, width, height }) => [
  convСoord(x),
  convСoord(y),
  convСoord(x) + convСoord(width),
  convСoord(y) + convСoord(height),
];

export const bYOLO = ({ x, y, width, height }) => [
  convСoord(x) + (convСoord(width) / 2),
  convСoord(y) + (convСoord(height) / 2),
  convСoord(width),
  convСoord(height),
];