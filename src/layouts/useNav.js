import { inject, computed } from 'vue';

const useNav = () => {
  const {
    isRus,
    isEng,
    query
  } = inject('lang');

  const navItem = computed(() => {
    let text = ['Документация', 'Примеры', 'Настройки'];

    if (isEng.value) text = ['Documentation', 'Examples', 'Settings'];

    return [{
      link: { name: 'main', ...query.value },
      text: text[0]
    }, {
      link: { name: 'ExamplesView', ...query.value  },
      text: text[1]
    }, {
      link: { name: 'settings', ...query.value },
      text: text[2]
    }]
  });

  return {
    isRus,
    isEng,
    navItem
  }
}

export default useNav;