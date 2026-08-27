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
            >странице настроек</ui-link>.
          </p>

          <p>
            Картинку я задам по умолчанию, пусть это будет "паспорт Бендера". Ещё я задам пару маркированных областей, пусть это будут "photo", "series" и "last name". Я разрешу маркировать картинку, и менять маркированные области (растягивать, переносить). Наверное для удобства имеет смысл разрешить редактировать маркированные области. По клику на кнопку "Сбросить", я буду очищать маркированные области, а саму картинку удалять я не буду.
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
            Какое-то описание.
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
        <styles-areas
          v-model:bg="muBg"
          v-model:border="muBorder"
          v-model:box-shadow="muBoxShadow"
          v-model:grid-color="muGridColor"
          v-model:marking-rect-stroke-width="muMarkingRectStrokeWidth"
          v-model:marking-rect-fill-opacity="muMarkingRectFillOpacity"
          v-model:marking-rect-stroke-opacity="muMarkingRectStrokeOpacity"
          v-model:marking-rect-rx="muMarkingRectRx"
          v-model:marking-rect-ry="muMarkingRectRy"
          v-model:marking-rect-fill="muMarkingRectFill"
          v-model:marking-rect-stroke="muMarkingRectStroke"
          v-model:marking-rectA-ative-fill="muMarkingRectActiveFill"
          v-model:marking-rect-active-stroke="muMarkingRectActiveStroke"
          v-model:marking-rect-active-fill-opacity="muMarkingRectActiveFillOpacity"
          v-model:marking-rect-active-stroke-opacity="muMarkingRectActiveStrokeOpacity"
          v-model:marking-rect-dragging-fill="muMarkingRectDraggingFill"
          v-model:marking-rect-dragging-stroke="muMarkingRectDraggingStroke"
          v-model:marking-rect-dragging-fill-opacity="muMarkingRectDraggingFillOpacity"
          v-model:marking-rect-dragging-stroke-opacity="muMarkingRectDraggingStrokeOpacity"
          v-model:marking-rect-shadow-stroke="muMarkingRectShadowStroke"
          v-model:marking-rect-shadow-stroke-opacity="muMarkingRectShadowStrokeOpacity"
          v-model:marking-rect-shadow-stroke-width="muMarkingRectShadowStrokeWidth"
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
    computed,
    ref
  } from 'vue';

  import useMainExample from '@/components/examples/useMainExample.js';
  import useStyles from './useStyles.js';

  import AnimationLay from '@/layouts/AnimationLay.vue';
  import SettingsPage from '@/layouts/SettingsPage.vue';
  //import LabelingImage from 'lib/index.es.js';
  import LabelingImage from '@/components/labeling-image/index.js';

  import CardItem from '@/components/CardItem.vue';
  import FormGroup from '@/components/FormGroup.vue';
  import FormArea from '@/components/FormArea.vue';
  import StylesAreas from '@/components/StylesAreas.vue';

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

  const {
    muBg,
    muBorder,
    muBoxShadow,
    muGridColor,
    muMarkingRectStrokeWidth,
    muMarkingRectFillOpacity,
    muMarkingRectStrokeOpacity,
    muMarkingRectRx,
    muMarkingRectRy,
    muMarkingRectFill,
    muMarkingRectStroke,
    muMarkingRectActiveFill,
    muMarkingRectActiveStroke,
    muMarkingRectActiveFillOpacity,
    muMarkingRectActiveStrokeOpacity,
    muMarkingRectDraggingFill,
    muMarkingRectDraggingStroke,
    muMarkingRectDraggingFillOpacity,
    muMarkingRectDraggingStrokeOpacity,
    muMarkingRectShadowStroke,
    muMarkingRectShadowStrokeOpacity,
    muMarkingRectShadowStrokeWidth,
    slyleMarkup,
    slyleMarkupToCSS,
  } = useStyles();

  // Интернационализация
  const prefix = 'vue labeling image';
  const headerText =[
    `Stylization ${prefix}`,
    `Стилизация ${prefix}`
  ];
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
