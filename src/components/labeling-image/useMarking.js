import { ref } from 'vue';
import { bCoord } from '@/helpers/helpers.js';

const useMarking = (props, {
  addInAreas,
  widthMarkUp,
  heightMarkUp,
}) => {
  const calcStartCoord = (x1, x2) => (x1 > x2) ? x2 : x1;
  const fitCoord = (coord) => (coord < 0) ? 0 : coord;
  const fitSize = (coord, size) => (coord < 0) ? size + coord : size;

  const markUpArea = ref({});
  const startMarkup = ref(false);
  let initX = null;
  let initY = null;

  const marking = (e) => {
    if (startMarkup.value && (initX && initY)) {
      const { x: lastX, y: lastY } = bCoord(e, true);

      const fitsInTheArea = ({ sizeBlock, coord, size }) => {
        const sizeArea = coord + size;

        if (sizeArea > sizeBlock) return size - (sizeArea - sizeBlock);

        return size;
      }

      const x = calcStartCoord(initX, lastX);
      const y = calcStartCoord(initY, lastY);

      const width = fitsInTheArea({
        sizeBlock: widthMarkUp.value,
        coord: x,
        size: Math.abs(initX - lastX),
      });

      const height = fitsInTheArea({
        sizeBlock: heightMarkUp.value,
        coord: y,
        size: Math.abs(initY - lastY),
      });

      markUpArea.value = {
        id: Date.now(),
        x: fitCoord(x),
        y: fitCoord(y),
        width: fitSize(x, width),
        height: fitSize(y, height),
      }
    }
  }

  const mDownMarking = (e) => {
    if (props.isMarkup) {
      const { x, y } = bCoord(e, true);

      startMarkup.value = true;
      initX = x;
      initY = y;
    }
  }

  const mUpMarking = () => {
    if (props.isMarkup) {
      startMarkup.value = false;
      initX = null;
      initY = null;

      const isNormalWidth = markUpArea.value.width >= props.minWidth;
      const isNormalHeight = markUpArea.value.height >= props.minHeight;

      const isAddArea = isNormalWidth && isNormalHeight;

      if (isAddArea) {
        addInAreas(markUpArea.value, markUpArea.value.id);
      }

      markUpArea.value = {};
    }
  }

  return {
    markUpArea,
    startMarkup,
    marking,
    mDownMarking,
    mUpMarking
  }
}

export default useMarking;