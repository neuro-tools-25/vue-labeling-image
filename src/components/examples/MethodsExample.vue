<template>
  <card-item
    url="src/components/examples/MethodsExample.vue"
    :is-eng="isEng"
  >
    <template #markup>
      <labeling-image
        :image-src="file"
        v-model="areas"
        v-model:active-id="activeId"
        @is-load-image="changeIsLoadImage"
        @get-sizes="changeSizes"
      />

      <ui-row
        type="items"
        space-between
        class="card-mark-up-btn"
      >
        <ui-file
          v-model="file"
          :is-active="isLoadImg"
          :is-eng="isEng"
        />

        <ui-button
          type-btn="warning"
          :disabled="file === null"
          @click="resetFile"
        >
          {{ resetText }}
        </ui-button>
      </ui-row>

      <ui-row>
        <b>{{ widthImgText }}</b>
      </ui-row>

      <ui-row>
        <b>{{ heightImgText }}</b>
      </ui-row>

      <ui-row>
        <b>{{ realWidthImgText }}</b>
      </ui-row>

      <ui-row>
        <b>{{ realHeightImgText }}</b>
      </ui-row>

      <view-code
        v-if="areas.length > 0"
        :code="areas"
        :is-eng="isEng"
      />
    </template>
    
    <template #form>
      <h2 v-if="file === null">
        {{ notImagesForAreas }}
      </h2>

      <h2 v-if="areas.length === 0 && file !== null">
        {{ notAreas }}
      </h2>

      <template v-if="areas.length > 0">
        <h2 >
          {{ notListAreas }}
        </h2>

        <template
          v-for="item in areas"
          :key="item.id"
        >
          <form-group
            v-if="item.isEdit"
            v-model:x="item.x"
            v-model:y="item.y"
            v-model:width="item.width"
            v-model:height="item.height"
            v-model:name="item.name"
            v-model:is-edit="item.isEdit"
            :id="item.id"
            :active-id="activeId"
            :is-eng="isEng"
            @click="changeActiveId(item.id)"
            @delete-area="deleteArea(item.id)"
          />

          <form-area
            v-else
            v-model:is-edit="item.isEdit"
            :id="item.id"
            :active-id="activeId"
            :x="item.x"
            :y="item.y"
            :width="item.width"
            :height="item.height"
            :name="item.name"
            :is-eng="isEng"
            @click="changeActiveId(item.id)"
            @delete-area="deleteArea(item.id)"
          />
        </template>
      </template>
    </template>
  </card-item>
</template>

<script setup>
  import { ref, computed } from 'vue';
  import useMainExample from './useMainExample.js';

  import CardItem from '@/components/CardItem.vue';
  import LabelingImage from 'lib/index.es.js';
  import FormGroup from '@/components/FormGroup.vue';
  import FormArea from '@/components/FormArea.vue';
  import ViewCode from '@/components/ViewCode.vue';

  const isLoadImg = ref(false);
  const changeIsLoadImage = (e) => isLoadImg.value = e;

  const props = defineProps(['isEng']);

  const isEng = computed(() => props.isEng);

  const widthImg = ref(null);
  const heightImg = ref(null);
  const realWidthImg = ref(null);
  const realHeightImg = ref(null);

  const widthImgText = computed(() => {
    const isNotNull = widthImg.value !== null;

    let text = `Ширина картинки для маркирования - ${isNotNull ? widthImg.value + 'px' : 'не определена'}.`;

    if (isEng.value) text = `The width of images for marking is ${isNotNull ? widthImg.value + 'px' : 'not defined'}.`;

    return text;
  });

  const heightImgText = computed(() => {
    const isNotNull = heightImg.value !== null;

    let text = `Высота картинки для маркирования - ${isNotNull ? heightImg.value + 'px' : 'не определена'}.`;

    if (isEng.value) text = `The height of images for marking is ${isNotNull ? heightImg.value + 'px' : 'not defined'}.`;

    return text;
  });

  const realWidthImgText = computed(() => {
    const isNotNull = realWidthImg.value !== null;

    let text = `Реальная ширина картинкм для маркирования - ${isNotNull ? realWidthImg.value + 'px' : 'не определена'}.`;

    if (isEng.value) text = `Real width of images for marking - ${isNotNull ? realWidthImg.value + 'px' : 'not defined'}.`;

    return text;
  });

  const realHeightImgText = computed(() => {
    const isNotNull = realHeightImg.value !== null;

    let text = `Реальная высота картинкм для маркирования - ${isNotNull ? realHeightImg.value + 'px' : 'не определена'}.`;

    if (isEng.value) text = `Real height of images for marking - ${isNotNull ? realHeightImg.value + 'px' : 'not defined'}.`;

    return text;
  });

  const changeSizes = ({
    widthImage,
    heightImage,
    realWidthImage,
    realHeightImage
  }) => {
    widthImg.value = widthImage;
    heightImg.value = heightImage;
    realWidthImg.value = realWidthImage;
    realHeightImg.value = realHeightImage;
  }

  const {
    file,
    resetFile,
    areas,
    activeId,
    changeActiveId,
    deleteArea,
    // Интернациогализация
    resetText,
    notImagesForAreas,
    notAreas,
    notListAreas
  } = useMainExample(isEng);
</script>

<style lang="scss">
  
</style>
