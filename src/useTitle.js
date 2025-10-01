import { watch } from 'vue';
import { useRoute } from 'vue-router';

const useTitle = (lang) => {
  const route = useRoute();
  const siteName = 'Vue labeling image';

  const changeTitle = () => {
    document.title = route.meta?.title
      ? `${siteName} | ${route.meta.title[lang.value]}`
      : siteName;
  };

  watch(route, changeTitle);
  watch(lang, changeTitle, { immediate: true });
}

export default useTitle;