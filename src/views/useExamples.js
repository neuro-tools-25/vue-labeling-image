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

  const slotsHintText = computed(() => {
    let text='Слоты (пример с подсказками, маркирование отменено)';
    if (isEng.value) text='Slots (example with hints, labeling is canceled)';

    return text;
  });

  const slotsHintMarkedText = computed(() => {
    let text='Слоты (пример с подсказками, маркирование разрешено)';
    if (isEng.value) text='Slots (example with hints, labeling is allowed)';

    return text;
  });

  const slotsHintExText = computed(() => {
    let text='Слоты (ещё один пример с подсказками)';
    if (isEng.value) text='Slots (another example with hints)';

    return text;
  });

  const slotsHintHoveredText = computed(() => {
    let text='Слоты (пример с подсказками при наведении)';
    if (isEng.value) text='Slots (example with hover hints)';

    return text;
  });

  const stilizationClassText = computed(() => {
    let text='Пример стилизации маркированных областей через CSS классы';
    if (isEng.value) text='An example of styling labeled areas using CSS classes';

    return text;
  });

  const stilizationClassEditedText = computed(() => {
    let text='Пример стилизации маркированных областей через CSS классы (маркированные области можно изменять)';
    if (isEng.value) text='Example of styling labeled areas using CSS classes (labeled areas can be modified)';

    return text;
  });

  return {
    headExamples,
    typeExample,
    staticAreasText,
    methodsText,
    slotsHintText,
    slotsHintMarkedText,
    slotsHintExText,
    slotsHintHoveredText,
    stilizationClassText,
    stilizationClassEditedText
  }
}

export default useExamples;