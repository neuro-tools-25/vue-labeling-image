<template>
  <div class="style-markup">
    <template v-if="!props.isEng">
      <h3>
        Стили для области в момент маркировки данных на картинке
      </h3>

      <p>
        Стили для маркированной области в момент её создания (маркировки). Так будет выглядеть маркированная область, в тот момент, когда мы начинаем маркировать документ, как правило, она будет чуть-чуть темнее, чем активная маркированная область. Для того, что-бы увидеть данные стили, нужно сперва выбрать картинку, затем нажать левую кнопку мыши и провети мышью по картинке не отпуская левую кнопку мыши. Параметр <strong>isMarkup</strong> должен быть равен true, <strong>isReadonly</strong> должен находиться в значении false, иначе маркировать картинку не получится.
      </p>

      <p class="small-mar">
        <strong>--mu-marking-rect-dragging-fill</strong> - цвет заливки в момент маркирования картинки.
      </p>

      <p class="small-mar">
        <strong>--mu-marking-rect-dragging-stroke</strong> - цвет линии в момент маркирования картинки, можно сказать цвет border в момент маркирования.
      </p>

      <p class="small-mar">
        <strong>--mu-marking-rect-dragging-fill-opacity</strong> - прозрачность заливки в момент маркирования картинки. Как не трудно догадаться, если задать значение 0, то заливки не будет, будет видна только обводка маркированной области (border).
      </p>

      <p class="small-mar">
        <strong>--mu-marking-rect-dragging-stroke-opacity</strong> - прозрачность линии в момент маркирования картинки. Можно задать значение 0, тогда у маркированной области будет отображаться только заливка.
      </p>
    </template>

    <template v-if="props.isEng">
      <h3>
        Styles for the area at the time of labeling the data in the image
      </h3>

      <p>
        Styles for the labeled area at the time of its creation (labeling). This is what the labeled area will look like. At the moment when we start labeling the document, as a rule, it will be slightly darker than the active labeled area. In order to see these styles, you first need to select an image, then click the left mouse button and swipe over the image without releasing the left mouse button. The <strong>isMarkup</strong> parameter must be set to true, and <strong>isReadOnly</strong> must be set to false, otherwise you will not be able to label the image.
      </p>

      <p class="small-mar">
        <strong>--mu-marking-rect-dragging-fill</strong> - the fill color at the moment of labeling the image.
      </p>

      <p class="small-mar">
        <strong>--mu-marking-rect-dragging-stroke</strong> - the color of the line at the time of labeling the image, we can say the color of the border at the time of labeling.
      </p>

      <p class="small-mar">
        <strong>--mu-marking-rect-dragging-fill-opacity</strong> - transparency of the fill at the moment of labeling the image. As you might guess, if you set the value to 0, there will be no fill, only the outline of the marked area (border) will be visible.
      </p>

      <p class="small-mar">
        <strong>--mu-marking-rect-dragging-stroke-opacity</strong> - transparency of the line at the moment of labeling the image. You can set the value to 0, then only the fill will be displayed for the marked area.
      </p>
    </template>
  </div>
</template>

<script setup>
  const props = defineProps(['isEng', 'query']);
</script>

<style lang="scss">
  
</style>
