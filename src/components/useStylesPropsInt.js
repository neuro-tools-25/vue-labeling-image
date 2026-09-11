import { computed } from 'vue';

const useStylesPropsInt = (isEng) => {
  const headerText = computed(() => {
    let text='Входные параметры (props) для стилизации';
    if (isEng.value) text='Input parameters (props) for styling';

    return text;
  });

  const stylesMarkUp = computed(() => {
    let text='Входные параметры для стилизации области в момент маркировки данных на картинке';
    if (isEng.value) text='Input parameters for stylizing the area at the time of labeling the data in the image';

    return text;
  });

  const stylesActiveArea = computed(() => {
    let text='Входные параметры для стилизации активной маркированной области';
    if (isEng.value) text='Input parameters for styling the active labeled area';

    return text;
  });

  const commonStyles = computed(() => {
    let text='Общие входные параметры для стилизации маркированных областей';
    if (isEng.value) text='Common input parameters for styling labeled areas';

    return text;
  });

  const shadowStyles = computed(() => {
    let text='Входные параметры для стилизации тени';
    if (isEng.value) text='Input parameters for shadow styling';

    return text;
  });

  const stylesForGrid = computed(() => {
    let text='Входные параметры для стилизации сетки';
    if (isEng.value) text='Input parameters for grid styling';

    return text;
  });

  const watchBgText = computed(() => {
    let text='Посмотреть background';
    if (isEng.value) text='View the background';

    return text;
  });

  return {
    headerText,
    stylesMarkUp,
    stylesActiveArea,
    commonStyles,
    shadowStyles,
    stylesForGrid,
    watchBgText
  }
}

export default useStylesPropsInt;