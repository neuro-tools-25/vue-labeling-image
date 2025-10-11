import { computed } from 'vue';

const useExamples = (isEng) => {
  const headExamples = computed(() => {
    let text='Примеры';
    if (isEng.value) text='Examples';

    return text;
  });

  const typeExample = computed(() => {
    let text='Типовой пример';
    if (isEng.value) text='Typical example';

    return text;
  });

  const staticAreasText = computed(() => {
    let text='Статичные области';
    if (isEng.value) text='Static areas';

    return text;
  });

  const methodsText = computed(() => {
    let text='Методы';
    if (isEng.value) text='Methods';

    return text;
  });

  const slotsText = computed(() => {
    let text='Слоты';
    if (isEng.value) text='Slots';

    return text;
  });

  return {
    headExamples,
    typeExample,
    staticAreasText,
    methodsText,
    slotsText,
  }
}

export default useExamples;