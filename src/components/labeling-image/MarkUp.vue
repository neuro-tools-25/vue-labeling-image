<template>
  <div
    class="mark-up"
    :class="classComp"
    @mousedown="mDown"
    @mousemove="mMove"
    @mouseup="mUp"
    @touchstart="mDown"
    @touchmove="mMove"
    @touchend="mUp"
  >
    <div class="mark-up__wrapper">
      <img
        v-if="imgSrc"
        :src="imgSrc"
        ref="img"
        class="mark-up__img"
        alt=""
      >

      <svg class="mark-up__svg">
        <slot name="first"></slot>

        <template
          v-for = "item in areas"
          :key="item.id"
        >
          <mark-up-group
            :id="item.id"
            :x="item.x"
            :y="item.y"
            :width="item.width"
            :height="item.height"
            :is-unvisible="activeId === item.id && !props.isReadonly"
            :is-resize-area="props.isResizeArea"
            :is-proc="true"
            :is-shadow="props.isShadow"
            :is-readonly="isReadonly"
            :title="item[props.keyTitle]"
            :isTitle="props.isTitle"
            @touchstart.stop="cRect($event, item, 'move-rect')"
            @mousedown.stop="cRect($event, item, 'move-rect');"
            @move-left="cRect($event, item, 'resize-left')"
            @move-right="cRect($event, item, 'resize-right')"
            @move-top="cRect($event, item, 'resize-top')"
            @move-bottom="cRect($event, item, 'resize-bottom')"
          />
        </template>

        <!-- Эта область нужна для первоначальной разметки, пока еще ни одна область не размечена -->
        <mark-up-group
          v-if="markUpArea?.id"
          :id="markUpArea.id"
          :x="markUpArea.x"
          :y="markUpArea.y"
          :width="markUpArea.width"
          :height="markUpArea.height"
          :is-active="true"
          :is-dragging="true"
          :is-proc="false"
          :is-shadow="props.isShadow"
          :is-readonly="isReadonly"
        />

        <!-- Для активной области -->
        <mark-up-group
          v-if="activeArea?.id"
          :id="activeArea.id"
          :x="activeArea.x"
          :y="activeArea.y"
          :width="activeArea.width"
          :height="activeArea.height"
          :is-active="activeId === activeArea.id && !props.isReadonly"
          :is-resize-area="props.isResizeArea"
          :is-proc="true"
          :is-shadow="props.isShadow"
          :is-readonly="isReadonly"
          :title="activeArea[props.keyTitle]"
          :isTitle="props.isTitle"
          @touchstart.stop="cRect($event, activeArea, 'move-rect')"
          @mousedown.stop="cRect($event, activeArea, 'move-rect')"
          @move-left="cRect($event, activeArea, 'resize-left')"
          @move-right="cRect($event, activeArea, 'resize-right')"
          @move-top="cRect($event, activeArea, 'resize-top')"
          @move-bottom="cRect($event, activeArea, 'resize-bottom')"
        />

        <slot name="last"></slot>
      </svg>
    </div>
  </div>
</template>

<script setup>
  import {
    ref,
    watch,
    computed,
  } from 'vue';

  import {
    cMarking,
    cMoveRect,
    cResizeLeft,
    cResizeRight,
    cResizeTop,
    cResizeBottom
  } from './const.js';

  import MarkUpGroup from './MarkUpGroup.vue';

  import useSizesMarkUp from './useSizesMarkUp.js';
  import useMarking from './useMarking.js';
  import useRect from './useRect.js';
  import useClass from './useClass.js';

  const areas = defineModel({ default: [] });
  const activeId = defineModel('activeId', { default: null });
  const activeArea = ref({});

  const emits = defineEmits(['is-load-image', 'get-sizes']);

  const changeIsLoadImage = (e) => emits('is-load-image', e);
  const getSizes = (sizeObj) => emits('get-sizes', sizeObj);

  const props = defineProps({
    imageSrc: {
      type: [Object, String],
    },
    isMarkup: {
      type: Boolean,
      default: true
    },
    enableGrid: {
      type: Boolean,
      default: false
    },
    gridSize: {
      type: [Number, String],
      default: 10,
      validator(value) {
        return [
          '5',
          '10',
          '15',
          '20',
          '25',
          '30',
          '35',
          '40',
          '45',
          '50',
          5,
          10,
          15,
          20,
          25,
          30,
          35,
          40,
          45,
          50,
        ].includes(value)
      }
    },
    minWidth: {
      type: [Number, String],
      default: 10
    },
    minHeight: {
      type: [Number, String],
      default: 10
    },
    isResizeArea: {
      type: Boolean,
      default: true
    },
    isDraggingArea: {
      type: Boolean,
      default: true
    },
    isReadonly: {
      type: Boolean,
      default: false
    },
    resolution: {
      type: String,
      default: 'HD',
      validator(value) {
        return [
          '16:9',
          'HD',
          '10:9',
          'CIF',
          '8:5',
          'QHD',
          '5:6',
          'MPEG2',
          '5:4',
          'SXGA',
          '5:3',
          'WVGA',
          '4:3',
          'VGA',
          '3:1',
          'WSXGA',
          '2:1',
          '2K',
          '1:1'
        ].includes(value)
      }
    },
    vertical: {
      type: Boolean,
      default: false
    },
    isShadow: {
      type: Boolean,
      default: false
    },
    theme: {
      type: String,
      default: 'default'
    },
    isTitle: {
      type: Boolean,
      default: true
    },
    keyTitle: {
      type: String,
      default: 'title'
    },
  });

  const {
    widthMarkUp,
    heightMarkUp,
    convToPercent,
    convToRealWidth,
    convToRealHeight,
    minWidth,
    minHeight,
    imgSrc,
    isLoadImg
  } = useSizesMarkUp(props, {
    changeIsLoadImage,
    getSizes
  });

  watch(imgSrc, () => {
    areas.value = [];
    activeId.value = null;
    activeArea.value = {};
  });

  let typeMove = null;
  let countItem = null;

  const bParams = ({
    x,
    y,
    width,
    height
  }) => {
    let params = {};

    if (x) params = { ...params, x: convToPercent(x, widthMarkUp.value) };
    if (y) params = { ...params, y: convToPercent(y, heightMarkUp.value) };

    if (width) params = { ...params, width: convToPercent(width, widthMarkUp.value) };
    if (height) params = { ...params, height: convToPercent(height, heightMarkUp.value) };

    return params;
  }

  const convertParams = (obj) => {
    const {
      x,
      y,
      width,
      height
    } = obj;

    return {
      ...obj,
      x: convToPercent(x, widthMarkUp.value),
      y: convToPercent(y, heightMarkUp.value),
      width: convToPercent(width, widthMarkUp.value),
      height: convToPercent(height, heightMarkUp.value)
    }
  };

  const addInAreas = (item, id) => {
    const itemArea = convertParams(item);

    areas.value = [
      {
        ...itemArea
      },
      ...areas.value,
    ];

    activeId.value = id;
  }

  const isAddParamsInArea = (typeMove, params) => {
    const {
      x,
      y,
      width,
      height
    } = params;

    let isAddParams = (height >= minHeight.value && width >= minWidth.value);

    if ((typeMove === cResizeLeft) && (x < 0)) isAddParams = false;
    if ((typeMove === cResizeRight) && (x + width > 100)) isAddParams = false;
    if ((typeMove === cResizeBottom) && (y + height > 100)) isAddParams = false;
    if ((typeMove === cResizeTop) && (y < 0)) isAddParams = false;

    return isAddParams;
  }

  const limitedMoveArea = (obj) => {
    const params = { ...obj };

    if (params.x < 0) params.x = 0;
    if (params.y < 0) params.y = 0;

    if ((params.x + params.width) > 100) params.x += 100 - (params.x + params.width);
    if ((params.y + params.height) > 100) params.y += 100 - (params.y + params.height);

    return params;
  }

  const cRectParam = (obj) => {
    if (countItem !== null) {
      let params = bParams(obj);

      params = {
        ...areas.value[countItem],
        ...params
      };

      const isAddParams = isAddParamsInArea(typeMove, params);

      if (isAddParams) {
        if (typeMove === cMoveRect) params = limitedMoveArea(params);

        areas.value[countItem] = {
          ...params
        }

        activeArea.value = { ...params };
      }
    }
  }

  const {
    markUpArea,
    startMarkup,
    marking,
    mDownMarking,
    mUpMarking
  } = useMarking(props, {
    addInAreas,
    widthMarkUp,
    heightMarkUp,
  });

  const {
    isMovRect,
    mUpRect,
    mDownRect,
    moveRect,
    resizeRect
  } = useRect({
    cRectParam,
    convToRealWidth,
    convToRealHeight
  });

  const cTypeMove = (type) => {
    typeMove = type;
  }

  const isMoveArea = () => (typeMove === cMoveRect && props.isDraggingArea);

  const isAction = computed(() => !props.isReadonly && imgSrc.value !== null);

  const noScroll = computed(() => {
    if (isAction.value) {
      return props.isMarkup || props.isResizeArea || props.isDraggingArea;
    }

    return false;
  });

  const mMove = (e) => {
    if (noScroll.value) e.preventDefault();

    if (typeMove && isAction.value) {
      const isDragingArea = isMoveArea();
      const isResizeRect = !isDragingArea && typeMove !== cMarking;

      const rRect = (x) => {
        if (typeMove === x) resizeRect(e, x);
      }

      if (typeMove === cMarking) marking(e);
      if (isDragingArea) moveRect(e);
      if (isResizeRect) rRect(typeMove);
    }
  }

  const mDown = (e) => {
    if (noScroll.value) e.preventDefault();

    if (isAction.value) {
      cTypeMove(cMarking);
      mDownMarking(e);
    }
  }

  const mUp = (e) => {
    if (noScroll.value) e.preventDefault();

    if (isAction.value) {
      if (typeMove === cMarking) mUpMarking();
      mUpRect();

      cTypeMove(null);
    }
  }

  const cRect = (e, item, typeMove) => {
    if (noScroll.value) e.preventDefault();

    const changeSelectId = (id) => activeId.value = id;

    if (props.isReadonly || imgSrc.value === null) return;

    const isNoMoveRect = (typeMove === cMoveRect && !props.isDraggingArea);

    if (isNoMoveRect) {
      if (item?.id) changeSelectId(item.id);

      return;
    }

    cTypeMove(typeMove);
    mDownRect(e, item);

    if (item?.id) {
      const { id } = item;

      changeSelectId(id);
      countItem = areas.value.findIndex((el) => el.id === id);
    }
  }

  const classComp = useClass(props, {
    startMarkup,
    isMovRect,
    isLoadImg
  });

  const changeActiveArea = (id) => activeArea.value = areas.value.find((el) => el.id === id);

  watch(activeId, changeActiveArea, { immediate: true });
</script>

<style lang="scss">
  @use '@/assets/_services' as services;

  :root {
    --mu-bg: #c8c8c8;
    --mu-border: none;
    --mu-box-shadow: 0 0 5px #7b7b7b;

    --mu-grid-size: 5px;
    --mu-grid-color: #987654;
    --mu-transition-property-aspect-ratio: .4s var(--easeInOutCirc) 0s;
  }

  .mark-up {
    border: var(--mu-border);
    background: var(--mu-bg);
    box-shadow: var(--mu-box-shadow);

    &__wrapper {
      z-index: 1;
      position: relative;
      transition: aspect-ratio var(--mu-transition-property-aspect-ratio);
    }

    &_16-9 &__wrapper,
    &_HD &__wrapper {
      aspect-ratio: 16/9;
    }

    &_16-9.mark-up_vertical &__wrapper,
    &_HD.mark-up_vertical &__wrapper {
      aspect-ratio: 9/16;
    }

    &_10-9 &__wrapper,
    &_CIF &__wrapper {
      aspect-ratio: 10/9;
    }

    &_10-9.mark-up_vertical &__wrapper,
    &_CIF.mark-up_vertical &__wrapper {
      aspect-ratio: 9/10;
    }

    &_8-5 &__wrapper,
    &_QHD &__wrapper {
      aspect-ratio: 8/5;
    }

    &_8-5.mark-up_vertical &__wrapper,
    &_QHD.mark-up_vertical &__wrapper {
      aspect-ratio: 5/8;
    }

    &_5-6 &__wrapper,
    &_MPEG2 &__wrapper {
      aspect-ratio: 5/6;
    }

    &_5-6.mark-up_vertical &__wrapper,
    &_MPEG2.mark-up_vertical &__wrapper {
      aspect-ratio: 6/5;
    }

    &_5-4 &__wrapper,
    &_SXGA &__wrapper {
      aspect-ratio: 5/4;
    }

    &_5-4.mark-up_vertical &__wrapper,
    &_SXGA.mark-up_vertical &__wrapper {
      aspect-ratio: 4/5;
    }

    &_5-3 &__wrapper,
    &_WVGA &__wrapper {
      aspect-ratio: 5/3;
    }

    &_5-3.mark-up_vertical &__wrapper,
    &_WVGA.mark-up_vertical &__wrapper {
      aspect-ratio: 3/5;
    }

    &_4-3 &__wrapper,
    &_VGA &__wrapper {
      aspect-ratio: 4/3;
    }

    &_4-3.mark-up_vertical &__wrapper,
    &_VGA.mark-up_vertical &__wrapper {
      aspect-ratio: 3/4;
    }

    &_3-1 &__wrapper,
    &_WSXGA &__wrapper {
      aspect-ratio: 3/1;
    }

    &_3-1.mark-up_vertical &__wrapper,
    &_WSXGA.mark-up_vertical &__wrapper {
      aspect-ratio: 1/3;
    }

    &_2-1 &__wrapper,
    &_2K &__wrapper {
      aspect-ratio: 2/1;
    }

    &_2-1.mark-up_vertical &__wrapper,
    &_2K.mark-up_vertical &__wrapper {
      aspect-ratio: 1/2;
    }

    &_1-1 &__wrapper {
      aspect-ratio: 1/1;
    }

    &__svg {
      width: 100%;
      height: 100%;
      display: block;
      position: relative;
    }

    &__img {
      width: 100%;
      z-index: -1;
      display: block;
      position: relative;
    }

    &_is-image {
      cursor: crosshair;

      .mark-up {
        &__svg {
          top: 0;
          left: 0;
          position: absolute;
        }
        
        &__wrapper {
          aspect-ratio: auto!important;
        }
      }
    }

    &_no-markup,
    &_readonly {
      cursor: default;
    }

    &.mark-up_start,
    &.mark-up_rect-move {
      &::before {
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        content: ' ';
        display: block;
        position: fixed;
        z-index: 10000;
      }
    }

    // Работа с rect-ом
    &.mark-up_rect-move {
      &::before {
        cursor: grabbing;
      }
    }

    // Сетка
    &.mark-up_grid {
      .mark-up__wrapper {
        &::before {
          width: 100%;
          height: 100%;
          display: block;
          content: ' ';
          position: absolute;
          background-image: linear-gradient(to right, var(--mu-grid-color) 1px, transparent 1px),
                        linear-gradient(to bottom, var(--mu-grid-color) 1px, transparent 1px);
          background-size: var(--mu-grid-size) var(--mu-grid-size);
        }
      }
    }

    @for $i from 1 to 10 {
      $size: $i * 5 + 5;

      &.mark-up_grid-#{$size} {
        .mark-up__wrapper {
          &::before {
            --mu-grid-size: #{$size}px;
          }
        }
      }
    }
  }
</style>
