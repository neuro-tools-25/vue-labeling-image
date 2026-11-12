import { computed } from 'vue';

const useExamples = (isEng) => {
  const headExamples = computed(() => {
    if (isEng.value) return 'Examples';

    return 'Примеры';
  });

  const typeExample = computed(() => {
    if (isEng.value) return 'Typical example';

    return 'Типовой пример';
  });

  const staticAreasText = computed(() => {
    if (isEng.value) return 'Static areas';

    return 'Статичные области';
  });

  const methodsText = computed(() => {
    if (isEng.value) return 'Methods';

    return 'Методы';
  });

  const slotsHintText = computed(() => {
    if (isEng.value) return 'Slots (example with hints, labeling is canceled)';

    return 'Слоты (пример с подсказками, маркирование отменено)';
  });

  const slotsHintMarkedText = computed(() => {
    if (isEng.value) return 'Slots (example with hints, labeling is allowed)';

    return 'Слоты (пример с подсказками, маркирование разрешено)';
  });

  const slotsHintExText = computed(() => {
    if (isEng.value) return 'Slots (another example with hints)';

    return 'Слоты (ещё один пример с подсказками)';
  });

  const slotsHintHoveredText = computed(() => {
    if (isEng.value) return 'Slots (example with hover hints)';

    return 'Слоты (пример с подсказками при наведении)';
  });

  const stilizationClassText = computed(() => {
    if (isEng.value) return 'An example of styling labeled areas using CSS classes';

    return 'Пример стилизации маркированных областей через CSS классы';
  });

  const stilizationClassEditedText = computed(() => {
    if (isEng.value) return 'Example of styling labeled areas using CSS classes (labeled areas can be modified)';

    return 'Пример стилизации маркированных областей через CSS классы (маркированные области можно изменять)';
  });

  const stilizationAttrStyleText = computed(() => {
    if (isEng.value) return 'An example of styling labeled areas using the “style” attribute';

    return 'Пример стилизации маркированных областей через атрибут "style';
  });

  const stilizationAttrStyleEditedText = computed(() => {
    if (isEng.value) return 'An example of styling labeled areas using the “style” attribute (labeled areas can be modified)';

    return 'Пример стилизации маркированных областей через атрибут "style" (маркированные области можно изменять)';
  });

  const slotsGroupText = computed(() => {
    if (isEng.value) return 'Slots';

    return 'Слоты';
  });

  const StilLabAreasGroupText = computed(() => {
    if (isEng.value) return 'Stylization of labeled areas';

    return 'Стилизация маркированных областей';
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
    stilizationClassEditedText,
    stilizationAttrStyleText,
    stilizationAttrStyleEditedText,
    slotsGroupText,
    StilLabAreasGroupText
  }
}

export default useExamples;