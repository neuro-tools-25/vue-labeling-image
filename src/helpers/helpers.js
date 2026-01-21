export const bCoord= (e, marking = false) => {
  let x = e.offsetX;
  let y = e.offsetY;

  if (e.targetTouches) {
    const { left, top } = e.target.getBoundingClientRect();
    const { pageX, pageY } = e.targetTouches[0];

    x = (!marking) ? pageX : pageX - left;
    y = (!marking) ? pageY : pageY - top; 
  }

  return {
    x,
    y,
  }
}