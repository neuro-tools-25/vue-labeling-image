import { ref, computed } from 'vue';

const useMainExample = (isEng) => {
  const file = ref(null);

  const resetFile = () => {
    file.value = null;
  };

  const areas = ref([]);
  const activeId = ref(null);

  const changeActiveId = (id) => activeId.value = id;

  const deleteArea = (id) => {
    areas.value = areas.value.filter((el) => el.id !== id);

    if (activeId.value === id) changeActiveId(areas.value[0]?.id);
  }

  // Интернационализация
  const resetText = computed(() => {
    let text='Сбросить';
    if (isEng.value) text='Reset';

    return text;
  });

  const notImagesForAreas = computed(() => {
    let text='Не выбрано изображение для маркировки';
    if (isEng.value) text='No image selected for labeling';

    return text;
  });

  const notAreas = computed(() => {
    let text='Нет маркированных областей';
    if (isEng.value) text='No labeling areas';

    return text;
  });

  const notListAreas = computed(() => {
    let text='Список маркированных областей:';
    if (isEng.value) text='List of labeling areas:';

    return text;
  });

  return {
    file,
    resetFile,
    areas,
    activeId,
    changeActiveId,
    deleteArea,
    // Интернационализация
    resetText,
    notImagesForAreas,
    notAreas,
    notListAreas
  }
}

export default useMainExample;