import { computed } from 'vue';

const useStylesInt = (isEng) => {
  const headerText = computed(() => {
    let text='Стили для блока маркировки изображения';
    if (isEng.value) text='Styles for the image label block';

    return text;
  });

  const stylesMarkUp = computed(() => {
    let text='Стили для области в момент маркировки данных на картинке';
    if (isEng.value) text='Styles for the area at the time of labeling the data in the image';

    return text;
  });

  const stylesActiveArea = computed(() => {
    let text='Стили для активной маркированной области';
    if (isEng.value) text='Styles for the active bulleted area';

    return text;
  });

  const commonStyles = computed(() => {
    let text='Общие стили для маркированных областей';
    if (isEng.value) text='General styles for labeled areas';

    return text;
  });

  const shadowStyles = computed(() => {
    let text='Стили для тени';
    if (isEng.value) text='Styles for shadow';

    return text;
  });

  const stylesForGrid = computed(() => {
    let text='Стили для сетки';
    if (isEng.value) text='Styles for the grid';

    return text;
  });

  return {
    headerText,
    stylesMarkUp,
    stylesActiveArea,
    commonStyles,
    shadowStyles,
    stylesForGrid
  }
}

export default useStylesInt;