<template>
  <ui-row class="styles-props-areas">
    <open-header
      :is-active="isMain"
      type-element="h2"
      @click="isMain = !isMain"
    >
      {{ headerText }}
    </open-header>

    <template v-if="isMain">
      <div class="styles-props-areas__group">
        <ui-row>
          <ui-label>
            <template v-if="props.isRus">
              <b>bg</b> - входной параметр отвечающий за background блока маркирования картинок. В данный входной параметр можно задать как путь к картинке, так и любое допустимое значение цвета в CSS. Для того, чтобы увидеть на что влияет данный входной параметр вам стоит скрыть "паспорт Бендера", для этого нажмите на чекбокс ниже и задайте нужное вам значение. Для примера я могу вам посоветовать ввести следующие значения: #000, red, green, rgb(0, 255, 0), rgba(0, 255, 255, .4), hsla(240, 100%, 50%, 0.5).
            </template>

            <template v-if="props.isEng">
              <b>bg</b> - is an input parameter responsible for the background of the image marking block. This input parameter can be set to either a path to an image or any valid CSS color value. To see what this input parameter affects, you need to hide the “Bender’s passport”; to do this, click the checkbox below and set the value you need. For example, I can advise you to enter #000, red, green, rgb(0, 255, 0), rgba(0, 255, 255, .4), hsla(240, 100%, 50%, 0.5).
            </template>
          </ui-label>

          <ui-checkbox v-model="isHideBg">
            {{ watchBgText }}
          </ui-checkbox>
          <ui-input v-model="bg" />
        </ui-row>

        <ui-row>
          <ui-label>
            <template v-if="props.isRus">
              <b>border</b> - входной параметр отвечающий за border для блока маркирования картинок. В него можно задать любое допустимое значение для border-а в CSS. Для примера попробуйте ввести: 1px solid #000, или 5px dotted rgba(255, 100, 255, .8).
            </template>

            <template v-if="props.isEng">
              <b>border</b> is an input parameter responsible for the border of the image marking block. You can set any valid value for border in CSS. For example, try entering: 1px solid #000, or 5px dotted rgba(255, 100, 255, .8).
            </template>
          </ui-label>

          <ui-input v-model="border" />
        </ui-row>

        <ui-row>
          <ui-label>
            <template v-if="props.isRus">
              <b>boxShadow</b> - входной параметр отвечающий за box-shadow для блока маркирования картинок. Здесь можно задать любое приемлемое значение для тени в CSS. Для примера попробуйте задать следующие значения: 0 0 20px rgba(0, 0, 0, .8), или 5px 5px 20px rgba(50, 50, 50, .8).
            </template>

            <template v-if="props.isEng">
              <b>boxShadow</b> — an input parameter responsible for the box-shadow for the image marking block. Here, you can set any valid value for the shadow in CSS. For example, try setting the following values: 0 0 20px rgba(0, 0, 0, .8) or 5px 5px 20px rgba(50, 50, 50, .8).
            </template>
          </ui-label>

          <ui-input v-model="boxShadow" />
        </ui-row>
      </div>

      <open-header
        :is-active="isDraggingArea"
        @click="isDraggingArea = !isDraggingArea"
      >
        {{ stylesMarkUp }}
      </open-header>

      <div
        v-if="isDraggingArea"
        class="styles-props-areas__group"
      >
        <p>
          <template v-if="props.isRus">
            Данные входные параметры отвечают за стили области которая будет появляться в момент маркирования картинки.
          </template>

          <template v-if="props.isEng">
            These input parameters determine the style of the area that will appear when labeling the image.
          </template>
        </p>

        <ui-row>
          <ui-label>
            <template v-if="props.isRus">
              <b>labelingRectFill</b> - входной параметр отвечающий за цвет заливки в момент маркирования картинки. Для него возможно задать любое приемлемое значение для цвета в CSS. Для примера попробуйте задать следующие цвета: orange, rgba(77, 77, 77, .7), rgb(77, 77, 77).
            </template>

            <template v-if="props.isEng">
              <b>labelingRectFill</b> is an input parameter that determines the fill color at the time of marking the image. You can set any acceptable color value in CSS for it. For example, try setting the following colors: orange, rgba(77, 77, 77, .7), rgb(77, 77, 77).
            </template>
          </ui-label>

          <ui-input v-model="labelingRectFill" />
        </ui-row>

        <ui-row>
          <ui-label>
            <template v-if="props.isRus">
              <b>labelingRectStroke</b> - входной параметр отвечающий за цвет линии в момент маркирования картинки. Для него также возможно задать любое приемлемое значение для цвета в CSS. Для примера попробуйте задать следующие цвета: orange, rgba(77, 77, 77, .7), rgb(77, 77, 77).
            </template>

            <template v-if="props.isEng">
              <b>labelingRectStroke</b> - is an input parameter responsible for the line color at the time of marking the image. It is also possible to set any acceptable color value in CSS for it. For example, try setting the following colors: orange, rgba(77, 77, 77, .7), rgb(77, 77, 77).
            </template>
          </ui-label>

          <ui-input v-model="labelingRectStroke" />
        </ui-row>

        <ui-row>
          <ui-label>
            <template v-if="props.isRus">
              <b>labelingRectFillOpacityy</b> - входной параметр отвечающий за прозрачность заливки в момент маркирования картинки. Для него возможно задать любое значение в интервале от 0 до 1. Для примера попробуйте задать: 0, .4, .8, 1.
            </template>

            <template v-if="props.isEng">
              <b>labelingRectFillOpacityy</b> is an input parameter that controls the fill transparency at the time of image marking. You can set any value for it within the range from 0 to 1. For example, try setting: 0, .4, .8, 1.
            </template>
          </ui-label>

          <ui-input v-model="labelingRectFillOpacity" />
        </ui-row>

        <ui-row>
          <ui-label>
            <template v-if="props.isRus">
              <b>labelingRectStrokeOpacity</b> - входной параметр отвечающий за прозрачность линии в момент маркирования картинки. Для него возможно задать любое значение в интервале от 0 до 1. Для примера попробуйте задать: 0, .4, .8, 1.
            </template>

            <template v-if="props.isEng">
              <b>labelingRectStrokeOpacity</b> is an input parameter that controls the transparency of the line when marking the image. You can set any value within the range from 0 to 1. For example, try setting: 0, .4, .8, 1.
            </template>
          </ui-label>

          <ui-input v-model="labelingRectStrokeOpacity" />
        </ui-row>
      </div>

      <open-header
        :is-active="isActiveArea"
        @click="isActiveArea = !isActiveArea"
      >
        {{ stylesActiveArea }}
      </open-header>

      <div 
        v-if="isActiveArea"
        class="styles-props-areas__group"
      >
        <p>
          <template v-if="props.isRus">
            Данные входные параметры отвечают за стили для активной маркированной области.
          </template>

          <template v-if="props.isEng">
            These input parameters are responsible for the styles for the active labeled area.
          </template>
        </p>

        <ui-row>
          <ui-label>
            <template v-if="props.isRus">
              <b>activeRectFilll</b> - входной параметр отвечающий за заливку активной маркированной области.
            </template>

            <template v-if="props.isEng">
              <b>activeRectFill</b> - the input parameter responsible for filling the active labeled area.
            </template>
          </ui-label>

          <ui-input v-model="activeRectFill" />
        </ui-row>

        <ui-row>
          <ui-label>
            <template v-if="props.isRus">
              <b>activeRectStroke</b> - входной параметр отвечающий за цвет линии активной маркированной области.
            </template>

            <template v-if="props.isEng">
              <b>activeRectStroke</b> - the input parameter responsible for the color of the line of the active labeled area.
            </template>
          </ui-label>

          <ui-input v-model="activeRectStroke" />
        </ui-row>

        <ui-row>
          <ui-label>
            <template v-if="props.isRus">
              <b>activeRectFillOpacity</b> - входной параметр отвечающий за прозрачность активной маркированной области.
            </template>

            <template v-if="props.isEng">
              <b>activeRectFillOpacity</b> - the input parameter responsible for the transparency of the active labeled area.
            </template>
          </ui-label>

          <ui-input v-model="activeRectFillOpacity" />
        </ui-row>

        <ui-row>
          <ui-label>
            <template v-if="props.isRus">
              <b>activeRectStrokeOpacity</b> - входной параметр отвечающий за прозрачность линии активной маркированной области.
            </template>

            <template v-if="props.isEng">
              <b>activeRectStrokeOpacity</b> - the input parameter responsible for the transparency of the line of the active labeled area.
            </template>
          </ui-label>

          <ui-input v-model="activeRectStrokeOpacity" />
        </ui-row>
      </div>

      <open-header
        :is-active="isMarkupArea"
        @click="isMarkupArea = !isMarkupArea"
      >
        {{ commonStyles }}
      </open-header>

      <div
        v-if="isMarkupArea"
        class="styles-props-areas__group"
      >
        <p>
          <template v-if="props.isRus">
            Входные параметры отвечающие за общие стили для маркированных областей. Некоторые стили будут применяться для активной области и области в момент разметки.
          </template>

          <template v-if="props.isEng">
            Input parameters responsible for common styles for bulleted areas. Some styles will be applied to the hotspot and the area at the time of markup.
          </template>
        </p>

        <ui-row>
          <ui-label>
            <template v-if="props.isRus">
              <b>rectFill</b> - входной параметр отвечающий за заливку маркированных областей.
            </template>

            <template v-if="props.isEng">
              <b>rectFill</b> - the input parameter responsible for filling the marked areas.
            </template>
          </ui-label>

          <ui-input v-model="rectFill" />
        </ui-row>

        <ui-row>
          <ui-label>
            <template v-if="props.isRus">
              <b>rectStroke</b> - входной параметр отвечающий за цвет линий маркированных областей.
            </template>

             <template v-if="props.isEng">
              <b>rectStroke</b> - the input parameter responsible for the color of the lines of the marked areas.
            </template>
          </ui-label>

          <ui-input v-model="rectStroke" />
        </ui-row>

        <ui-row>
          <ui-label>
            <template v-if="props.isRus">
              <b>rectStrokeWidth</b> - входной параметр отвечающий за толщину линий маркированных областей.
            </template>

            <template v-if="props.isEng">
              <b>rectStrokeWidth</b> - the input parameter responsible for the line thickness of the marked areas.
            </template>
          </ui-label>

          <ui-input v-model="rectStrokeWidth" />
        </ui-row>

        <ui-row>
          <ui-label>
            <template v-if="props.isRus">
              <b>rectStrokeOpacity</b> - входной параметр отвечающий за прозрачность линий маркированных областей.
            </template>

            <template v-if="props.isEng">
              <b>rectStrokeOpacity</b> - the input parameter responsible for the transparency of the lines of the marked areas.
            </template>
          </ui-label>

          <ui-input v-model="rectStrokeOpacity" />
        </ui-row>

        <ui-row>
          <ui-label>
            <template v-if="props.isRus">
              <b>rectFillOpacity</b> - входной параметр отвечающий за прозрачность заливки маркированных областей.
            </template>

            <template v-if="props.isEng">
              <b>rectFillOpacity</b> - the input parameter responsible for the transparency of the fill of the marked areas.
            </template>
          </ui-label>

          <ui-input v-model="rectFillOpacity" />
        </ui-row>

        <ui-row>
          <ui-label>
            <template v-if="props.isRus">
              <b>rectRx</b> - входной параметр отвечающий за border-radius по оси X.
            </template>

            <template v-if="props.isEng">
              <b>rectRx</b> - the input parameter responsible for the border is the X-axis radius.
            </template>
          </ui-label>

          <ui-input v-model="rectRx" />
        </ui-row>

        <ui-row>
          <ui-label>
            <template v-if="props.isRus">
              <b>rectRy</b> - входной параметр отвечающий за border-radius по оси Y.
            </template>

            <template v-if="props.isEng">
              <b>rectRy</b> - the input parameter responsible for the border is the Y-axis radius.
            </template>
          </ui-label>

          <ui-input v-model="rectRy" />
        </ui-row>
      </div>

      <open-header
        :is-active="isShadowBlock"
        @click="isShadowBlock = !isShadowBlock"
      >
        {{ shadowStyles }}
      </open-header>

      <div
        v-if="isShadowBlock"
        class="styles-props-areas__group"
      >
        <p>
          <template v-if="props.isRus">
            Входные параметры отвечающие за стили тени маркированных областей.
          </template>

          <template v-if="props.isEng">
            Input parameters responsible for the shadow styles of the marked areas.
          </template>
        </p>

        <ui-row>
          <ui-checkbox v-model="isShadow">
            {{ watchShadowText }}
          </ui-checkbox>

          <ui-label>
            <template v-if="props.isRus">
              <b>shadowRectStroke</b> - входной параметр отвечающий за цвет линий для тени.
            </template>

            <template v-if="props.isEng">
              <b>shadowRectStroke</b> - the input parameter responsible for the color of the lines for the shadow.
            </template>
          </ui-label>

          <ui-input v-model="shadowRectStroke" />
        </ui-row>

        <ui-row>
          <ui-label>
            <template v-if="props.isRus">
              <b>shadowRectStrokeWidth</b> - входной параметр отвечающий за толщину линии для тени.
            </template>

            <template v-if="props.isEng">
              <b>shadowRectStrokeWidth</b> - the input parameter responsible for the line thickness for the shadow.
            </template>
          </ui-label>

          <ui-input v-model="shadowRectStrokeWidth" />
        </ui-row>

        <ui-row>
          <ui-label>
            <template v-if="props.isRus">
              <b>shadowRectStrokeOpacity</b> - входной параметр отвечающий за прозрачность линии тени.
            </template>

            <template v-if="props.isEng">
              <b>shadowRectStrokeOpacity</b> - the input parameter responsible for the transparency of the shadow line.
            </template>
          </ui-label>

          <ui-input v-model="shadowRectStrokeOpacity" />
        </ui-row>
      </div>

      <open-header
        :is-active="isMarking"
        @click="isMarking = !isMarking"
      >
        {{ stylesForGrid }}
      </open-header>

      <template v-if="isMarking">
        <p>
          <template v-if="props.isRus">
            Входные параметры отвечающие стили для цвета сетки.
          </template>

          <template v-if="props.isEng">
            Input parameters corresponding styles for the grid color.
          </template>
        </p>

        <ui-row>
          <ui-checkbox v-model="isGrid">
            {{ watchGridText }}
          </ui-checkbox>

          <ui-label>
            <template v-if="props.isRus">
              <b>gridColorr</b> - входной параметр отвечающий за цвет линии сетки.
            </template>

            <template v-if="props.isEng">
              <b>gridColor</b> - the input parameter responsible for the color of the grid line.
            </template>
          </ui-label>

          <ui-input v-model="gridColor" />
        </ui-row>
      </template>
    </template>
  </ui-row>
</template>

<script setup>
  import { ref, computed } from 'vue';

  import useStylesPropsInt from './useStylesPropsInt.js';
  import OpenHeader from '@/UI/OpenHeader.vue';

  const props = defineProps(['isRus', 'isEng']);

  const isMain = ref(true);

  const isDraggingArea = ref(false);
  const isActiveArea = ref(false);
  const isMarkupArea = ref(false);
  const isMarking = ref(false);
  const isShadowBlock = ref(false);

  const bg = defineModel('bg');
  const border = defineModel('border');
  const boxShadow = defineModel('box-shadow');
  const gridColor = defineModel('grid-color');
  const rectStrokeWidth = defineModel('rect-stroke-width');
  const rectFillOpacity = defineModel('rect-fill-opacity');
  const rectStrokeOpacity = defineModel('rect-stroke-opacity');
  const rectRx = defineModel('rect-rx');
  const rectRy = defineModel('rect-ry');
  const rectFill = defineModel('rect-fill');
  const rectStroke = defineModel('rect-stroke');
  const activeRectFill = defineModel('active-rect-fill');
  const activeRectStroke = defineModel('active-rect-stroke');
  const activeRectFillOpacity = defineModel('active-rect-fill-opacity');
  const activeRectStrokeOpacity = defineModel('active-rect-stroke-opacity');
  const labelingRectFill = defineModel('labeling-rect-fill');
  const labelingRectStroke = defineModel('labeling-rect-stroke');
  const labelingRectFillOpacity = defineModel('labeling-rect-fill-opacity');
  const labelingRectStrokeOpacity = defineModel('labeling-rect-stroke-opacity');
  const shadowRectStroke = defineModel('shadow-rect-stroke');
  const shadowRectStrokeOpacity = defineModel('shadow-rect-stroke-opacity');
  const shadowRectStrokeWidth = defineModel('shadow-rect-stroke-width');
  const isHideBg = defineModel('is-hide-bg');
  const isShadow = defineModel('is-shadow');
  const isGrid = defineModel('is-grid');
  const isEng = computed(() => props.isEng);

  const {
    headerText,
    stylesMarkUp,
    stylesActiveArea,
    commonStyles,
    shadowStyles,
    stylesForGrid,
  } = useStylesPropsInt(isEng);

  const watchBgText = computed(() => {
    if (isEng.value && isHideBg.value) return 'Show the “Bender passport”'
    if (isEng.value && !isHideBg.value) return 'Hide “Bender’s passport”'

    if (isHideBg.value) return 'Показать "паспорт Бендера"'

    return 'Скрыть "паспорт Бендера"'
  });

  const watchGridText = computed(() => {
    if (isEng.value && !isGrid.value) return 'Show the grid'
    if (isEng.value && isGrid.value) return 'Hide grid'

    if (!isGrid.value) return 'Показать сетку'

    return 'Скрыть сетку'
  });

  const watchShadowText = computed(() => {
    if (isEng.value && !isShadow.value) return 'Show the shadow'
    if (isEng.value && isShadow.value) return 'Hide shadow'

    if (!isShadow.value) return 'Показать тень'

    return 'Скрыть тень'
  });
</script>

<style lang="scss">
  .styles-props-areas {
    &.row {
      margin-top: 0;
    }

    &__group {
      margin-bottom: 25px;
    }
  }
</style>
