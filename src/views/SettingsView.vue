<template>
  <div
    class="settings-page"
    :style="slyleMarkup"
  >
    <h1>{{ settingsText }} vue labeling image</h1>

    <card-item :is-eng="isEng">
      <template #markup>
        <div>
          <labeling-image
            :image-src="file"
            v-model="areas"
            v-model:active-id="activeId"
            :is-markup="isMarkup"
            :enable-grid="enableGrid"
            :grid-size="gridSize"
            :min-width="minWidth"
            :min-height="minHeight"
            :is-resize-area="isResizeArea"
            :is-dragging-area="isDraggingArea"
            :is-readonly="isReadonly"
            :is-shadow="isShadow"
            :resolution="resolution"
            :vertical="vertical"
            :theme="theme"
            :isTitle="isTitle"
            :keyTitle="keyTitle"
            @is-load-image="changeIsLoadImage"
          />
        </div>

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

        <view-code
          v-if="areas.length > 0"
          :code="areas"
          :is-eng="isEng"
        />

        <view-code :code="slyleMarkupToCSS">
          {{ watchStyleMarkedArea }}
        </view-code>

        <template v-if="isLoadImg">
          <h2 v-if="file === null">
            {{ notImagesForAreas }}
          </h2>

          <h2 v-if="areas.length === 0 && file !== null">
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
      </template>
      
      <template #form>
        <SettingsAreas
          v-model:file="file"
          v-model:is-markup="isMarkup"
          v-model:enable-grid="enableGrid"
          v-model:grid-size ="gridSize"
          v-model:min-width="minWidth"
          v-model:min-height="minHeight"
          v-model:is-resize-area="isResizeArea"
          v-model:is-dragging-area="isDraggingArea"
          v-model:is-readonly="isReadonly"
          v-model:is-shadow="isShadow"
          v-model:resolution="resolution"
          v-model:theme="theme"
          v-model:vertical="vertical"
          v-model:is-title="isTitle"
          v-model:key-title="keyTitle"
          :is-rus="isRus"
          :is-eng="isEng"
        />

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
  </div>
</template>

<script setup>
  import {
    inject,
    computed,
    ref
  } from 'vue';

  import useMainExample from '@/components/examples/useMainExample.js';
  import useSettingsPage from './useSettingsPage.js';
  import useStyles from './useStyles.js';

  import LabelingImage from 'lib/index.es.js';
  //import LabelingImage from '@/components/labeling-image/index.js';

  import CardItem from '@/components/CardItem.vue';
  import FormGroup from '@/components/FormGroup.vue';
  import FormArea from '@/components/FormArea.vue';
  import ViewCode from '@/components/ViewCode.vue';
  import SettingsAreas from '@/components/SettingsAreas.vue';
  import StylesAreas from '@/components/StylesAreas.vue';

  const isLoadImg = ref(false);
  const changeIsLoadImage = (e) => isLoadImg.value = e;

  const isOpenArea = ref(false);
  const changeOpenArea = () => isOpenArea.value = !isOpenArea.value;

  const { isRus, isEng } = inject('lang');

  const {
    file,
    resetFile,
    areas,
    activeId,
    changeActiveId,
    deleteArea,
    // Интернационализация
    resetText,
    notImagesForAreas,
    notAreas,
    notListAreas
  } = useMainExample(isEng);

  const {
    isMarkup,
    enableGrid,
    gridSize,
    minWidth,
    minHeight,
    isResizeArea,
    isDraggingArea,
    isReadonly,
    isShadow,
    resolution,
    theme,
    vertical,
    isTitle,
    keyTitle
  } = useSettingsPage();

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
  } = useStyles(theme);

  // Интернационализация
  const settingsText = computed(() => {
    let text='Настройки';
    if (isEng.value) text='Settings';

    return text;
  });

  const watchStyleMarkedArea = computed(() => {
    let text='Показать стили для маркированной области';
    if (isEng.value) text='Show styles for labeling areas';

    return text;
  });
</script>

<style lang="scss">
  @use '@/assets/_services' as services;

  .settings-page {
    h1,
    .h1 {
      margin-bottom: 20px;

      @media screen and (min-width: services.$tabletSmall) {
        margin-bottom: 40px;
      }
    }

    &__areas {
      display: none;

      &_active {
        display: block;
      }

      @media screen and (min-width: services.$tabletSmall) {
        display: block;
      }
    }

    &__head {
      padding-right: 25px;
      position: relative;

      .ui-arrow {
        right: 0;
        position: absolute;
        transform-origin: 50% 50%;
        transform: rotate(180deg);
      }

      &_active {
        .ui-arrow {
          transform: rotate(0deg);
        }
      }

      @media screen and (min-width: services.$tabletSmall) {
        padding-right: 0;

        .ui-arrow {
          display: none;
        }
      }
    }
  }
</style>
