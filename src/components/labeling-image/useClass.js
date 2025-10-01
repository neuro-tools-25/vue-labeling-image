import { computed } from 'vue';

const useClass = (props, {
  startMarkup,
  isMovRect,
  isLoadImg
}) => {
  const classComp = computed(() => ([`mark-up_theme_${props.theme}`, {
    "mark-up_start": startMarkup.value,
    // Работа с rect-ом
    "mark-up_rect-move": isMovRect.value,
    "mark-up_rect-no-move": !props.isDraggingArea,
    'mark-up_readonly': props.isReadonly,
    'mark-up_is-image': isLoadImg.value,
    'mark-up_no-markup': !props.isMarkup,
    // Сетка
    "mark-up_grid": props.enableGrid,
    // Размеры сетки
    "mark-up_grid-10": props.gridSize == 10,
    "mark-up_grid-15": props.gridSize == 15,
    "mark-up_grid-20": props.gridSize == 20,
    "mark-up_grid-25": props.gridSize == 25,
    "mark-up_grid-30": props.gridSize == 30,
    "mark-up_grid-35": props.gridSize == 35,
    "mark-up_grid-40": props.gridSize == 40,
    "mark-up_grid-45": props.gridSize == 45,
    "mark-up_grid-50": props.gridSize == 50,
    // Позиция картинок
    "mark-up_vertical": props.vertical,
    // Типовые разрешения для графики
    "mark-up_16-9": props.resolution === '16:9',
    "mark-up_HD": props.resolution === 'HD',
    "mark-up_10-9": props.resolution === '10:9',
    "mark-up_CIF": props.resolution === 'CIF',
    "mark-up_8-5": props.resolution === '8:5',
    "mark-up_QHD": props.resolution === 'QHD',
    "mark-up_5-6": props.resolution === '5:6',
    "mark-up_MPEG2": props.resolution === 'MPEG2',
    "mark-up_5-4": props.resolution === '5:4',
    "mark-up_SXGA": props.resolution === 'SXGA',
    "mark-up_5-3": props.resolution === '5:3',
    "mark-up_WVGA": props.resolution === 'WVGA',
    "mark-up_4-3": props.resolution === '4:3',
    "mark-up_VGA": props.resolution === 'VGA',
    "mark-up_3-1": props.resolution === '3:1',
    "mark-up_WSXGA": props.resolution === 'WSXGA',
    "mark-up_2-1": props.resolution === '2:1',
    "mark-up_2K": props.resolution === '2K',
    "mark-up_1-1": props.resolution === '1:1',
  }]));

  return classComp;
}

export default useClass;