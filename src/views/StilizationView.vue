<template>
  <SettingsPage class="stilization-page">
    <animation-lay is-page-nav>
      <div
        v-if="isRus"
        class="stilization-page-top"
      >
        <h1>{{ headerText[1] }}</h1>

        <ui-full-page>
          <p>
            На данной странице будут описаны входные параметры (props) для стилизации моего компонента. Для описания входных параметров для стилизации я решил сделать отдельную страницу, для того, чтобы они не мешались на <ui-link
              type="site"
              href="settings"
              title="Страница настроек"
              :query="query"
            >странице настроек</ui-link>, на данной странице при смене входного параметра "theme" будут меняться и стили для маркированных областей. Я бы рекомендовал вам задать для входного параметра "theme" какое-нибудь значение, к примеру "castomTheme" (theme="castomTheme"), в таком случае вам будет нужно прописать CSS-переменные для класса "mark-up_theme_castomTheme". На <ui-link
              type="site"
              href="settings"
              title="Страница настроек"
              :query="query"
            >странице настроек</ui-link> это сделать проще всего. На мой взгляд стилизовать компоненты стоит через CSS-переменные, а не через входные параметры. Но очень многие frontend-разработчики к сожалению со CSS-стилями работать не умеют, поэтому я предусмотрел стилизацию через входные параметры.
          </p>

          <p>
            Для наглядности я задам картинку по умолчанию, пусть это будет "паспорт Бендера". Ещё я задам пару маркированных областей, пусть это будут "photo", "series" и "last name". Я разрешу маркировать картинку, и менять маркированные области (растягивать, переносить). Наверное для удобства имеет смысл разрешить редактировать маркированные области. По клику на кнопку "Сбросить", я буду очищать маркированные области, а саму картинку удалять не буду.
          </p>
        </ui-full-page>
      </div>

      <div
        v-if="isEng"
        class="stilization-page-top"
      >
        <h1>{{ headerText[0] }}</h1>

        <ui-full-page>
          <p>
            This page will describe the input parameters (props) for styling my component. To describe the input parameters for styling, I decided to create a separate page so that they don’t get in the way on the <ui-link
              type="site"
              href="settings"
              title="Settings page"
              :query="query"
            >settings page</ui-link>, on this page, when the input parameter “theme” is changed, the styles for the marked areas will also change. I would recommend that you set some value for the “theme” input parameter, for example, “customTheme” (theme="customTheme"). In this case, you will need to define CSS variables for the “mark-up_theme_customTheme” class. This is easiest to do on the <ui-link
              type="site"
              href="settings"
              title="Settings page"
              :query="query"
            >settings page</ui-link>. In my opinion, it’s better to style components using CSS variables rather than input parameters. But unfortunately, many frontend developers don’t know how to work with CSS styles, so I’ve provided for styling via input parameters.
          </p>

          <p>
            For clarity, I’ll set a default image — let it be “Bender’s passport”. I’ll also define a couple of marked areas — let them be “photo”, “series” and “last name”. I will allow you to mark the image and change the marked areas (stretch, move). Probably, for convenience, it makes sense to allow editing of the marked areas. By clicking the “Reset” button, I will clear the marked areas, but I will not delete the image itself.
          </p>
        </ui-full-page>
      </div>
    </animation-lay>

    <card-item :is-eng="isEng">
      <template #markup>
        <div>
          <labeling-image
            :image-src="imageStud"
            v-model="areas"
            v-model:active-id="activeId"
            :bg="bg"
            :border="border"
            :boxShadow="boxShadow"
            :gridSize="gridSize"
            :gridColor="gridColor"
            :rectStrokeWidth="rectStrokeWidth"
            :rectFillOpacity="rectFillOpacity"
            :rectStrokeOpacity="rectStrokeOpacity"
            :rectRx="rectRx"
            :rectRy="rectRy"
            :rectFill="rectFill"
            :rectStroke="rectStroke"
            :activeRectFill="activeRectFill"
            :activeRectStroke="activeRectStroke"
            :activeRectFillOpacity="activeRectFillOpacity"
            :activeRectStrokeOpacity="activeRectStrokeOpacity"
            :labelingRectFill="labelingRectFill"
            :labelingRectStroke="labelingRectStroke"
            :labelingRectFillOpacity="labelingRectFillOpacity"
            :labelingRectStrokeOpacity="labelingRectStrokeOpacity"
            :shadowRectStroke="shadowRectStroke"
            :shadowRectStrokeOpacity="shadowRectStrokeOpacity"
            :shadowRectStrokeWidth="shadowRectStrokeWidth"
          />
        </div>

        <ui-row
          type="items"
          space-between
          class="card-mark-up-btn"
        >
          <ui-button
            type-btn="warning"
            :disabled="areas.length === 0"
            @click="resetAreas"
          >
            {{ resetText }}
          </ui-button>
        </ui-row>

        <h2 v-if="areas.length === 0">
          {{ notAreas }}
        </h2>

        <template v-if="areas.length > 0">
          <h2
            class="settings-page__head"
            :class="{ 'settings-page__head_active': isOpenArea }"
            @click="changeOpenArea"
          >
            <ui-arrow />

            {{ notListAreas }}
          </h2>

          <div
            class="settings-page__areas"
            :class="{ 'settings-page__areas_active': isOpenArea }"
          >
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
          </div>
        </template>
      </template>

      <template #form>
        <styles-props
          v-model:bg="bg"
          v-model:border="border"
          v-model:box-shadow="boxShadow"
          v-model:grid-size="gridSize"
          v-model:grid-color="gridColor"
          v-model:rect-stroke-width="rectStrokeWidth"
          v-model:rect-fill-opacity="rectFillOpacity"
          v-model:rect-stroke-opacity="rectStrokeOpacity"
          v-model:rect-rx="rectRx"
          v-model:rect-ry="rectRy"
          v-model:rect-fill="rectFill"
          v-model:rect-stroke="rectStroke"
          v-model:active-rect-fill="activeRectFill"
          v-model:active-rect-stroke="activeRectStroke"
          v-model:active-rect-fill-opacity="activeRectFillOpacity"
          v-model:active-rect-stroke-opacity="activeRectStrokeOpacity"
          v-model:labeling-rect-fill="labelingRectFill"
          v-model:labeling-rect-stroke="labelingRectStroke"
          v-model:labeling-rect-fill-opacity="labelingRectFillOpacity"
          v-model:labeling-rect-stroke-opacity="labelingRectStrokeOpacity"
          v-model:shadow-rect-stroke="shadowRectStroke"
          v-model:shadow-rect-stroke-opacity="shadowRectStrokeOpacity"
          v-model:shadow-rect-stroke-width="shadowRectStrokeWidth"
          :is-rus="isRus"
          :is-eng="isEng"
        />
      </template>
    </card-item>
  </SettingsPage>
</template>

<script setup>
  import {
    inject,
    ref
  } from 'vue';

  import useMainExample from '@/components/examples/useMainExample.js';
  import usePropsStyles from './usePropsStyles.js';

  import AnimationLay from '@/layouts/AnimationLay.vue';
  import SettingsPage from '@/layouts/SettingsPage.vue';
  //import LabelingImage from 'lib/index.es.js';
  import LabelingImage from '@/components/labeling-image/index.js';

  import CardItem from '@/components/CardItem.vue';
  import FormGroup from '@/components/FormGroup.vue';
  import FormArea from '@/components/FormArea.vue';
  import StylesProps from '@/components//StylesProps.vue';

  import { imageStud } from '@/assets/image-stud.js';

  const isOpenArea = ref(false);
  const changeOpenArea = () => isOpenArea.value = !isOpenArea.value;

  const { isRus, isEng, query} = inject('lang');

  const {
    // Интернационализация
    resetText,
    notAreas,
    notListAreas
  } = useMainExample(isEng);

  const areas = ref([
    {
      id: 1787759117974,
      x: 4.227642276422764,
      y: 24.277456647398843,
      width: 27.97947487671597,
      height: 59.53757225433526,
      name: 'Photo'
    },
    {
      id: 1787759135510,
      x: 92.62295081967213,
      y: 21.865889212827994,
      width: 4.426229508196721,
      height: 59.7667638483965,
      name: 'Series'
    },
    {
      id: 1787759122422,
      x: 54.470211915233904,
      y: 10.98013111107366,
      width: 19.66813274690124,
      height: 7.785773268845109,
      name: 'Last name'
    },
  ]);
  const activeId = ref(1787759117974);

  const changeActiveId = (id) => activeId.value = id;
  const resetAreas = () => areas.value = [];

  const deleteArea = (id) => {
    areas.value = areas.value.filter((el) => el.id !== id);

    if (activeId.value === id) changeActiveId(areas.value[0]?.id);
  }

  // Интернационализация
  const prefix = 'vue labeling image';
  const headerText =[
    `Stylization ${prefix}`,
    `Стилизация ${prefix}`
  ];

  const {
    bg,
    border,
    boxShadow,
    gridSize,
    gridColor,
    rectStrokeWidth,
    rectFillOpacity,
    rectStrokeOpacity,
    rectRx,
    rectRy,
    rectFill,
    rectStroke,
    activeRectFill,
    activeRectStroke,
    activeRectFillOpacity,
    activeRectStrokeOpacity,
    labelingRectFill,
    labelingRectStroke,
    labelingRectFillOpacity,
    labelingRectStrokeOpacity,
    shadowRectStroke,
    shadowRectStrokeOpacity,
    shadowRectStrokeWidth
  } = usePropsStyles();
</script>

<style lang="scss">
  .stilization-page {
    .card-mark-up-btn {
      .btn {
        margin-left: auto;
      }
    }
  }
</style>
