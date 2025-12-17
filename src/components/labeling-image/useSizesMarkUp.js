import {
  ref,
  computed,
  onBeforeUnmount,
  useTemplateRef,
  watch
} from 'vue';

const useSizesMarkUp = (props, {
  cIsLoadImage,
  getSizes
}) => {
  const imgRef = useTemplateRef('img');

  const widthMarkUp = ref(null);
  const heightMarkUp = ref(null);

  const realWidthImg = ref(null);
  const realHeightImg = ref(null);

  const isLoadImg = ref(false);

  const resetParams = () => {
    isLoadImg.value = false;

    widthMarkUp.value = null;
    heightMarkUp.value = null;
    realWidthImg.value = null;
    realHeightImg.value = null;
  }

  const imgSrc = computed(() => {
    const isFile = props.imageSrc && typeof props.imageSrc === 'object';

    if (isFile) {
      const blob = new Blob(props.imageSrc, { type: 'image' });

      return URL.createObjectURL(blob);
    }

    if (props.imageSrc && typeof props.imageSrc === 'string') return props.imageSrc;

    return null;
  });

  const caclSizeMarkUp = () => {
    if (imgSrc.value) {
      const heightImg = imgRef.value.offsetHeight;

      widthMarkUp.value = imgRef.value.offsetWidth;
      heightMarkUp.value = heightImg;

      realWidthImg.value = imgRef.value.naturalWidth;
      realHeightImg.value = imgRef.value.naturalHeight;

      isLoadImg.value = heightImg > 0;
    }

    if (!imgSrc.value) resetParams();
  }

  let resizeObserver;

  const resetWatchImageSizes = () => {
    if (resizeObserver) resizeObserver.disconnect();
  }

  const watchSizeImage = (image) => {
    if (!image) resetWatchImageSizes();

    if (image) {
      resetWatchImageSizes();

      resizeObserver = new ResizeObserver(caclSizeMarkUp);
      resizeObserver.observe(image);
    }
  };

  const getImageDimensions = (file) => {
    if (file) {
      const img = new Image();
      img.src = file;

      img.onload = caclSizeMarkUp;
      img.onerror = resetParams;
    }

    if (!file) resetParams();
  }

  const convToPercent = (param, mainSize) => ((param / mainSize) * 100);
  const convToRealVal = (param, mainSize) => ((param * mainSize.value) / 100);

  const convToRealWidth = (param) => convToRealVal(param, widthMarkUp);
  const convToRealHeight = (param) => convToRealVal(param, heightMarkUp)

  const minWidth = computed(() => convToPercent(props.minWidth, widthMarkUp.value));
  const minHeight = computed(() => convToPercent(props.minHeight, heightMarkUp.value));

  const changeSizes = () => {
    getSizes({
      widthImage: widthMarkUp.value,
      heightImage: heightMarkUp.value,
      realWidthImage: realWidthImg.value,
      realHeightImage: realHeightImg.value
    })
  };

  watch(imgSrc, getImageDimensions, { immediate: true });
  watch(isLoadImg, cIsLoadImage);
  watch(imgRef, watchSizeImage);

  watch([
    widthMarkUp,
    heightMarkUp,
    realWidthImg,
    realHeightImg
  ],
    changeSizes
  );

  onBeforeUnmount(resetWatchImageSizes);

  return {
    widthMarkUp,
    heightMarkUp,
    convToPercent,
    convToRealWidth,
    convToRealHeight,
    minWidth,
    minHeight,
    imgSrc,
    isLoadImg
  }
}

export default useSizesMarkUp;