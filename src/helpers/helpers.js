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

export const copyTextToClipboard = async (text) => {
  let bText = text;

  if (text !== null && typeof text === 'object') bText = JSON.stringify(text, null, 2);

  if (navigator?.clipboard?.writeText) {
    try {
      await navigator.clipboard.writeText(bText);
    } catch (err) {
      console.error('Ошибка при копировании в буфер обмена: ', err);
    }
  }

  if (!navigator.clipboard) {
    const el = document.createElement('textarea');
    el.value = bText;
    el.setAttribute('readonly', '');
    el.style.position = 'absolute';
    el.style.left = '-9999px';
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
  }
}