import { ref } from 'vue';
import { bCoord } from '@/helpers/helpers.js';

import {
  cResizeLeft,
  cResizeRight,
  cResizeTop,
  cResizeBottom
} from './const.js';

const useRect = ({
  cRectParam,
  convToRealWidth,
  convToRealHeight
}) => {
  const isMovRect = ref(false);

  let initX = null;
  let initY = null;
  let posItemX = null;
  let posItemY = null;
  let posItemWidth = null;
  let posItemHeight = null;

  const bOffset = (posItem, curPos, initP) => (curPos >= initP)
    ? posItem + (curPos - initP)
    : posItem - (initP - curPos);

  const bSizeIfOffset = (size, curPos, initP) => (curPos >= initP)
    ? size - (curPos - initP)
    : size + (initP - curPos);

  const mUpRect = () => {
    isMovRect.value = false;

    initX = null;
    initY = null;
    posItemX = null;
    posItemY = null;
    posItemWidth = null;
    posItemHeight = null;
  }

  const mDownRect = (e, item) => {
    const { x, y } = bCoord(e);
    isMovRect.value = true;

    initX = x;
    initY = y;

    if (item?.id) {
      const {
        x,
        y,
        width,
        height
      } = item;

      posItemX = convToRealWidth(x);
      posItemY = convToRealHeight(y);
      posItemWidth = convToRealWidth(width);
      posItemHeight = convToRealHeight(height);
    }
  }

  const moveRect = (e) => {
    const { x: coordX, y: coordY } = bCoord(e);

    const x = bOffset(posItemX, coordX, initX);
    const y = bOffset(posItemY, coordY, initY);

    cRectParam({
      x,
      y
    });
  }

  const resizeRect = (e, type) => {
    if (type === cResizeLeft) {
      const { x: coordX } = bCoord(e);

      const x = bOffset(posItemX, coordX, initX);

      if (x < (posItemX + posItemWidth)) {
        const width = bSizeIfOffset(posItemWidth, coordX, initX);

        cRectParam({
          x,
          width
        });
      }
    }

    if (type === cResizeRight) {
      const { x: coordX } = bCoord(e);

      const width = bOffset(posItemWidth, coordX, initX);

      cRectParam({
        width
      });
    }

    if (type === cResizeTop) {
      const { y: coordY } = bCoord(e);

      const y = bOffset(posItemY, coordY, initY);

      if (y < (posItemY + posItemHeight)) {
        const height = bSizeIfOffset(posItemHeight, coordY, initY);

        cRectParam({
          y,
          height
        });
      }
    }

    if (type === cResizeBottom) {
      const { y: coordY } = bCoord(e);

      const height = bOffset(posItemHeight, coordY, initY);

      cRectParam({
        height
      });
    }
  }

  return {
    isMovRect,
    mUpRect,
    mDownRect,
    moveRect,
    resizeRect
  }
}

export default useRect;