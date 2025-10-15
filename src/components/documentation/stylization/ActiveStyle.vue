<template>
  <div class="style-active">
    <template v-if="!props.isEng">
      <h3>
        Стили для активной маркированной области
      </h3>

      <p>
        Посмотреть данные стили можно после того, как процесс маркирования завершится. Последняя созданная область станет активной. Также данные стили будут применяться к области когда мы по ней кликнем. Параметр <strong>isReadonly</strong> должен находиться в значении false, иначе стили для активной области вы не увидите, да и разметить области вы не сможете. Так-же параметр <strong>isMarkup</strong> должен находиться в значении true, иначе картинку вы маркировать не сможете.
      </p>

      <p class="small-mar">
        <strong>--mu-marking-rect-active-fill</strong> - заливка активной маркированной области.
      </p>

      <p class="small-mar">
        <strong>--mu-marking-rect-active-stroke </strong> - цвет линии активной маркированной области, по другому border.
      </p>

      <p class="small-mar">
        <strong>--mu-marking-rect-active-fill-opacity</strong> - прозрачность заливки активной маркированной области.
      </p>

      <p class="small-mar">
        <strong>--mu-marking-rect-active-stroke-opacity</strong> - прозрачность линии активной маркированной области.
      </p>
    </template>

    <template v-if="props.isEng">
      <h3>
        Styles for the active bulleted area
      </h3>

      <p>
        You can view these styles after the labeling process is completed. The last created area will become active. Also, these styles will be applied to the area when we click on it. The <strong>isReadOnly</strong> parameter must be set to false, otherwise you will not see the styles for the hotspot, and you will not be able to mark up the areas. Also, the <strong>isMarkup</strong> parameter must be set to true, otherwise you will not be able to label the image.
      </p>

      <p class="small-mar">
        <strong>--mu-marking-rect-active-fill</strong> - filling the active marked area.
      </p>

      <p class="small-mar">
        <strong>--mu-marking-rect-active-stroke </strong> is the color of the line of the active marked area, in another case border.
      </p>

      <p class="small-mar">
        <strong>--mu-marking-rect-active-fill-opacity</strong> - transparency of the fill of the active marked area.
      </p>

      <p class="small-mar">
        <strong>--mu-marking-rect-active-stroke-opacity</strong> - transparency of the line of the active marked area.
      </p>
    </template>
  </div>
</template>

<script setup>
  const props = defineProps(['isEng', 'query']);
</script>

<style lang="scss">
  
</style>
