import { computed } from 'vue';

const useSettingsInt = (isEng) => {
  const headerText = computed(() => {
    let text='Настройки';
    if (isEng.value) text='Settings';

    return text;
  });

  const settingsGrid = computed(() => {
    let text='Настройки сетки';
    if (isEng.value) text='Grid Settings';

    return text;
  });

  const settingsMinimalSizes = computed(() => {
    let text='Настройки минимальных размеров для маркированных областей';
    if (isEng.value) text='Minimum size settings for labeled areas';

    return text;
  });

  const settingsResizes = computed(() => {
    let text='Настройки растягивания/перемещения маркированных областей';
    if (isEng.value) text='Settings for stretching/moving marked areas';

    return text;
  });

  const settingsShadow = computed(() => {
    let text='Включение/отключение тени для маркированных областей';
    if (isEng.value) text='Enabling/disabling shadows for marked areas';

    return text;
  });

  const settingsResolutions = computed(() => {
    let text='Настройки разрешения для блока маркировки документов';
    if (isEng.value) text='Resolution settings for the document labeling unit';

    return text;
  });

  const themeText = computed(() => {
    let text='Выбор темы';
    if (isEng.value) text='Choosing a theme';

    return text;
  });

  const titleText = computed(() => {
    let text='Настройки подсказок для маркированных областей';
    if (isEng.value) text='Hint settings for labeled areas';

    return text;
  });

  return {
    headerText,
    settingsGrid,
    settingsResizes,
    settingsMinimalSizes,
    settingsShadow,
    settingsResolutions,
    themeText,
    titleText
  }
}

export default useSettingsInt;