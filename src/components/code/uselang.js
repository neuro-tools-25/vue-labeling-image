import { computed } from 'vue';

const useLang = (props) => {
  const codeParam = computed(() => {
    if (!props.isEng) {
      return {
        title: 'Скопировать код в буфер обмена',
        successfulText: 'Код скопирован в буфер обмена',
        errorText: 'Произошла ошибка во время копирования кода в буфер обмена'
      }
    }

    return {};
  });

  return codeParam;
};

export default useLang;