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
              <b>--mu-bg</b> - background для блока маркирования картинок.
            </template>

            <template v-if="props.isEng">
              <b>--mu-bg</b> - background for the image labeling block.
            </template>
          </ui-label>

          <ui-input v-model="bg" />
        </ui-row>

        <ui-row>
          <ui-label>
            <template v-if="props.isRus">
              <b>--mu-border</b> - border для блока маркирования картинок.
            </template>

            <template v-if="props.isEng">
              <b>--mu-border</b> - border for the image labeling block.
            </template>
          </ui-label>

          <ui-input v-model="border" />
        </ui-row>

        <ui-row>
          <ui-label>
            <template v-if="props.isRus">
              <b>--mu-box-shadow</b> - box-shadow для блока маркирования картинок.
            </template>

            <template v-if="props.isEng">
              <b>--mu-box-shadow</b> - box-shadow for the image labeling block.
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
            Посмотреть данные стили можно в момент маркирования картинки, для этого нужно выбрать картинку. <b>isMarkup</b> должно быть равно <b>true</b>, <b>isReadonly</b> должно находиться в значении <b>false</b>.
          </template>

          <template v-if="props.isEng">
            You can view these styles at the time of labeling the image. To do this, select an image. <b>isMarkup</b> must be <b>true</b>, <b>IsReadOnly</b> must be set to <b>false</b>.
          </template>
        </p>

        <ui-row>
          <ui-label>
            <template v-if="props.isRus">
              <b>--mu-marking-rect-dragging-fill</b> - цвет заливки в момент маркирования картинки.
            </template>

            <template v-if="props.isEng">
              <b>--mu-marking-rect-dragging-fill</b> - the fill color at the time of labeling the image.
            </template>
          </ui-label>

          <ui-input v-model="labelingRectFill" />
        </ui-row>

        <ui-row>
          <ui-label>
            <template v-if="props.isRus">
              <b>--mu-marking-rect-dragging-stroke</b> - цвет линии в момент маркирования картинки.
            </template>

            <template v-if="props.isEng">
              <b>--mu-marking-rect-dragging-stroke</b> - the color of the line at the time of labeling the image.
            </template>
          </ui-label>

          <ui-input v-model="labelingRectStroke" />
        </ui-row>

        <ui-row>
          <ui-label>
            <template v-if="props.isRus">
              <b>--mu-marking-rect-dragging-fill-opacity</b> - прозрачность заливки в момент маркирования картинки.
            </template>

            <template v-if="props.isEng">
              <b>--mu-marking-rect-dragging-fill-opacity</b> - transparency of the fill at the time of labeling the image.
            </template>
          </ui-label>

          <ui-input v-model="labelingRectFillOpacity" />
        </ui-row>

        <ui-row>
          <ui-label>
            <template v-if="props.isRus">
              <b>--mu-marking-rect-dragging-stroke-opacity</b> - прозрачность линии в момент маркирования картинки.
            </template>

            <template v-if="props.isEng">
              <b>--mu-marking-rect-dragging-stroke-opacity</b> - transparency of the line at the time of labeling the image.
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
            Посмотреть данные стили можно после того, как вы маркировали картинку. Можно их применить по клику на маркированные области. <b>IsReadonly</b> должно находиться в значении <b>false</b>, иначе стили для активной области вы не увидите, да и разметить области вы не сможете.
          </template>

          <template v-if="props.isEng">
            You can view these styles after you have labeled the image. You can apply them by clicking on the marked areas. <b>IsReadOnly</b> must be set to <b>false</b>, otherwise you won't see the styles for the hotspot, and you won't be able to mark up the areas.
          </template>
        </p>

        <ui-row>
          <ui-label>
            <template v-if="props.isRus">
              <b>--mu-marking-rect-active-fill</b> - заливка активной маркированной области.
            </template>

            <template v-if="props.isEng">
              <b>--mu-marking-rect-active-fill</b> - filling the active marked area.
            </template>
          </ui-label>

          <ui-input v-model="activeRectFill" />
        </ui-row>

        <ui-row>
          <ui-label>
            <template v-if="props.isRus">
              <b>--mu-marking-rect-active-stroke</b> - цвет линии активной маркированной области.
            </template>

            <template v-if="props.isEng">
              <b>--mu-marking-rect-active-stroke</b> - line color of the active marked area.
            </template>
          </ui-label>

          <ui-input v-model="activeRectStroke" />
        </ui-row>

        <ui-row>
          <ui-label>
            <template v-if="props.isRus">
              <b>--mu-marking-rect-active-fill-opacity</b> - прозрачность активной маркированной области.
            </template>

            <template v-if="props.isEng">
              <b>--mu-marking-rect-active-fill-opacity</b> - transparency of the active labeled area.
            </template>
          </ui-label>

          <ui-input v-model="activeRectFillOpacity" />
        </ui-row>

        <ui-row>
          <ui-label>
            <template v-if="props.isRus">
              <b>--mu-marking-rect-active-stroke-opacity</b> - прозрачность линии активной маркированной области.
            </template>

            <template v-if="props.isEng">
              <b>--mu-marking-rect-active-stroke-opacity</b> - transparency of the line of the active marked area.
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
            Это общие стили для маркированных областей. Некоторые стили будут применяться для активной области и области в момент разметки.
          </template>

          <template v-if="props.isEng">
            These are common styles for labeled areas. Some styles will be applied to the hotspot and the area at the time of markup.
          </template>
        </p>

        <ui-row>
          <ui-label>
            <template v-if="props.isRus">
              <b>--mu-marking-rect-fill</b> - заливка маркированных областей.
            </template>

            <template v-if="props.isEng">
              <b>--mu-marking-rect-fill</b> - filling the marked areas.
            </template>
          </ui-label>

          <ui-input v-model="rectFill" />
        </ui-row>

        <ui-row>
          <ui-label>
            <template v-if="props.isRus">
              <b>--mu-marking-rect-stroke</b> - цвет линий маркированной областей.
            </template>

             <template v-if="props.isEng">
              <b>--mu-marking-rect-stroke</b> - the color of the lines of the labeled areas.
            </template>
          </ui-label>

          <ui-input v-model="rectStroke" />
        </ui-row>

        <ui-row>
          <ui-label>
            <template v-if="props.isRus">
              <b>--mu-marking-rect-stroke-width</b> - толщина линий маркированных областей.
            </template>

            <template v-if="props.isEng">
              <b>--mu-marking-rect-stroke-width</b> - line thickness of the marked areas.
            </template>
          </ui-label>

          <ui-input v-model="rectStrokeWidth" />
        </ui-row>

        <ui-row>
          <ui-label>
            <template v-if="props.isRus">
              <b>--mu-marking-rect-stroke-opacity</b> - прозрачность линий маркированных областей.
            </template>

            <template v-if="props.isEng">
              <b>--mu-marking-rect-stroke-opacity</b> - transparency of the lines of the marked areas.
            </template>
          </ui-label>

          <ui-input v-model="rectStrokeOpacity" />
        </ui-row>

        <ui-row>
          <ui-label>
            <template v-if="props.isRus">
              <b>--mu-marking-rect-fill-opacity</b> - прозрачность заливки маркированных областей.
            </template>

            <template v-if="props.isEng">
              <b>--mu-marking-rect-fill-opacity</b> - transparency of the fill of the marked areas.
            </template>
          </ui-label>

          <ui-input v-model="rectFillOpacity" />
        </ui-row>

        <ui-row>
          <ui-label>
            <template v-if="props.isRus">
              <b>--mu-marking-rect-rx</b> - border-radius по оси X.
            </template>

            <template v-if="props.isEng">
              <b>--mu-marking-rect-rx</b> - border-radius on the X-axis.
            </template>
          </ui-label>

          <ui-input v-model="rectRx" />
        </ui-row>

        <ui-row>
          <ui-label>
            <template v-if="props.isRus">
              <b>--mu-marking-rect-ry</b> - border-radius по оси Y.
            </template>

            <template v-if="props.isEng">
              <b>--mu-marking-rect-ry</b> - border-radius on the Y axis.
            </template>
          </ui-label>

          <ui-input v-model="rectRy" />
        </ui-row>
      </div>

      <open-header
        :is-active="isShadow"
        @click="isShadow = !isShadow"
      >
        {{ shadowStyles }}
      </open-header>

      <div
        v-if="isShadow"
        class="styles-props-areas__group"
      >
        <p>
          <template v-if="props.isRus">
            Стили для тени маркированной области.
          </template>

          <template v-if="props.isEng">
            Styles for the shadow of a marked area.
          </template>
        </p>

        <ui-row>
          <ui-label>
            <template v-if="props.isRus">
              <b>--mu-marking-rect-shadow-stroke</b> - цвет линий для тени.
            </template>

            <template v-if="props.isEng">
              <b>--mu-marking-rect-shadow-stroke</b> - color of lines for shadow.
            </template>
          </ui-label>

          <ui-input v-model="shadowRectStroke" />
        </ui-row>

        <ui-row>
          <ui-label>
            <template v-if="props.isRus">
              <b>--mu-marking-rect-shadow-stroke-width</b> - толщина линии для тени.
            </template>

            <template v-if="props.isEng">
              <b>--mu-marking-rect-shadow-stroke-width</b> - line width for shadow.
            </template>
          </ui-label>

          <ui-input v-model="shadowRectStrokeWidth" />
        </ui-row>

        <ui-row>
          <ui-label>
            <template v-if="props.isRus">
              <b>--mu-marking-rect-shadow-stroke-opacity</b> - прозрачность линии для тени.
            </template>

            <template v-if="props.isEng">
              <b>--mu-marking-rect-shadow-stroke-opacity</b> - line opacity for shadow.
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
            Здесь можно задать цвет для сетки. Чтобы увидеть данные стили, <b>EnableMarking</b> должно находиться в значении <b>true</b>.
          </template>

          <template v-if="props.isEng">
            Here you can set the color for the grid. <b>EnableMarking</b> must be set to <b>true</b> to see these styles.
          </template>
        </p>

        <ui-row>
          <ui-label>
            <template v-if="props.isRus">
              <b>--mu-grid-color</b> - цвет линии сетки.
            </template>

            <template v-if="props.isEng">
              <b>--mu-grid-color</b> - color of the grid line.
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
  const isShadow = ref(false);

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

  const isEng = computed(() => props.isEng);

  const {
    headerText,
    stylesMarkUp,
    stylesActiveArea,
    commonStyles,
    shadowStyles,
    stylesForGrid
  } = useStylesPropsInt(isEng);
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
