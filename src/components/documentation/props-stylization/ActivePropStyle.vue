<template>
  <div class="style-active">
    <template v-if="!props.isEng">
      <h3>
        Входные параметры отвечающие за стилизацию активной маркированной области
      </h3>

      <p>
        Посмотреть что делают данные входные параметры можно после того, как процесс маркирования завершится. Последняя созданная область станет активной. Также данные стили будут применяться к области когда мы по ней кликнем. Параметр <strong>isReadonly</strong> должен находиться в значении false, иначе стили для активной области вы не увидите, да и разметить области вы не сможете. Так-же параметр <strong>isMarkup</strong> должен находиться в значении true, иначе картинку вы маркировать не сможете.
      </p>

      <p class="small-mar">
        <strong>activeRectFilll</strong> - входной параметр отвечающий за заливку активной маркированной области.
      </p>

      <p class="small-mar">
        <strong>activeRectStroke</strong> - входной параметр отвечающий за цвет линии активной маркированной области.
      </p>

      <p class="small-mar">
        <strong>activeRectFillOpacity</strong> - входной параметр отвечающий за прозрачность активной маркированной области.
      </p>

      <p class="small-mar">
        <strong>activeRectStrokeOpacity</strong> - входной параметр отвечающий за прозрачность линии активной маркированной области.
      </p>
    </template>

    <template v-if="props.isEng">
      <h3>
        Input parameters responsible for the styling of the active labeled area
      </h3>

      <p>
        You can see what these input parameters do after the labeling process is completed. The last created area will become active. Also, these styles will be applied to the area when we click on it. The <strong>IsReadOnly</strong> parameter must be set to false, otherwise you will not see the styles for the hotspot, and you will not be able to mark up the areas. Also, the <strong>isMarkup</strong> parameter must be set to true, otherwise you will not be able to label the image.
      </p>

      <p class="small-mar">
        <strong>activeRectFill</strong> - the input parameter responsible for filling the active labeled area.
      </p>

      <p class="small-mar">
        <strong>activeRectStroke</strong> - the input parameter responsible for the color of the line of the active labeled area.
      </p>

      <p class="small-mar">
        <strong>activeRectFillOpacity</strong> - the input parameter responsible for the transparency of the active labeled area.
      </p>

      <p class="small-mar">
        <strong>activeRectStrokeOpacity</strong> - the input parameter responsible for the transparency of the line of the active labeled area.
      </p>
    </template>
  </div>
</template>

<script setup>
  const props = defineProps(['isEng', 'query']);
</script>

<style lang="scss">
  
</style>
