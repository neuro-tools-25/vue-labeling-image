<template>
  <div class="style-labeling">
    <template v-if="!props.isEng">
      <h3>
        Входные параметры отвечающие за стилизацию области в момент маркирования данных на картинке
      </h3>

      <p>
        Входные параметры отвечающие за стилизацию маркированной области в момент её создания (маркировки). Так будет выглядеть маркированная область, в тот момент, когда мы начинаем маркировать документ, как правило, она будет чуть-чуть темнее, чем активная маркированная область. Для того, что-бы увидеть данные стили, нужно сперва выбрать картинку, затем нажать левую кнопку мыши и провети мышью по картинке не отпуская левую кнопку мыши. Параметр <strong>isMarkup</strong> должен быть равен true, <strong>isReadonly</strong> должен находиться в значении false, иначе маркировать картинку не получится.
      </p>

      <p class="small-mar">
        <strong>labelingRectFill</strong> - входной параметр отвечающий за цвет заливки в момент маркирования картинки.
      </p>

      <p class="small-mar">
        <strong>labelingRectStroke</strong> - входной параметр отвечающий за цвет линии в момент маркирования картинки.
      </p>

      <p class="small-mar">
        <strong>labelingRectFillOpacity</strong> - входной параметр отвечающий за прозрачность заливки в момент маркирования картинки.
      </p>

      <p class="small-mar">
        <strong>labelingRectStrokeOpacity</strong> - входной параметр отвечающий за прозрачность линии в момент маркирования картинки.
      </p>
    </template>

    <template v-if="props.isEng">
      <h3>
        Input parameters responsible for the stylization of the area at the time of labeling the data in the image
      </h3>

      <p>
        Input parameters responsible for the stylization of the labeled area at the time of its creation (labeling). This is what the labeled area will look like. At the moment when we start labeling the document, as a rule, it will be slightly darker than the active labeled area. In order to see these styles, you first need to select an image, then click the left mouse button and swipe over the image without releasing the left mouse button. The <strong>isMarkup</strong> parameter must be set to true, <strong>IsReadOnly</strong> must be set to false, otherwise you will not be able to label the image.
      </p>

      <p class="small-mar">
        <strong>labelingRectFill</strong> - the input parameter responsible for the fill color at the time of labeling the image.
      </p>

      <p class="small-mar">
        <strong>labelingRectStroke</strong> - the input parameter responsible for the color of the line at the time of labeling the image.
      </p>

      <p class="small-mar">
        <strong>labelingRectFillOpacity</strong> - the input parameter responsible for the transparency of the fill at the time of labeling the image.
      </p>

      <p class="small-mar">
        <strong>labelingRectStrokeOpacity</strong> - the input parameter responsible for the transparency of the line at the time of labeling the image.
      </p>
    </template>
  </div>
</template>

<script setup>
  const props = defineProps(['isEng', 'query']);
</script>

<style lang="scss">
  
</style>
