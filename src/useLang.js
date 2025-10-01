import {
  provide,
  ref,
  computed,
  watch
} from 'vue';

import { useRoute, useRouter } from 'vue-router';

const useLang = () => {
  const rus = 'rus';
  const eng = 'eng';

  const route = useRoute();
  const router = useRouter();

  const lang = ref(eng);

  const isRus = computed(() => lang.value === rus);
  const isEng = computed(() => lang.value === eng);

  const query = computed(() => (lang.value === rus)
    ? {
      query: {
        lang: lang.value
      }
    }
    : {}
  );

  const changeLang = (lng) => lang.value = [rus, eng].includes(lng) ? lng : eng;

  const changeQueryParams = () => router.push({ ...query.value });

  watch(lang, changeQueryParams);
  watch(() => route.query.lang, changeLang);

  provide('lang', {
    isRus,
    isEng,
    changeLang,
    query
  });

  const langAttr = computed(() => {
    if (lang.value === eng) return 'en';
    if (lang.value === rus) return 'ru';

    return 'ru';
  });

  return {
    lang,
    langAttr
  };
}

export default useLang;